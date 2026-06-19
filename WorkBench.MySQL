-- MySQL Workbench Synchronization
-- Generated: 2026-06-19 09:26
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: gabriela_h_dias

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `SA_Diagrama` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `SA_Diagrama`.`table1` 

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `SA_Diagrama`.`Sensores IoT` (
  `idSensores_IoT` INT(11) NOT NULL,
  `Sensorescol` VARCHAR(45) NOT NULL,
  ` nome` VARCHAR(45) NOT NULL,
  `ID` VARCHAR(45) NOT NULL,
  `tipo_dado` VARCHAR(45) NOT NULL,
  `trem_id` VARCHAR(45) NOT NULL,
  `dados_sensores_idDados_sensores` INT(11) NOT NULL,
  PRIMARY KEY (`idSensores_IoT`),
  INDEX `fk_Sensores IoT_dados_sensores1_idx` (`dados_sensores_idDados_sensores` ASC) VISIBLE,
  CONSTRAINT `fk_Sensores IoT_dados_sensores1`
    FOREIGN KEY (`dados_sensores_idDados_sensores`)
    REFERENCES `SA_Diagrama`.`dados_sensores` (`idDados_sensores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `SA_Diagrama`.`Usuário` (
  `idUsuário` INT(11) NOT NULL,
  `Usuáriocol` VARCHAR(45) NOT NULL,
  `ID` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `Trem_idTrem` INT(11) NOT NULL,
  PRIMARY KEY (`idUsuário`),
  INDEX `fk_Usuário_Trem_idx` (`Trem_idTrem` ASC) VISIBLE,
  CONSTRAINT `fk_Usuário_Trem`
    FOREIGN KEY (`Trem_idTrem`)
    REFERENCES `SA_Diagrama`.`Trem` (`idTrem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `SA_Diagrama`.`Trem` (
  `idTrem` INT(11) NOT NULL,
  `Tremcol` VARCHAR(45) NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Linha` VARCHAR(45) NOT NULL,
  `Placa` VARCHAR(45) NOT NULL,
  `Sensores IoT_idSensores_IoT` INT(11) NOT NULL,
  PRIMARY KEY (`idTrem`),
  INDEX `fk_Trem_Sensores IoT1_idx` (`Sensores IoT_idSensores_IoT` ASC) VISIBLE,
  CONSTRAINT `fk_Trem_Sensores IoT1`
    FOREIGN KEY (`Sensores IoT_idSensores_IoT`)
    REFERENCES `SA_Diagrama`.`Sensores IoT` (`idSensores_IoT`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `SA_Diagrama`.`dados_sensores` (
  `idDados_sensores` INT(11) NOT NULL,
  `dados_sensorescol` VARCHAR(45) NOT NULL,
  `sensor_id` VARCHAR(45) NOT NULL,
  `Data_Horario` VARCHAR(45) NOT NULL,
  `Relatorios_idRelatorios` INT(11) NOT NULL,
  PRIMARY KEY (`idDados_sensores`),
  INDEX `fk_dados_sensores_Relatorios1_idx` (`Relatorios_idRelatorios` ASC) VISIBLE,
  CONSTRAINT `fk_dados_sensores_Relatorios1`
    FOREIGN KEY (`Relatorios_idRelatorios`)
    REFERENCES `SA_Diagrama`.`Relatorios` (`idRelatorios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `SA_Diagrama`.`Relatorios` (
  `idRelatorios` INT(11) NOT NULL,
  `Relatorioscol` VARCHAR(45) NOT NULL,
  `usuario_id` VARCHAR(45) NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `tipo_de_falha` VARCHAR(45) NOT NULL,
  `data_inicio` VARCHAR(45) NOT NULL,
  `data_fim` VARCHAR(45) NOT NULL,
  `data_criação` VARCHAR(45) NOT NULL,
  `Usuário_idUsuário` INT(11) NOT NULL,
  PRIMARY KEY (`idRelatorios`),
  INDEX `fk_Relatorios_Usuário1_idx` (`Usuário_idUsuário` ASC) VISIBLE,
  CONSTRAINT `fk_Relatorios_Usuário1`
    FOREIGN KEY (`Usuário_idUsuário`)
    REFERENCES `SA_Diagrama`.`Usuário` (`idUsuário`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
