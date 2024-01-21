/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50741
 Source Host           : localhost:3306
 Source Schema         : db_life

 Target Server Type    : MySQL
 Target Server Version : 50741
 File Encoding         : 65001

 Date: 21/01/2024 20:51:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for adminuser
-- ----------------------------
DROP TABLE IF EXISTS `adminuser`;
CREATE TABLE `adminuser`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '管理员 主键ID',
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员 账号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员 密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '管理员 头像',
  `level` int(11) NOT NULL COMMENT '管理员 权限等级',
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'Token',
  `is_del` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0:未删除, 1:已删除',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of adminuser
-- ----------------------------

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `aid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户 主键id',
  `type` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '文章类别: 0原创 1转载 2未知',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文章标题',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '文章内容',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '佚名' COMMENT '文章作者',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1.jpg' COMMENT '文章封面',
  `is_del` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0:未删除, 1:已删除',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`aid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 1, '测试文章标题', '测试文章内容', '佚名', '0.jpg', 0, '2024-01-21 14:57:54', '2024-01-21 14:57:56', NULL);
INSERT INTO `article` VALUES (2, 1, '“打鼾像唱歌”可能并不是睡得香', '近日，原中国体操运动员、奥运冠军杨威自曝呼吸道出现问题，一度吸不进气，需终身佩戴呼吸机。因其描述的情况与阻塞性睡眠呼吸暂停的症状相符合，使该话题迅速引发了网友对“阻塞性睡眠呼吸暂停”的热议。\r\n\r\n\r\n\r\n阻塞性睡眠呼吸暂停，就是在夜间睡眠时，由于上气道狭窄或塌陷导致的呼吸气流受阻，进而导致夜间频繁发生间歇性的缺氧，同时伴有睡眠结构破坏。“阻塞性睡眠呼吸暂停常见的症状包括慢性心脑血管疾病、认知功能（记忆力、判断力、定向功能等）下降，同时可伴有焦虑、抑郁等情绪。”中日友好医院呼吸与危重症医学科主任医师张晓雷接受科技日报记者采访时称，“阻塞性睡眠呼吸暂停是一种病理损伤，主要问题出现在上气道。同时这种疾病还是会造成多系统损伤的全身性疾病，与心血管、代谢、认知等密切相关。”\r\n\r\n\r\n\r\n据《柳叶刀呼吸医学》2019年“阻塞性睡眠呼吸暂停与全球经济负担”报告显示，阻塞性睡眠呼吸暂停影响全球超10亿人的健康。中国的阻塞性睡眠呼吸暂停患者已达1.76亿，居全球首位，其中需要积极治疗者超过6600万。\r\n\r\n\r\n\r\n如何诊断阻塞性睡眠呼吸暂停？“最直观的是根据症状判断。”张晓雷介绍，比如夜间打鼾时鼾声有高低起伏，同时打鼾过程中伴有呼吸中断；还有些患者会夜间频繁醒、夜尿增多，白天则嗜睡、过度困倦，也有部分患者会失眠。“专业医生会把睡眠呼吸监测以及临床表现结合起来作判断，从而得到较为客观的诊断结果。”张晓雷说。\r\n\r\n\r\n\r\n阻塞性睡眠呼吸暂停的病因是多方面的。张晓雷介绍称，有的是由于上气道解剖结构狭窄引起，比如口、咽、鼻腔狭窄，咽部明显扁桃体肥大，舌体肥大，舌根增大，鼻中隔偏曲；有的是由于咽部脂肪组织增生导致的，比如颈部过多脂肪组织堆积和挤压；还有的是由于颌面部的骨性结构存在问题，比如下颌后缩、下面部过高。\r\n\r\n\r\n\r\n“值得注意的是，随着年龄增长，肌肉功能和激素分泌发生变化等，也可能导致阻塞性睡眠呼吸暂停。”张晓雷介绍，比如女性绝经后雌激素对上气道的保护作用明显减弱也容易导致该疾病。\r\n\r\n\r\n\r\n阻塞性睡眠呼吸暂停的治疗方式是多样的。张晓雷称，医生会根据患者的情况采取个体化的、多学科结合的治疗方式。对于明显超重的患者首先要控制体重，而下颌前移装置（即口腔矫治器）治疗适用于下颌后缩明显的患者；如果患者有明显的扁桃腺增大、软腭低垂的情况，可以考虑腭咽成形术；对于体位依赖性的阻塞性睡眠呼吸暂停患者，可以通过睡眠体位调整进行治疗。\r\n\r\n\r\n\r\n“对于严重的阻塞性睡眠呼吸暂停，最有效的治疗就是晚上睡觉时戴呼吸机。呼吸机能起到气流支架的作用，把狭窄的上气道撑开，从而防止睡眠过程中的气道塌陷。”张晓雷表示，“总而言之，就是要综合考量病人的不同情况后采取个体化治疗方案。”', '科技日报', '1.jpg', 0, '2024-01-21 15:00:10', '2024-01-21 15:00:13', NULL);
INSERT INTO `article` VALUES (3, 2, '腊八粥怎么做更有营养？', '进入农历腊月，过几天就是腊八节了，在我国北方，有“小孩小孩你别馋，过了腊八就是年”之说，意味着过完农历十二月初八就开始拉开了过年的序幕。每到这天，家家户户就开始忙着泡腊八蒜、熬腊八粥了。腊八粥，又称“七宝五味粥”“佛粥”“大家饭”等，是以八方食物合在一起，和米共煮一锅，取和聚万物、调和万灵之意。腊八粥是一种由多样食材熬制而成的粥，不同地区、不同家庭熬制腊八粥的用料虽有不同，但是都包括了谷类、豆类、干果这三大类。\r\n\r\n家庭制作腊八粥应该如何选择用料呢？今天就来简单讲讲。\r\n\r\n一、谷类的选择\r\n\r\n《黄帝内经》中曾经提出“五谷为养，五果为助，五畜为益，五菜为充，气味合而服之，以补精益气”的原则。谷类是以种子为形态，其作为生命活动的开始，营养最为全面，家中常见的有大米、小米、糯米、高粱米、薏米等。\r\n\r\n小米：味甘、性凉，入肾脾胃经，是五谷之首，具有健脾和胃、补益虚损、和中益肾、清热解渴、健胃安眠的作用，是进补的“上品”。小米不仅含有多种氨基酸，其中的维生素、膳食纤维及微量元素是大米的2-3倍之多，小米的整体营养成分都比大米高。\r\n\r\n紫米：味甘、性温，入脾胃经，有益气补血、暖胃健脾、滋补肝肾等作用，因此被人们称为“补血米”“长寿米”。跟小米搭配，能很好地中和其凉性。紫米含有丰富的人体不能合成的氨基酸、蛋白质、维生素及铁、锌等多种矿物元素。\r\n\r\n燕麦：性甘、味平，归脾肝胃经，可起到健脾和胃、健肝强身的作用。燕麦是一种低糖、高蛋白、高能量食物，特别是维生素B，居谷类之首，能稳定血糖，降低血脂、胆固醇，保护心脑血管，提高人体免疫力，调节情绪等功效。\r\n\r\n二、豆类的选择\r\n\r\n豆类食品是一种高蛋白、低脂肪食品，它含有丰富的植物蛋白，其蛋白质含量高达30%-50%，其生理价值几乎与肉相当，且富含人体需要的8种必需氨基酸，大豆食品几乎不含胆固醇，却含有丰富的磷脂和豆固醇，有助于降低血清胆固醇。家庭制作常常有黄豆、红豆、绿豆、芸豆、豇豆等豆类。中医认为，豆类的共性是性平，有化湿补脾的功效。豆类的皮富含膳食纤维，可以改善胃肠道功能，排毒解毒。\r\n\r\n黄豆：性甘平，归脾胃经，具有健脾利湿、润燥消水、解毒的功效。黄豆中含有的大豆异黄酮又称植物雌激素，能够弥补30岁以上女性雌激素分泌不足的缺陷，改善皮肤水分及弹性状况，缓解更年期综合征和改善骨质疏松。\r\n\r\n红豆和绿豆：它们不仅富含B族维生素，还含有优质的植物蛋白质。红豆补心脏，李时珍称为“心之谷”，具有养血清热、健脾益胃的作用；绿豆，具有清热解毒、明目止渴的作用，因为富含钙、磷、铁等无机盐，可以补充体内电解质。\r\n\r\n三、干果的选择\r\n\r\n腊八粥中的干果一部分可提供丰富的蛋白质、维生素、脂质等，一部分可作为甜味剂来使用。常见的有红枣、杏仁、桂圆、葡萄干、枸杞子、花生、莲子、栗子、核桃仁、白果等干果。\r\n\r\n花生：有“长生果”的美称，具有润肺、和胃、止咳、利尿、下乳等多种功能。花生含有丰富的不饱和脂肪酸，其油脂不易在体内储存，可以改善高血压等心脑血管疾病。\r\n\r\n核桃仁：具有补肾纳气、益智健脑、强筋壮骨的作用，还能够增进食欲、乌须生发，核桃仁中所含的维生素E更是医药学界公认的抗衰老药物。\r\n\r\n莲子：具有益肾涩清、养心安神的作用，莲子心具有祛火的功效，尤其适合工作压力大的人食用。\r\n\r\n糖尿病及消化不良人群如何煮腊八粥？\r\n\r\n糖尿病患者如何食用呢？首先要减少熬制时间。其次，选用燕麦、荞麦来作为主料，其可在胃内形成黏稠物质，延缓葡萄糖的吸收，不会导致餐后血糖突然上升。最后减少甜味剂干果种类及数量，多增加豆类及坚果种类，如花生、榛子、杏仁中的膳食纤维含量较高，还含有可调血脂、降血脂的不饱和脂肪酸。即便是含淀粉较多的栗子、莲子等的膳食纤维含量也在1.2%-3%，其血糖生成指数远比精制的米面低。通过这样的搭配，咱们“糖人”也能喝到美味的腊八粥啦。\r\n\r\n如果是消化不良的人群，则恰恰相反，需要把腊八粥稍微熬稠一些，以出现粥油为佳。粥油其实就是煮粥时反复煮沸而浮于粥面上的那层浓稠的液体，也称米油。中医认为，粥油味甘性平，其滋补之功胜于熟地，每日若能喝一碗米粥，黑瘦者不出百日即可肥白。其次，需要减少豆类的摄入，以免出现腹胀。\r\n\r\n所以，制作腊八粥，选料有特别的讲究，尤其是具有食疗作用的原料要根据身体状况投放。', '北京青年报', '5.jpg', 0, '2024-01-17 15:02:05', '2024-01-17 15:02:13', NULL);
INSERT INTO `article` VALUES (4, 2, '世界流感日，防控需做好', '11月1日是世界流感日。进入11月，秋冬季气温变化幅度较大，也是流感等各类呼吸道传染病的高发期。当前我国流感整体流行情况如何？为何要及时接种流感疫苗，接种前后要注意什么？国家疾控局邀请专家接受媒体采访，解答公众关心的流感防控相关热点问题。\r\n\r\n“目前我国流感活动处于中低水平但呈上升趋势。”中国疾控中心病毒病预防控制所国家流感中心主任王大燕介绍，在我国南方省份，9月以来出现甲型H3N2亚型为主导的流感活动升高，与乙型Victoria系流感病毒共同流行。而在北方个别省份，10月以来开始出现流感活动升高，以甲型H3N2亚型为主。\r\n\r\n王大燕表示，预计我国南方省份、北方省份会逐渐进入流感高发期，并出现秋冬季的流感流行高峰，将呈季节性流行。在此期间，流感聚集性疫情可能会增多，聚集性疫情主要发生在学校、幼托机构、养老机构等人群密集的场所，要注意提前做好防控准备。\r\n\r\n\r\n\r\n近日，记者走访基层社区卫生服务中心发现，不少民众自发前来预约接种流感疫苗，部分社区预防接种门诊也正在积极推进接种工作。为何要及时接种流感疫苗，三价和四价流感疫苗怎么选？\r\n\r\n对此，中国疾控中心传染病管理处研究员彭质斌表示，接种流感疫苗可以有效减少感染、发病和重症发生的风险。世界卫生组织每年都基于全球流感监测结果提出下一个流行季节流感三价和四价疫苗的推荐组分。三价和四价流感疫苗都可有效起到预防效果，公众可自愿接种任一种流感疫苗。\r\n\r\n专家建议，在接种流感疫苗前后要注意以下几点，包括接种前要向预防接种工作人员如实告知自己是否有流感疫苗接种禁忌以及健康状况，尤其是发热、急性疾病等特殊情况；预防接种后应现场留观30分钟，无反应方可离开；回家后注意休息，清淡饮食，避免剧烈运动，如出现异常症状，可向预防接种工作人员咨询并报告，必要时及时到规范的医疗机构就诊。\r\n\r\n彭质斌表示，做好今年秋冬季流感防控工作，一方面建议重点和高风险人群及时接种流感疫苗，另一方面公众也要加强个人防护，注意手卫生、戴口罩、勤通风、规律作息等。保持良好个人卫生习惯也是预防流感等呼吸道传染病的重要手段。', '新华社', '2.jpg', 0, '2023-11-11 15:03:26', '2023-11-11 15:03:33', NULL);
INSERT INTO `article` VALUES (5, 2, '统筹医疗资源 方便群众就医', '近期，全国多地遭遇寒潮天气，气温骤降，呼吸道疾病进入冬季高发时期。国家卫健委26日举行新闻发布会，就冬季呼吸道疾病热点问题，回应社会关切。\r\n\r\n  国家卫健委新闻发言人、宣传司副司长米锋表示，国家卫健委会同国家疾控局持续开展呼吸道疾病监测和形势研判，各地要科学统筹医疗资源，落实分级诊疗制度，跨科跨院调剂力量，发挥医联体作用，提高一般性感染的诊疗能力和重症识别转诊效率。要向社会及时公开、持续更新提供儿科、发热门诊等服务的医疗机构信息，发挥互联网医院和基层医疗卫生机构作用，方便群众就近就便有序就医。\r\n\r\n  不同年龄群流行的主要病原体不同\r\n\r\n  监测显示，近期，呼吸道感染性疾病以流感为主，此外还有鼻病毒、肺炎支原体、呼吸道合胞病毒、腺病毒等引起。分析认为，近期我国急性呼吸道疾病持续上升与多种呼吸道病原体叠加有关。\r\n\r\n  “除流感病毒外，在不同年龄群体中主要流行的病原体不同。”中国疾控中心免疫规划首席专家王华庆介绍，“1~4岁人群，以流感病毒、鼻病毒为主；5~14岁人群以流感病毒、外支原体病毒、腺病毒为主；15~59岁人群，以流感病毒、鼻病毒、新冠病毒病原为主；60岁以上的人群，以流感病毒、人偏肺病毒、普通冠状病毒为主。”\r\n\r\n  针对部分儿童退烧后仍咳嗽严重，如何缓解的问题，广东省中医院院长张忠德表示，儿童咳嗽，要分辨清楚是风热还是风寒导致。风热咳嗽，伴喉咙痛、黄痰、黄色鼻涕等症状，可用清热解毒化痰的中成药或西药；风寒咳嗽，如刺激性干咳，伴流清涕，可以用祛寒解表补肺气的中成药。同时，冬季室内外温差和早晚温差较大，要及时更换增补衣服。\r\n\r\n  米锋提醒，大医院人员密集，等候时间长，交叉感染风险较高。家里如有儿童患病症状较轻，可首选到基层医疗卫生机构或综合医院儿科就诊。目前，全国各省卫生健康部门已在官方网站和政务微信平台公布了本地可以提供儿科诊疗服务的医疗机构信息，并将及时更新。\r\n\r\n  门诊服务“应开放尽开放”\r\n\r\n  近期，不少医院发热门诊、儿科诊室排队较长，杭州市卫健委副主任应旭旻在今天的发布会上介绍了杭州市优化医疗服务的做法：一是增加医疗服务供给。门诊服务“应开放尽开放”，各级各类医疗机构呼吸道门诊、发热门诊常态化开放，并积极开设夜间门诊，所有门诊开放信息及时准确对外公布。二是建立动态监测调配机制，医疗资源“应调配尽调配”。医疗机构内部要挖掘医疗资源潜力，动员病房、已转岗有资质的行政人员支援呼吸道门诊。同时，充分利用城市医联体、县医共体牵头医院的力量支援基层医疗机构。三是改善医疗服务举措，服务流程“应简化尽简化”。改善挂号、检查取药等服务流程，增配医疗辅助人员，做好患者答疑解惑工作，提高就诊效率。\r\n\r\n  米锋表示，各地要努力增开相关诊室和治疗区域，适当延长服务时间，加强药品供应保障，发挥中医中药作用，最大限度提高接诊能力和诊疗规范化水平。要做好学校、托幼机构、养老院等重点人群密集场所疫情防控，减少人员流动和探访。\r\n\r\n  增强公众对冬季常见传染病的防病能力\r\n\r\n  疫苗是预防传染病安全、便利、经济的一项措施，不同疫苗针对的主要对象有所不同。王华庆介绍，流感疫苗6月龄以上全人群都可使用，重点推荐老年人、有基础疾病人群和婴幼儿等感染高风险人群接种；新冠病毒疫苗重点推荐60岁以上的老年人、18至59岁患有较严重基础疾病人群、免疫功能低下人群和感染高风险人群接种。\r\n\r\n  王华庆表示，老年人基础疾病占比较大、自身免疫力相对衰弱，是接种疫苗的特殊群体。接种疫苗时需注意严格把握禁忌证，避免严重不良反应；科学把握适应证，一些基础性疾病如处在急性发作期，接种疫苗需要缓种。\r\n\r\n  老人、儿童、孕产期妇女、有基础疾病人群等是呼吸道疾病防治的重点人群。张忠德从中医药保健、治疗方面提出建议：冬天饮食多注重温补，避免燥热油腻；房屋要合理通风，注重屋内保暖、保湿；可以在上午9点、10点，下午4点、5点仍有太阳的时候进行适度运动，但要避免大汗淋漓，损耗正气；睡前可用紫苏叶、艾叶、生姜等中药泡脚，提升抵抗力和抗病能力。\r\n\r\n  提高公众健康意识，增强公众对冬季常见传染病的防病能力，可以有效减少罹患流感等传染病的风险。北京协和医院临床营养科主任于康提醒，合理免疫维持的重要基础是合理膳食，饮食方面应摄入充足的优质蛋白质、新鲜充足的蔬菜水果，保证每天充足饮水，保持健康合理的体重，维护良好免疫力。', '光明日报', '4.jpg', 0, '2023-11-27 15:05:12', '2023-11-28 15:05:20', NULL);
INSERT INTO `article` VALUES (6, 1, '心梗急救如何畅通“快车道”', '心梗起病急、危害大。临床数据显示，我国每年发生急性心梗的患者约100万人，45岁以下心梗发病率上升。\r\n\r\n　　11月20日是中国心梗救治日。业内专家在接受采访时表示，心梗急救正进一步畅通“快车道”，提升救治效果，持续将“健康中国行动——心脑血管疾病防治行动”落到实处。\r\n\r\n　　与心梗抢时间 抓住“黄金120分钟”\r\n\r\n　　急性心梗是冠状动脉急性、持续性缺血缺氧引起的心肌坏死，为一种常见的心脑血管疾病。\r\n\r\n　　国家卫生健康委等多部门近日联合发布的《健康中国行动——心脑血管疾病防治行动实施方案（2023—2030年）》提出，要实施危险因素控制，降低发病和死亡风险，同时完善急救体系，提高规范化、同质化诊疗水平。\r\n\r\n　　首都医科大学附属北京天坛医院院长王拥军说，心脑血管疾病是急性发作的慢性病，在发作早期，生命救治和时间密切相关。公众要能够早期识别症状，遇到难以忍受的胸痛时要去医院。\r\n\r\n　　解放军总医院第六医学中心心血管病医学部主任陈韵岱介绍，在急性心梗发作前的数小时，患者可能出现如下症状：颈部、嗓子难受，堵塞感，常伴有大汗症状；上肢和左肩痛、持续后背或上腹痛、牙痛或下颌痛，这些可能是心脏缺血导致的疼痛放射，并多伴有大汗。\r\n\r\n　　专家提出抓住“黄金120分钟”：抢救心梗患者，要构建从发病到救治的全程绿色通道，让患者在120分钟黄金救治时间内得到抢救。\r\n\r\n　　普及急救知识 公共场所加强AED配备\r\n\r\n　　在河南郑州，中国心梗救治日志愿服务活动中，阜外华中心血管病医院的医护人员走进社区，现场演示了徒手心肺复苏、自动体外除颤器（AED）操作流程。\r\n\r\n　　突发心梗如何自救？专家建议，马上拨打120急救电话，告知准确位置。患者保持平卧，如随身携带急救用药，应立即舌下含服硝酸甘油1片，有条件者可口服阿司匹林。若患者出现意识丧失，需尽快进行胸外按压、心肺复苏等抢救措施，并根据情况借助自动体外除颤器抢救。\r\n\r\n　　自动体外除颤器是一种便携、易操作的心脏急救设备。国家卫生健康委此前印发《公共场所自动体外除颤器配置指南（试行）》，对其配置进行了详细规定。\r\n\r\n　　根据心脑血管疾病防治行动实施方案，我国还将加强急救知识与技能普及，积极推动应急救护培训进社区、进农村、进学校、进企业、进机关、进家庭。同时，加强公共场所自动体外除颤器等急救设施设备配备，对配备的急救设备加强巡检，确保紧急时刻能取可用。\r\n\r\n　　医院急救更畅通 胸痛救治基本网络形成\r\n\r\n　　抢救心梗患者，关键还要打通医院内外多个环节。\r\n\r\n　　针对部分心梗患者就诊延迟、基层转运延迟、治疗流程延迟等问题，国家卫生健康委2017年印发相关文件，要求各地卫生行政部门鼓励指导本辖区医疗机构做好胸痛中心建设和管理工作，提升救治效率。\r\n\r\n　　坐落于西沙群岛的三沙市人民医院，2022年开始建设胸痛中心。同年11月，当地一名男子突发心梗，通过急救绿色通道，经救援直升机转运，到达具备救治条件且距离最近的四川大学华西三亚医院，顺利完成手术。\r\n\r\n　　据统计，目前全国胸痛中心注册数量超5600家，急性心肌梗死患者的平均救治时间由2012年的115分钟，缩短到2020年的75分钟，初步形成了全国急性胸痛救治基本网络。\r\n\r\n　　国家卫生健康委医政司有关负责人介绍，以危急重症为重点，创新急诊急救服务，近年来推动各地在地级市和县的区域内，符合条件的医疗机构建立胸痛中心、卒中中心等。\r\n\r\n　　根据心脑血管疾病防治行动实施方案，有条件的地方未来还将通过建立胸痛“急救地图”，切实提高救治效率。', '佚名', '3.jpg', 0, '2024-01-21 15:06:25', '2024-01-21 15:06:27', NULL);

