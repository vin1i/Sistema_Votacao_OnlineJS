CREATE DATABASE  IF NOT EXISTS `sistemavotacao` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistemavotacao`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: sistemavotacao
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidatos`
--

DROP TABLE IF EXISTS `candidatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `Senha_Votacao` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatos`
--

LOCK TABLES `candidatos` WRITE;
/*!40000 ALTER TABLE `candidatos` DISABLE KEYS */;
INSERT INTO `candidatos` VALUES (9,'Aroldo','121.545.544-44','quadra I Casa 1000','aroldsexample@gmail.com','10'),(10,'Vini','154.454.787-54','Rua José Ulisses','viniexample@gmail.com','12'),(11,'Cassio','454.887.545-54','flores','cassioexample@gmail.com','15'),(12,'Bob Marley','478.745.454-54','Rua das Flores','Bob@example.com','10');
/*!40000 ALTER TABLE `candidatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidatoschapas`
--

DROP TABLE IF EXISTS `candidatoschapas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatoschapas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chapa_id` int DEFAULT NULL,
  `cargo_id` int DEFAULT NULL,
  `candidato_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `chapa_id` (`chapa_id`),
  KEY `candidato_id` (`candidato_id`),
  KEY `candidatoschapas_ibfk_2` (`cargo_id`),
  CONSTRAINT `candidatoschapas_ibfk_1` FOREIGN KEY (`chapa_id`) REFERENCES `chapas` (`id`),
  CONSTRAINT `candidatoschapas_ibfk_3` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatoschapas`
--

LOCK TABLES `candidatoschapas` WRITE;
/*!40000 ALTER TABLE `candidatoschapas` DISABLE KEYS */;
INSERT INTO `candidatoschapas` VALUES (14,1,1,9),(15,2,2,9),(16,2,1,10),(17,2,4,12);
/*!40000 ALTER TABLE `candidatoschapas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidatoseleicoes`
--

DROP TABLE IF EXISTS `candidatoseleicoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatoseleicoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `candidato_id` int NOT NULL,
  `eleicao_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `candidato_id` (`candidato_id`),
  KEY `eleicao_id` (`eleicao_id`),
  CONSTRAINT `candidatoseleicoes_ibfk_1` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`),
  CONSTRAINT `candidatoseleicoes_ibfk_2` FOREIGN KEY (`eleicao_id`) REFERENCES `eleicoes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatoseleicoes`
--

LOCK TABLES `candidatoseleicoes` WRITE;
/*!40000 ALTER TABLE `candidatoseleicoes` DISABLE KEYS */;
INSERT INTO `candidatoseleicoes` VALUES (1,10,5),(2,9,6),(3,11,7),(4,10,7),(5,12,8);
/*!40000 ALTER TABLE `candidatoseleicoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargos`
--

DROP TABLE IF EXISTS `cargos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(255) NOT NULL,
  `eleicao_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eleicao_id` (`eleicao_id`),
  CONSTRAINT `cargos_ibfk_1` FOREIGN KEY (`eleicao_id`) REFERENCES `eleicoes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` VALUES (1,'Síndico',5),(2,'Presidente',6),(3,'Presidente',5),(4,'Tesoureiro',6),(5,'Vice - Presidente',7);
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chapas`
--

DROP TABLE IF EXISTS `chapas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `eleicao_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eleicao_id` (`eleicao_id`),
  CONSTRAINT `chapas_ibfk_1` FOREIGN KEY (`eleicao_id`) REFERENCES `eleicoes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapas`
--

LOCK TABLES `chapas` WRITE;
/*!40000 ALTER TABLE `chapas` DISABLE KEYS */;
INSERT INTO `chapas` VALUES (1,'Grupo A',5),(2,'Grupo B',6),(3,'Grupo C',7),(4,'Grupo C',8);
/*!40000 ALTER TABLE `chapas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eleicoes`
--

DROP TABLE IF EXISTS `eleicoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eleicoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `local` varchar(255) DEFAULT NULL,
  `nome` varchar(255) NOT NULL,
  `hora_inicial` time DEFAULT NULL,
  `hora_final` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eleicoes`
--

LOCK TABLES `eleicoes` WRITE;
/*!40000 ALTER TABLE `eleicoes` DISABLE KEYS */;
INSERT INTO `eleicoes` VALUES (5,'2024-06-11','Salão de Festas','Eleição para Síndico do Condomínio','17:45:00','20:48:00'),(6,'2024-06-04','Casa do Aroldo','Eleição para Melhoria de Infraestrutura','16:46:00','18:48:00'),(7,'2024-06-17','Área de Lazer','Eleição para Presidente do Condomínio','17:30:00','19:30:00'),(8,'2024-06-11','Casa do Cássio','Tesoureiro','20:11:00','21:12:00');
/*!40000 ALTER TABLE `eleicoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eleitores`
--

DROP TABLE IF EXISTS `eleitores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eleitores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  `liberado` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eleitores`
--

LOCK TABLES `eleitores` WRITE;
/*!40000 ALTER TABLE `eleitores` DISABLE KEYS */;
INSERT INTO `eleitores` VALUES (1,'Cássio Bubanz','10045678909','Rua das Rosas, 123','$2b$10$fKq6g9VUWf/A471Ky9eLbevLVy6Kxn9P4nkezbiY6m2jOEFUWfB..',1),(2,'Vini','61582115','Rua José','$2b$10$u9CXBl9DMc2rGnaQU48CwuAZKpUtqTa9yLG4riwpv.6V46N5mjp/q',1),(3,'Aroldo','87898545','Gurupi','$2b$10$zFCYvqkeZuFOu2G/kBm/B.aJGV00Hr960gVo9t1qFhBfFSQIufFaS',1),(4,'Thiago ','4','São Luís','$2b$10$yycTILsWz4JARDF5RUDFxuG1R8rGpNdPBzodYeslKb5TMSqCZF2di',1),(5,'Raul','11111111111','Altos','$2b$10$TKi4hd8awBe.KlAcM1vFqe8zcPjGno18Gz4UIzZej9pzVPfs5T8ki',0),(6,'Lauro','1111111111','Vale do Gavião','$2b$10$IGYNNXlr.hP0VK4asi/mPO6IwLk4C9GaxjvFLUaiZT6z7QBO/1F7C',0),(22,'Bob','121.321.215-45','Massachussets','$2b$10$K0dn5R8AdPR3u1GJs6z7BecetGdaHRNLrFPPsz6vbUVzFumXCLuNO',0),(23,'Bob','454.587.874-54','Gurupi','$2b$10$kFAS2DF0GlBu8VghUiW.NuNwiJYOCywoytOdckU7ALR4EnMPaJu6O',0),(24,'Bob','415.465.454-54','Massachussets','$2b$10$2..OD.UX5bDbXFbwsE8zXOYMQRx5aTAfdk6xCODgn/EMEVf.Vh/bu',0),(25,'Vini2','618.024.599-88','Ulisses','$2b$10$1BusipUzeYgoOUu7i8vFDOUcE0TEqxGbKnwxGDU5AMFtFncFXs4li',0),(26,'vini3','151.515.445-45','Altos','$2b$10$l3usTOK79SlXX6gj7Ij.fuYOIeLCnEifb.KSzCn..stXyCSHP6rpW',0),(27,'Francisco','878.878.754-54','Alphaville','$2b$10$450q5IjCQNN3TiEuBO6EB.C2aNRWxXzpsdTuvJH7fYXPEsMajRX3K',0);
/*!40000 ALTER TABLE `eleitores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votacoes`
--

DROP TABLE IF EXISTS `votacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eleicao_id` int DEFAULT NULL,
  `data_inicio` datetime NOT NULL,
  `data_fim` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eleicao_id` (`eleicao_id`),
  CONSTRAINT `votacoes_ibfk_1` FOREIGN KEY (`eleicao_id`) REFERENCES `eleicoes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votacoes`
--

LOCK TABLES `votacoes` WRITE;
/*!40000 ALTER TABLE `votacoes` DISABLE KEYS */;
INSERT INTO `votacoes` VALUES (1,5,'2024-06-13 15:26:00','2024-06-05 15:26:00'),(2,6,'2024-05-09 15:28:00','2024-06-26 15:28:00'),(3,7,'2024-06-10 16:34:00','2024-06-12 16:34:00'),(4,8,'2024-06-10 20:15:00','2024-06-18 20:15:00');
/*!40000 ALTER TABLE `votacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votos`
--

DROP TABLE IF EXISTS `votos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eleicao_id` int DEFAULT NULL,
  `candidato_id` int DEFAULT NULL,
  `numero_votos` int DEFAULT '0',
  `eleitor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eleicao_id` (`eleicao_id`),
  KEY `candidato_id` (`candidato_id`),
  KEY `fk_eleitor_id` (`eleitor_id`),
  CONSTRAINT `fk_eleitor_id` FOREIGN KEY (`eleitor_id`) REFERENCES `eleitores` (`id`),
  CONSTRAINT `votos_ibfk_1` FOREIGN KEY (`eleicao_id`) REFERENCES `eleicoes` (`id`),
  CONSTRAINT `votos_ibfk_2` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votos`
--

LOCK TABLES `votos` WRITE;
/*!40000 ALTER TABLE `votos` DISABLE KEYS */;
INSERT INTO `votos` VALUES (42,5,10,2,1),(43,8,12,3,5);
/*!40000 ALTER TABLE `votos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 18:16:40
