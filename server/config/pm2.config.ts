import { ENV } from "../config/constant"

export const apps = [
  {
    name: "production",
    script: "./bin/www",
    args: "one two",
    instances: 2,
    cron_restart: "0 03 * * *",
    autorestart: true,
    watch: false,
    min_uptime: "200s",
    max_restart: 10,
    ignore_watch: [
      "node_modules",
      ".idea",
      "log"
    ],
    max_memory_restart: "1G",
    restart_delay: 3000,
    env: {
      NODE_ENV: ENV.production
    }
  },
]