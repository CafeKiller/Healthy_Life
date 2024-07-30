import fs from 'fs'
import path from 'path'

const controllers = {} as { [key: string]: any}

/**
 * @description: 读取文件列表
 * @params: dir: string 文件路径
 * */
function readFileList(dir: string) {
  // 读取目录下的所有文件
  const files = fs.readdirSync(dir)
  /*
  *  代码中使用 fs.readdirSync 和 fs.statSync 进行同步文件读取，这可能会阻塞事件循环，影响性能。
  *  如果目录结构较大，建议使用异步方法。
  * */

  // 子目录or文件遍历
  files.forEach((item) => {

    if (item === "index.ts") return

    // 获取文件的完整路径和状态
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    // 递归读取子目录
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item))
    } else {

      // 处理文件
      // path.sep 来动态获取路径分隔符(win 和 linux的路径分隔符是不同的，比起使用 “\”，path.sep 更合理)
      const temp = fullPath.split(__dirname + path.sep)[1]
      const obj_temp = temp.replaceAll("\\","_").split(".ts")[0]

      // 使用 require 加载文件，并将其赋值给 controllers 对象
      controllers[obj_temp] = require(`./${temp}`)
    }
  })
}

readFileList(__dirname)

export default controllers