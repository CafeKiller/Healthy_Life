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

### 管理员表 (admin_users)

| 字段名        | 字段描述   | 数据类型     | 长度  | 必填 | 备注          |
|:-----------|:-------|:---------|:----|:---|:------------|
| id         | 用户ID   | int      | 10  | 是  | 主键          |
| account    | 账户     | varchar  | 255 | 是  | 唯一校验        |
| password   | 密码     | varchar  | 255 | 是  | 哈希加密        |
| level      | 权限等级   | int      | 10  | 是  | 1全部权限 2增改权限 |
| phone      | 联系方式   | int      | 11  | 否  |             |
| email      | 联系邮箱   | varchar  | 128 | 否  |             |
| created_at | 创建时间   | datetime |     | 否  |             |
| udpated_at | 最后修改时间 | datetime |     | 否  |             |
| deleted_at | 删除时间   | datetime |     | 否  |             |
| last_login | 最后登录时间 | datetime |     | 否  |             |
| is_del     | 是否删除   | int      | 10  | 否  | 0未删除 1已删除   |


### 普通用户表 (normal_users)

| 字段名        | 字段描述   | 数据类型     | 长度  | 必填 | 备注        |
|:-----------|:-------|:---------|:----|:---|:----------|
| id         | 用户ID   | int      | 10  | 是  | 主键        |
| account    | 账户     | varchar  | 255 | 是  | 唯一校验      |
| username   | 用户昵称   | varchar  | 255 | 是  |           |
| password   | 密码     | varchar  | 255 | 是  | 哈希加密      |
| gender     | 用户性别   | varchar  | 64  | 是  |           |
| age        | 用户年龄   | varchar  | 64  | 是  |           |
| gender     | 用户性别   | varchar  | 255 | 是  | 用于定制健康规划  |
| age        | 用户年龄   | varchar  | 255 | 是  | 用于定制健康规划  |
| height     | 用户身高   | varchar  | 255 | 是  | 用于定制健康规划  |
| weight     | 用户体重   | varchar  | 255 | 是  | 用于定制健康规划  |
| tags       | 用户特征   | varchar  | 255 | 是  | 用于动态调整规划  |
| email      | 联系邮箱   | varchar  | 128 | 否  |           |
| created_at | 创建时间   | datetime |     | 否  |           |
| udpated_at | 最后修改时间 | datetime |     | 否  |           |
| deleted_at | 删除时间   | datetime |     | 否  |           |
| last_login | 最后登录时间 | datetime |     | 否  |           |
| is_del     | 是否删除   | int      | 10  | 否  | 0未删除 1已删除 |


### 文章表 (articles)

| 字段名        | 字段描述   | 数据类型     | 长度  | 必填 | 备注           |
|:-----------|:-------|:---------|:----|:---|:-------------|
| id         | 文章ID   | int      | 10  | 是  | 主键           |
| title      | 文章标题   | varchar  | 255 | 是  | 唯一校验         |
| content    | 文章内容   | text     |     | 否  | markdown文本格式 |
| author     | 文章作者   | varchar  | 255 | 是  | 默认佚名         |
| cover      | 文章封面图片 | varchar  | 255 | 否  | URL格式        |
| likes      | 文章点赞数  | int      | 10  | 否  |              |
| views      | 文章阅读量  | int      | 10  | 否  |              |
| type       | 文章类型   | int      | 10  | 是  | 0原创 1转载 2未知  |
| created_at | 创建时间   | datetime |     | 否  |              |
| udpated_at | 最后修改时间 | datetime |     | 否  |              |
| deleted_at | 删除时间   | datetime |     | 否  |              |
| is_del     | 是否删除   | int      | 10  | 否  | 0未删除 1已删除    |

### 报告表 (reports)

| 字段名          | 字段描述   | 数据类型     | 长度  | 必填 | 备注          |
|:-------------|:-------|:---------|:----|:---|:------------|
| id           | 报告ID   | int      | 10  | 是  | 主键          |
| uid          | 用户关联ID | int      | 10  | 是  |             |
| report_date  | 报告日期   | varchar  | 255 | 是  | 唯一校验        |
| type         | 报告类型   | int      | 10  | 是  | 0周报 1月报 2季报 |
| score        | 综合评分   | int      | 10  | 是  |             |
| comment      | 总体评价   | varchar  | 255 | 否  |             |
| weight       | 体重     | varchar  | 64  | 是  |             |
| weight_score | 体重评分   | int      | 10  | 是  |             |
| sports       | 运动量    | varchar  | 64  | 是  |             |
| sports_score | 运动量 评分 | int      | 10  | 是  |             |
| sleep        | 睡眠质量   | varchar  | 64  | 是  |             |
| sleep_score  | 睡眠质量评分 | int      | 10  | 是  |             |
| foods        | 睡眠质量   | varchar  | 64  | 是  |             |
| foods_score  | 睡眠质量评分 | int      | 10  | 是  |             |
| created_at   | 创建时间   | datetime |     | 否  |             |
| udpated_at   | 最后修改时间 | datetime |     | 否  |             |
| deleted_at   | 删除时间   | datetime |     | 否  |             |
| is_del       | 是否删除   | int      | 10  | 否  | 0未删除 1已删除   |

