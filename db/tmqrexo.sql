-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: eu-cdbr-azure-west-b.cloudapp.net    Database: tnqrexo_db
-- ------------------------------------------------------
-- Server version	5.5.54-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `exos`
--

LOCK TABLES `exos` WRITE;
/*!40000 ALTER TABLE `exos` DISABLE KEYS */;
INSERT INTO `exos` VALUES ('_415k2dfv7','CL_Bidirectional V3','2017-05-09','2017-06-08','_zd5h71uj4','1.6348','17','-324','-0.2008','-1373','258407','256094','Bidirectional Expression of Crude Oil May 18 2017'),('_9vym1eftk','ZW_Bidirectional V3','2017-03-06','2017-06-05','_00jf5asio','2.0525','37','-450','0.3209','-2949','165254','165780','Bidirectional Expression of Wheat Feb 15 2017'),('_en58amals','CL_Bidirectional V3','2011-06-01','2017-06-05','_00jf5asio','1.7152','553','-6180','-0.5950','-22293','256735','100000','Bidirectional Expression of Crude Oil May 18 2017'),('_ipf1fkusr','CL_Bidirectional V3','2017-03-08','2017-06-07','_0olopzcoz','1.6348','27','-438','-0.7801','-8031','257967','251301','Bidirectional Expression of Crude Oil May 18 2017'),('_nem95ufp7','ZC_Bidirectional V3','2017-03-07','2017-06-06','_00jf5asio','2.3429','48','-1044','-0.7471','-1582','151355','150471','Bidirectional Expression of Corn May 23 2017'),('_o2uysakwf','ZW_Bidirectional V3','2016-06-07','2017-06-06','_00jf5asio','2.0525','157','-1566','-0.4452','-3497','165140','157486','Bidirectional Expression of Wheat Feb 15 2017'),('_tyuszmkry','NG_Bidirectional V3','2011-06-01T00:00:00','2017-06-05T00:00:00','_00jf5asio','1.7772','384','-3726','-0.1676','-9972','149378','100000','Bidirectional Expression of the Natural Gas May 31 2017'),('_ziln21om5','NG_Bidirectional V3','2011-06-01','2017-06-05','_gupbsrma8','1.7772','384','-3726','-0.1676','-9972','149378','100000','Bidirectional Expression of the Natural Gas May 31 2017');
/*!40000 ALTER TABLE `exos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('hgDEif-WqglYGkDVUSc-fAq35wK-OrtK',1497972788,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2017-06-20T15:33:07.653Z\",\"httpOnly\":false,\"path\":\"/\"},\"username\":\"test111@test.test\",\"user_id\":\"_00jf5asio\"}'),('nQxWZS7sVaX8YJHjuSdLwDgGSVsbEKqw',1497446691,'{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2017-06-14T13:24:50.568Z\",\"httpOnly\":false,\"path\":\"/\"},\"username\":\"test111@test.test\",\"user_id\":\"_00jf5asio\"}'),('yxiMs7jMMtY3uWhkJFiu-rjD9XqWcbHJ',1497979368,'{\"cookie\":{\"originalMaxAge\":604799999,\"expires\":\"2017-06-20T17:22:47.798Z\",\"httpOnly\":false,\"path\":\"/\"},\"username\":\"test111@test.test\",\"user_id\":\"_00jf5asio\"}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('_00jf5asio','test111@test.test','1bbd886460827015e5d605ed44252251','test','test','100 - 500','Social Media','test','+12(35)34343','test',0),('_0olopzcoz','helloworld@ok.ok','1bbd886460827015e5d605ed44252251','test','test','Over 2000','Social Media','test','+90(36)45654','hello world',0),('_fqbvieab6','test0@test.test','1bbd886460827015e5d605ed44252251','test','test','20 - 100','Current Betterment Customer','test','+12(23)45344','test test test!!!!!',0),('_gupbsrma8','test2@test.test','1bbd886460827015e5d605ed44252251','test','test','500 - 2000','Online Publication','test','+90(34)36534','no',0),('_mbjyjsbnc','hello@test.test','25d55ad283aa400af464c76d713c07ad','test','test','20 - 100','Social Media','test','+12(34)33423','',0),('_r5j6tqgf9','test@test.test','25d55ad283aa400af464c76d713c07ad','test','test','100 - 500','Podcasts','test','+23(23)354235','',0),('_vqg6cz73z','test1@test.test','1bbd886460827015e5d605ed44252251','test','test','100 - 500','Social Media','test','+12(34)34323','',0),('_zd5h71uj4','o.petryk@dinamicka.com','25d55ad283aa400af464c76d713c07ad','Oleksandr ','Petryk','20 - 100','Social Media','Dinamicka  Develpoment','+380501563356','no',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tnqrexo_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-13 20:37:18
