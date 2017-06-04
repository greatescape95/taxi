-- MySQL dump 10.13  Distrib 5.5.55, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: taxi_db
-- ------------------------------------------------------
-- Server version	5.5.55-0ubuntu0.14.04.1

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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message_text` text NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (3,'s','e','ere',NULL),(4,'s','f','fdfd',NULL),(5,'dsds','a@b','dsadasdsa',NULL),(6,'sasa','','vsdvsd',NULL),(7,'sasa','asd@b','vsdvsd',NULL),(8,'dsfsd','a@bbb','fddffd',NULL),(9,'test','test@test','teststst',NULL),(10,'test','test@test','teststst',NULL),(11,'test','test@test','teststst',NULL),(12,'dsads','a@bb','dsaads',NULL),(13,'dsads','a@bb','dsaads',NULL),(14,'dsads','a@bb','dsaads',NULL),(15,'dsads','a@bb','dsaads',NULL),(16,'dsads','a@bb','dsaads',NULL),(17,'dsads','a@bb','dsaads',NULL),(18,'dassad','a@bn','sdsad',NULL),(19,'dassad','a@bn','sdsad',NULL),(20,'dassad','a@bn','sdsad',NULL),(21,'Toni','toni@something','teeest',NULL),(22,'Toni','toni@something','teeest',NULL),(23,'Toni','toni@something','teeest',NULL),(24,'Toni','toni@something','teeest',NULL),(25,'Toni','toni@something','teeest',NULL),(26,'Toni','toni@something','teeest',NULL),(27,'Toni','toni@something','teeest',NULL),(28,'Toni','toni@something','teeest',NULL),(29,'Toni','toni@something','teeest',NULL),(30,'sdasdasad','a@bb','dsadsasda',NULL),(31,'sdasdasad','a@bb','dsadsasda',NULL),(32,'sdasdasad','a@bb','dsadsasda',NULL),(33,'dfsdfdfs','a@b','dasdasdas',NULL),(34,'dfsdfdfs','a@b','dasdasdas',NULL),(35,'dfsdfdfs','a@b','dasdasdas',NULL),(36,'cdcds','a@b','dsasdasda',NULL),(37,'cdcds','a@b','dsasdasda',NULL),(38,'cdcds','a@b','dsasdasda',NULL),(39,'dsdssd','a@bb','dssdsd',NULL),(40,'dsdssd','a@bb','dssdsd',NULL),(41,'dsdssd','a@bb','dssdsd',NULL),(42,'fddsfdfs','a@bbn','fefefe',NULL),(43,'fddsfdfs','a@bbn','fefefe',NULL),(44,'fddsfdfs','a@bbn','fefefe',NULL),(45,'fddsfdfs','a@bbn','fefefe',NULL),(46,'fddsfdfs','a@bbn','fefefe',NULL),(47,'fddsfdfs','a@bbn','fefefe',NULL),(48,'cdscds','a@bb','dasdasdas',NULL),(49,'cdscds','a@bb','dasdasdas',NULL),(50,'cdscds','a@bb','dasdasdas',NULL),(51,'asdasda','a@bnbn','dssdsdsd',NULL),(52,'asdasda','a@bnbn','dssdsdsd',NULL),(53,'asdasda','a@bnbn','dssdsdsd',NULL),(54,'asdasda','a@bnbn','dssdsdsd',NULL),(55,'asdasda','a@bnbn','dssdsdsd',NULL),(56,'asdasda','a@bnbn','dssdsdsd',NULL),(57,'dsfdfs','csaacd','cdscd',NULL),(58,'dsfdfs','csaacd','cdscd',NULL),(59,'dsfdfs','csaacd','cdscd',NULL),(60,'dsfdfs','csaacd','cdscd',NULL),(61,'dsfdfs','csaacd','cdscd',NULL),(62,'dsfdfs','csaacd','cdscd',NULL),(63,'dcssdc','cdscd','csdscdscd',NULL),(64,'dcssdc','cdscd','csdscdscd',NULL),(65,'dcssdc','cdscd','csdscdscd',NULL),(66,'dcssdc','cdscd','csdscdscd',NULL),(67,'dcssdc','cdscd','csdscdscd',NULL),(68,'dcssdc','cdscd','csdscdscd',NULL),(69,'dcscds','cdsscd','cdcdscds',NULL),(70,'dcscds','cdsscd','cdcdscds',NULL),(71,'dcscds','cdsscd','cdcdscds',NULL),(72,'dcscds','cdsscd','cdcdscds',NULL),(73,'dcscds','cdsscd','cdcdscds',NULL),(74,'dcscds','cdsscd','cdcdscds',NULL),(75,'dcscds','cdsscd','cdcdscds',NULL),(76,'dcscds','cdsscd','cdcdscds',NULL),(77,'dcscds','cdsscd','cdcdscds',NULL),(78,'fsfs','fsfs','fssfs',NULL),(79,'dsdssd','dssdds','dssdsdsdsd',NULL),(80,'dsdssd','dssdds','dssdsdsdsd',NULL),(81,'dsd','dssd','dsdssd',NULL),(82,'dsadsa','dsaadssad','sdasadsad',NULL),(83,'dsadsa','dsaadssad','sdasadsad',NULL),(84,'cdscd','dsccsd','csdscdsdc',NULL),(85,'cdscsd','cdscds','cdscdcsd',NULL),(86,'cdscsd','cdscds','cdscdcsd',NULL),(87,'vfvf','vfvfvf','vfvfvf',NULL),(88,'ccds','cdsc','cdsscdcsd',NULL),(89,'vdvdvd','vdvdvd','vdvdvdvd',NULL),(90,'vdvdvd','vdvdvd','vdvdvdvd',NULL),(91,'svdsd','vsdvdvd','dvsvvsdvs',NULL),(92,'svdsd','vsdvdvd','dvsvvsdvs',NULL),(93,'cdscds','cdsscd','cdsscdcsd',NULL),(94,'cdscs','cdsscd','cdscsdcsd',NULL),(95,'yyy','cxyyc','xcxyy',NULL),(96,'yyy','cxyyc','xcxyy',NULL),(97,'cdsscdcds','csdsdccdscds','cdssddcscdsdsdc',NULL),(98,'cdsscdcds','csdsdccdscds','cdssddcscdsdsdc',NULL),(99,'fddfdfdf','fdfddffd','fdfddffd',NULL),(100,'fddfdfdf','fdfddffd','fdfddffd',NULL),(101,'fddfdfdf','fdfddffd','fdfddffd',NULL),(102,'ssdcds','cddsc','cdsscdcds',NULL),(103,'cdsdc','cdsdcs','cdsscd',NULL),(104,'cdsscdscd','csdscd','cdscsdcds',NULL),(105,'55454453','csddsccds@kkdslad.com','wrqqrereqrq rqwwqrwqr rqwwqrrwq',NULL),(106,'fwewe','cewcecwe','',NULL),(107,'fwewe','cewcecwe','',NULL),(108,'fwewe','cewcecwe','',NULL),(109,'fwewe','cewcecwe','',NULL),(110,'dds','dsadsa','dsadsa',NULL),(111,'gfgf','gfgf','gfd',NULL),(112,'gtrgrt','ggrttr','gtrgt',NULL),(113,'dsfdfsfds','','fdsfsd',NULL),(114,'fdfdsfds','','fsdfds',NULL),(115,'rwrwerew','rewrewrwe','rwerwerwe',NULL),(116,'dsasda','dsaads','dsaads',NULL),(117,'grge','','grg',NULL),(118,'dasdadsa','','dsadssad',NULL),(119,'dsdadasds','','sadsadsadsa',NULL),(120,'','','',NULL),(121,'t5t5t5t5','','frfefrfrrf',NULL),(122,'dscsdcsd','','432423423',NULL),(123,'fdsfds','','sdfdsfdfs',NULL),(124,'312231','','cdscdscds','31223132'),(125,'rffsdfsd','','','fdsfdsfsd'),(126,'fewfew','','dssda','dsdsa');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-04 18:58:20
