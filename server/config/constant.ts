// 环境参数
export const ENV = {
  development: "development", // 开发
  production: "production" // 生产
}

// 固定端口参数
export const FIXED_KEY = {
  port: 2233
}

export const DATABASE = {
  development: {
    dbName: "db_life",
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306
  },
  production: {
    dbName: "db_life",
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306
  }
}

// JWT token配置参数
export const JWT = {
  secret: "ConanEdogawa",
  expires: 60 * 60 * 24 * 30 // 30day
}

export  const NGINX_STATIC_PATH = {
  uploadPath: "D:\\Devtool\\Nginx\\nginx-1.24.0\\html\\project\\HL\\static",
}