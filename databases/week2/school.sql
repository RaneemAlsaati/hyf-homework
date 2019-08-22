create database school;
use school;
CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins (date)` DATETIME NULL DEFAULT NULL,
  `ends (date)` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `studant` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `Class_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  index (`name`),
  index (`name`),
  CONSTRAINT `fk_Class` FOREIGN KEY (`id`) REFERENCES `Class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