### 健康计划表 (plans)

| 字段名           | 字段描述   | 数据类型     | 长度  | 必填 | 备注        |
|:--------------|:-------|:---------|:----|:---|:----------|
| id            | 计划ID   | int      | 10  | 是  | 主键        |
| uid           | 用户关联ID | int      | 10  | 是  |           |
| plan_name     | 计划表名称  | varchar  | 255 | 是  |           |
| plan_desc     | 计划表备注  | text     |     | 否  |           |
| weight        | 体重     | varchar  | 64  | 是  |           |
| exercise_time | 锻炼时间   | varchar  | 64  | 是  |           |
| kilometre     | 步数     | varchar  | 64  | 是  |           |
| calorie       | 卡路里    | varchar  | 64  | 是  |           |
| bmi           | BMI指标  | varchar  | 64  | 否  |           |
| sleep_time    | 睡眠时间   | varchar  | 64  | 是  |           |
| rem_time      | 提醒时间   | datetime |     | 否  | 默认21:00   |
| created_at    | 创建时间   | datetime |     | 否  |           |
| udpated_at    | 最后修改时间 | datetime |     | 否  |           |
| deleted_at    | 删除时间   | datetime |     | 否  |           |
| is_del        | 是否删除   | int      | 10  | 否  | 0未删除 1已删除 |

### 每日数据表 (day_data)

| 字段名           | 字段描述   | 数据类型     | 长度  | 必填 | 备注        |
|:--------------|:-------|:---------|:----|:---|:----------|
| id            | 单日数据ID | int      | 10  | 是  | 主键        |
| uid           | 用户关联ID | int      | 10  | 是  |           |
| p_id          | 计划表ID  | int      | 10  | 是  | 关联对应计划表   |
| weight        | 体重     | varchar  | 64  | 是  |           |
| exercise_time | 锻炼时间   | varchar  | 64  | 是  |           |
| kilometre     | 步数     | varchar  | 64  | 是  |           |
| calorie       | 卡路里    | varchar  | 64  | 是  |           |
| bmi           | BMI指标  | varchar  | 64  | 否  |           |
| sleep_time    | 睡眠时间   | varchar  | 64  | 是  |           |
| foods         | 食物     | varchar  | 255 | 否  | 可转换为卡路里   |
| created_at    | 创建时间   | datetime |     | 否  |           |
| udpated_at    | 最后修改时间 | datetime |     | 否  |           |
| deleted_at    | 删除时间   | datetime |     | 否  |           |
| is_del        | 是否删除   | int      | 10  | 否  | 0未删除 1已删除 |

### 通知表 (notices)

| 字段名          | 字段描述   | 数据类型     | 长度  | 必填 | 备注        |
|:-------------|:-------|:---------|:----|:---|:----------|
| id           | 公告ID   | int      | 10  | 是  | 主键        |
| auid         | 管理员ID  | int      | 10  | 是  |           |
| title        | 标题     | varchar  | 255 | 是  |           |
| release_time | 发布时间   | datetime |     | 否  | 定时发布      |
| tags         | 相关标签   | varchar  | 255 | 否  |           |
| main_text    | 主要内容   | text     |     | 是  |           |
| sub_text     | 次要内容   | varchar  | 64  | 否  |           |
| is_public    | 通知范围   | int      | 10  | 是  | 0全部 1管理员  |
| is_sticky    | 是否置顶   | boolean  |     | 否  |           |
| designated   | 指定通知用户 | varchar  | 255 | 否  | 用户ID使用,分隔 |
| created_at   | 创建时间   | datetime |     | 否  |           |
| udpated_at   | 最后修改时间 | datetime |     | 否  |           |
| deleted_at   | 删除时间   | datetime |     | 否  |           |
| is_del       | 是否删除   | int      | 10  | 否  | 0未删除 1已删除 |