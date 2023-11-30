/*
 Navicat MySQL Data Transfer

 Source Server         : xsqk
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : xsqk

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 30/11/2023 18:05:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orderlist
-- ----------------------------
DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `readCount` int NULL DEFAULT NULL,
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '1正常 0异常',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderlist
-- ----------------------------
INSERT INTO `orderlist` VALUES (1, '重庆大学', '小黑', '..\\public\\upload\\dJpNQJ_QGQcw4Mmd1dLYmCip.jpg', 123, '正常');
INSERT INTO `orderlist` VALUES (2, '西南大学', '小猿', '..\\public\\upload\\C4uJvh-EIkYuQM_bK5n_ix3n.jpg', 2, '异常');
INSERT INTO `orderlist` VALUES (3, '重庆邮电大学', '小猿', '..\\public\\upload\\JkjnqXPBOtcOIsTPjO2KAue6.png', 266, '正常');
INSERT INTO `orderlist` VALUES (4, '清华大学', '袁满', '..\\public\\upload\\1T04-4M8rU2IBeUR9pcHWsIk.jpg', 2662, '正常');
INSERT INTO `orderlist` VALUES (5, '北京大学', '小猿', '..\\public\\upload\\Ts-UAVgYHbgTARO9RSSZGhKd.jpg', 26, '正常');
INSERT INTO `orderlist` VALUES (6, '北京邮电大学', '小猿', '..\\public\\upload\\1MGnSwVy4KzS61az_kzNpw03.jpg', 26622, '正常');
INSERT INTO `orderlist` VALUES (7, '西安电子科技大学', '小猿', '..\\public\\upload\\DiENeCIYhnmuHB3mSBFz2j5d.jpg', 2662, '正常');
INSERT INTO `orderlist` VALUES (8, '论如何才能找到一份工作', '小猿', '..\\public\\upload\\zXd6NhYHLLd75HZFHGHni0P2.jpg', 26622, '正常');
INSERT INTO `orderlist` VALUES (9, '论财富的重要性。', '小猿', '..\\public\\upload\\Q-bRF6ooAo7UguWR0KoY1Q8C.jpg', 26622, '正常');
INSERT INTO `orderlist` VALUES (11, '如何才能不报错', '小猿', '..\\public\\upload\\IS7r2CeuGK6ooiXqErTR0JMY.jpg', 266, '正常');
INSERT INTO `orderlist` VALUES (12, '为什么要这样', '小猿', '..\\public\\upload\\zYzAEXJ-qEuo0cs5x6R2a-rw.png', 2662, '正常');
INSERT INTO `orderlist` VALUES (14, '孤独才是人生常态', '小猿', '..\\public\\upload\\BcjsWGlG4s7S86HxNyKBgKBc.jpg', 26, '正常');

SET FOREIGN_KEY_CHECKS = 1;
