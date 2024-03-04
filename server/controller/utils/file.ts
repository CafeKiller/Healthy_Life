import { Context, Next } from 'koa'
import { NGINX_STATIC_PATH } from '../../config/constant'
import { CODE } from '../../config/code'

const uploadDir = NGINX_STATIC_PATH.uploadPath;

export const uploadUserCover = async (ctx:Context, next: Next) => {

  let file  = ctx.request.files?.file;

  if (Array.isArray(file) || !file) throw CODE.errorImageUploadParameters
  let filePath = file.filepath;

  ctx.body = {
    msg: 'File uploaded successfully',
    path: filePath.replace(uploadDir+"\\", 'http://192.168.8.102:9999/project/HL/static/') // 返回文件在服务器上的路径
  };

  return next();
}