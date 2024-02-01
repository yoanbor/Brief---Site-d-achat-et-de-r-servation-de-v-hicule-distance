-- Création de la table "carEngine"
CREATE TABLE IF NOT EXISTS 
    carEngine (
        idCarEngine SERIAL PRIMARY KEY, 
        nameEngine VARCHAR(100) NOT NULL,
        hp INT NOT NULL,
        fuelType VARCHAR(20) NOT NULL,
        enginePrice INT NOT NULL
    );


----------------------------------------------------------------------------------------------------------- 

-- Création de la table "carModel" 
CREATE TABLE IF NOT EXISTS carModel (
    idCarModel SERIAL PRIMARY KEY,
    nameModel VARCHAR(100),
    colour VARCHAR(20),
    doors INT NOT NULL,
    modelPrice INT NOT NULL,
    idCarEngine INT REFERENCES carEngine (idCarEngine)
);

-----------------------------------------------------------------------------------------------------------

-- Création de la table "car"
CREATE TABLE IF NOT EXISTS 
    car (
        idCar SERIAL PRIMARY KEY, 
        carPrice INT NOT NULL,
        idCarModel INT REFERENCES carModel (idCarModel)
    );

----------------------------------------------------------------------------------------------------------- 

-- Création de la table users 
CREATE TABLE IF NOT EXISTS 
    users (
        idUser SERIAL PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        userPassword VARCHAR(255) NOT NULL,
        addressLine1 VARCHAR(100),
        addressLine2 VARCHAR(100), 
        city VARCHAR(50),
        province VARCHAR(50),
        zip INT,
        country VARCHAR(50) 
    );

----------------------------------------------------------------------------------------------------------- 

-- Création de la table "reservation"
CREATE TABLE IF NOT EXISTS 
    reservation (
        idReservation SERIAL PRIMARY KEY,
        reservationDate DATE NOT NULL,
        isPaid boolean NOT NULL,
        deliveryDate DATE NOT NULL,
        reservationState VARCHAR(20) NOT NULL,
      	idUser INT REFERENCES users (idUser),
        idCar INT REFERENCES car (idCar)
    );

----------------------------------------------------------------------------------------------------------- 

-- Création de la table "notification" 
CREATE TABLE IF NOT EXISTS 
    notification (
        idNotification SERIAL PRIMARY KEY,
        dateNotification DATE NOT NULL,
        messageNotification VARCHAR(50) NOT NULL,
        idReservation INT REFERENCES reservation (idReservation)
    );


CREATE ROLE "Application" WITH PASSWORD 'clientPassword';

GRANT SELECT ON TABLE carEngine TO "Application";
GRANT SELECT ON TABLE carModel TO "Application";
GRANT SELECT ON TABLE car TO "Application";
GRANT SELECT ON TABLE users TO "Application";
GRANT SELECT ON TABLE reservation TO "Application";
GRANT SELECT ON TABLE notification TO "Application";

GRANT INSERT ON TABLE carEngine TO "Application";
GRANT INSERT ON TABLE carModel TO "Application";
GRANT INSERT ON TABLE car TO "Application";
GRANT INSERT ON TABLE users TO "Application";
GRANT INSERT ON TABLE reservation TO "Application";
GRANT INSERT ON TABLE notification TO "Application";

GRANT UPDATE ON TABLE carEngine TO "Application";
GRANT UPDATE ON TABLE carModel TO "Application";
GRANT UPDATE ON TABLE car TO "Application";
GRANT UPDATE ON TABLE users TO "Application";
GRANT UPDATE ON TABLE reservation TO "Application";
GRANT UPDATE ON TABLE notification TO "Application";

GRANT DELETE ON TABLE carEngine TO "Application";
GRANT DELETE ON TABLE carModel TO "Application";
GRANT DELETE ON TABLE car TO "Application";
GRANT DELETE ON TABLE users TO "Application";
GRANT DELETE ON TABLE reservation TO "Application";
GRANT DELETE ON TABLE notification TO "Application";
