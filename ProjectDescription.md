# 项目说明

## 需求文档
健康生活小程序有以下内容：  
- 健康数据记录：  
    用户可以通过小程序界面输入每日的饮食、运动和睡眠情况。  
    这些数据可以通过表单或者日历视图进行输入。  
    用户可以填写每餐的食物、卡路里摄入、运动时间、睡眠起止时间等信息。  
    这些数据将被存储在用户的个人健康档案中。  
- 健康建议和目标设定：  
    基于用户记录的健康数据，小程序可以使用算法来分析用户的健康状况，并为用户提供个性化的健康建议。  
    例如，如果用户的卡路里摄入超过了建议值，小程序可以建议减少摄入。  
    用户也可以设定自己的健康目标，如减重、增肌、改善睡眠等，小程序可以根据这些目标提供相应建议。   
- 健康数据分析报告：  
    小程序可以生成图表和报告，展示用户的饮食、运动、睡眠等方面的趋势和变化。  
    这些图表可以显示每日、每周或每月的数据，帮助用户了解他们的健康状况。  
    报告还可以包括与健康目标的进度跟踪。  
- 运动计划和记录：  
    用户可以在小程序中查看个性化的运动计划，这些计划可以根据用户的目标和健康状况进行定制。  
    用户可以记录每次的运动时间、类型和强度，这些数据将用于评估运动的效果。  
- 健康资讯和文章：  
    小程序可以提供健康相关的文章、资讯和科普知识，这些内容可以根据用户的兴趣和健康需求进行推荐。  
    用户可以浏览各种健康主题的文章，从中获取有用的信息。  
- 饮食、运动计划推送：  
    小程序可以向用户发送定期的饮食和运动计划提醒，以帮助他们保持健康的生活方式。  
    这些提醒可以根据用户的健康目标和个人设置进行定制。  
- 心理健康支持：  
    小程序可以提供心理健康建议、放松技巧和情绪管理方法。  
    用户可以访问心理健康资源，以帮助他们管理压力、焦虑和情绪问题。  
- 用户设置和个性化：  
    小程序应该允许用户自定义健康目标、计划和提醒设置。  
    用户可以根据自己的需求调整通知频率、目标设定、报告展示方式等。  

```
为了实现上述功能，需要设计合适的用户界面，开发数据库来存储用户的健康数据，
使用算法来分析和生成健康建议，以及设置通知系统来向用户发送提醒。
同时，要确保小程序符合相关的隐私法规，保护用户的健康数据隐私。
以及前端和后端开发、数据分析和用户界面设计等方面的专业知识。
```

## 数据库设计
```ts
// 管理员用户表
adminUser = {
  id: number,         // 管理员id 主键 自增
  account: string,    // 账户 NotNull
  password: string,   // 密码 NotNull
  avatar: string,     // 头像
  is_del
}

// 常规用户表
normalUser = {
  uid: number,        // 用户id 主键 自增
  user_name: string,  // 用户名  NotNull 
  avatar: string,     // 用户头像 
  age: number,        // 用户年龄 NotNull                 
  sex: number,        // 用户性别
  height: string,     // 用户身高
  weight: string,     // 用户体重
  user_tag: string,   // 用户特征Tag
  token: string,      // token
  is_del,
}

// 每日数据表
dayData = {
  did: number,            // 数据id 主键 自增
  uid: number,            // 用户id NotNull
  calorie: number,        // 当日摄入卡路里
  sleepTime: Date,        // 当日睡眠时间
  exerciseTime: Date,     // 当日锻炼时间
  foods: string,          // 当日食物
  is_del
}

// 文章表
article = {
  aid: number,            // 文章id 主键            
  type: boolean,          // 文章类别: 0原创 1转载 2未知
  title: string,          // 文章标题 
  content: string,        // 文章内容
  author: string,         // 文章作者 默认:佚名
  is_del,
}
```