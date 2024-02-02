-- Création de la table "carModel" 
CREATE TABLE IF NOT EXISTS
    carModel (
        idCarModel SERIAL PRIMARY KEY,
        nameModel VARCHAR(100),
        doors INT NOT NULL,
        modelPrice INT NOT NULL
    );

----------------------------------------------------------------------------------------------------------- 

-- Création de la table "carEngine"
CREATE TABLE IF NOT EXISTS 
    carEngine (
        idCarEngine SERIAL PRIMARY KEY, 
        nameEngine VARCHAR(100) NOT NULL,
        hp INT NOT NULL,
        fuelType VARCHAR(20) NOT NULL,
        enginePrice INT NOT NULL,
        idCarModel INT REFERENCES carModel (idCarModel)
    );

-----------------------------------------------------------------------------------------------------------

-- Création de la table "car"
CREATE TABLE IF NOT EXISTS 
    car (
        idCar SERIAL PRIMARY KEY, 
        carPrice INT NOT NULL,
        colour VARCHAR(20),
        idCarModel INT REFERENCES carModel (idCarModel),
        idCarEngine INT REFERENCES carEngine (idCarEngine)
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

-----------------------------------------------------------------------------------------------------------

-- INSERTION DE DONNEES D'EXEMPLE

-- Insérer 3 modèles de voitures
INSERT INTO carModel (nameModel, doors, modelPrice) VALUES
    ('Model A', 4, 25000),
    ('Model B', 2, 30000),
    ('Model C', 5, 35000);

-- Insérer 9 moteurs, 3 pour chaque modèle
INSERT INTO carEngine (nameEngine, hp, fuelType, enginePrice, idCarModel)
VALUES
    -- Moteurs pour le modèle A
    ('Moteur A1', 180, 'Essence', 8000, 1),
    ('Moteur A2', 200, 'Diesel', 9000, 1),
    ('Moteur A3', 220, 'Hybride', 10000, 1),
    -- Moteurs pour le modèle B
    ('Moteur B1', 250, 'Essence', 9500, 2),
    ('Moteur B2', 280, 'Électrique', 12000, 2),
    ('Moteur B3', 210, 'Diesel', 10000, 2),
    -- Moteurs pour le modèle C
    ('Moteur C1', 190, 'Hybride', 11000, 3),
    ('Moteur C2', 200, 'Essence', 8500, 3),
    ('Moteur C3', 230, 'Électrique', 13000, 3);

-- Créer 3 utilisateurs
INSERT INTO users (firstname, lastname, email, userPassword, addressLine1, city, province, zip, country)
VALUES
    ('John', 'Doe', 'test@test.fr', 'password', '123 Main St', 'City1', 'Province1', 12345, 'Country1'),
    ('Jane', 'Smith', 'jane@example.com', 'password456', '456 Oak St', 'City2', 'Province2', 56789, 'Country2'),
    ('Bob', 'Johnson', 'bob@example.com', 'password789', '789 Maple St', 'City3', 'Province3', 10111, 'Country3');
    
-- Insérer 3 voitures
INSERT INTO car (carPrice, colour, idCarModel, idCarEngine)
VALUES
    (28000, 'Red', 1, 1),
    (32000, 'Blue', 2, 2),
    (36000, 'Green', 3, 3);

-- Effectuer 2 réservations
INSERT INTO reservation (reservationDate, isPaid, deliveryDate, reservationState, idUser, idCar)
VALUES
    ('2024-02-01', true, '2024-02-15', 'Transit', 1, 1),
    ('2024-01-04', true, '2024-02-1', 'Delivered', 1, 2),
    ('2024-02-05', false, '2024-03-01', 'Pending', 2, 3);