-- ----------------------------
-- Table structure for daydata
-- ----------------------------
DROP TABLE IF EXISTS `daydata`;
CREATE TABLE `daydata`  (
  `did` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '数据 主键id',
  `uid` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '数据关联用户id',
  `calorie` int(11) NULL DEFAULT NULL COMMENT '当日数据 卡路里',
  `sleep_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '当日数据 睡眠时间',
  `step_num` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '当日数据 步数',
  `exercise_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '当日数据 锻炼时间',
  `foods` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '当日数据 食物',
  `is_del` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0:未删除, 1:已删除',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`did`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of daydata
-- ----------------------------

-- ----------------------------
-- Table structure for normaluser
-- ----------------------------
DROP TABLE IF EXISTS `normaluser`;
CREATE TABLE `normaluser`  (
  `uid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '用户 主键id',
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账户',
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户密码',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  `age` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '用户年龄',
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户性别',
  `height` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户身高',
  `weight` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户体重',
  `user_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户特征Tag',
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户 Token',
  `is_del` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0:未删除, 1:已删除',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of normaluser
-- ----------------------------
INSERT INTO `normaluser` VALUES (1, '18322223333', '五条悟的半身', 'test123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2024-01-19 23:35:57', '2024-01-19 23:35:57', NULL);
INSERT INTO `normaluser` VALUES (2, '18320210361', 'CoffeeKiller', 'Coffee2113', '18320210361@163.com', 21, '男', NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcwNTgxOTY1NywiZXhwIjoxNzA4NDExNjU3fQ.D2dq90WZTt-M7n9Kv19n0GAQSS8Jw2v4heVs0ZcI60A', 0, '2024-01-19 23:36:44', '2024-01-21 14:47:37', NULL);

-- ----------------------------
-- Table structure for plan
-- ----------------------------
DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan`  (
  `pid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '目标计划 主键id',
  `uid` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '目标计划 对应UID',
  `blood_pressure` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标计划 血压',
  `bmi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标计划 BMI',
  `weight` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标计划 体重',
  `heart_rate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标计划 心率',
  `calorie` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标计划 卡路里',
  `kilometre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标计划 公里',
  `is_del` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0:未删除, 1:已删除',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of plan
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
