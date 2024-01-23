# 项目结构说明

```
Healthy_Lift
    ├─ app                      前端小程序
        ├─ public                       公共资源
        ├─ src                          前端程序源码
        ├─ package.json                 项目配置文件
        └─ README                       前端程序说明文档    
    ├─ server                   后端服务
        ├─ config                       服务配置
        ├─ controller                   服务控制器
        ├─ log                          服务日志
        ├─ middleware                   服务中间件
        ├─ models                       数据库映射模型  
        ├─ router                       服务路由
        ├─ services                     服务处理器
        ├─ utils                        公共工具类
        ├─ app.ts                       服务入口函数
        ├─ package.json                 项目配置文件
        ├─ tsconfig.json                TS配置文件
        └─ README                       后端服务说明文档          
    ├─ project                  静态资源文件夹
    ├─ db_left.sql              MySQL测试数据脚本
    ├─ ProjectDescription.md    项目需求说明文档  
    └─ README                   项目综合说明文档
```

## Server

后端服务, 核心技术选择: Koa2 + TypeScript

### 部署
| 必要环境    | 版本要求     | 相关链接                                          | 其他说明 |
|:--------|:---------|:----------------------------------------------|:-----|
| node.js | v18.16.0 | https://nodejs.org/en/about/previous-releases |      |
| mysql   | 5.7      | https://dev.mysql.com/downloads/mysql/        |      |

```
启动步骤:
1、 进入 "server" 目录, 打开命令行窗口执行 npm install 或者 yarn install
2、 等待依赖下载完成, 在 "server" 目录下执行 npm run dev 或者 yarn run dev
3、 等待相关配置加载完成, 待命令行输出 "Connection has been established successfully" 即可

说明:
数据库默认端口: 3306, 默认账密: root/root
服务默认端口: 2233
若需修改, 则进入 /server/config/constant.ts 进行配置 
```

## App

前端小程序应用, 技术框架采用 uniapp + vue

### 部署
| 必要环境    | 版本要求     | 相关链接                                          | 其他说明 |
|:--------|:---------|:----------------------------------------------|:-----|
| node.js | v18.16.0 | https://nodejs.org/en/about/previous-releases |      |

```
注意: 请尽量先启动 server服务 与 Nginx服务, 再启动 app小程序, 否则多数资源无法加载

启动步骤:
1、 进入 "app" 目录, 打开命令行窗口执行 npm install (此处不太建议使用yarn install, 部分环境下有问题)
2、 等待依赖下载完成, 在 "app" 目录下执行 npm run dev:h5
3、 等待相关配置加载完成, 待命令行输出 " App running at: ..... " 即可

说明:
小程序默认端口: 8080
若需修改, 则进入 /app/src/manifest.json 进行配置 
```



## nginx

用来部署静态资源文件

### 部署
| 必要环境  | 版本要求   | 相关链接                                    | 其他说明  |
|:------|:-------|:----------------------------------------|:------|
| nginx | 1.24.0 | https://nginx.p2hp.com/en/download.html | 中文网链接 |

- 将 /project/ 目录放到nginx目录下的 /html/内
- 并修改/conf/nginx.conf文件 (参考下文)
- 然后启动nginx.exe即可

```conf
....
http {
    ......
    # 直接复制粘贴即可
    # project Healthy_Life static resource
    server {
    	charset utf-8;
        listen       9999;
        server_name  localhost;
	autoindex on;
	add_header Cache-Control "no-cache, must-revalidate";

        location / {
	    root html;
	    add_header Access-Control-Allow-Origin *;
        }
    }
}
```

## MySQL
注意: 此为可选项。可以让后端服务的sequelize自动生成后再运行db_life.sql, 添加测试数据.  
也可以自行创建db_life库, 在运行db_life.sql, 添加测试数据.

