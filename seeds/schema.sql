DROP DATABASE IF EXISTS api_db;

CREATE DATABASE api_db;

USE api_db;

--/////////////////  stores users database  /////////////////--
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    users_name VARCHAR(60) NOT NULL,
    users_phone VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);

--/////////////////  stores reservation info  /////////////////--
CREATE TABLE Reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    reservation_timestamp DATETIME NOT NULL,
    party_size INT NOT NULL,
    FOREIGN KEY (user_id) 
    REFERENCES users(id)
);

--/////////////////  stores available times  /////////////////--
CREATE TABLE available (
    available_times VARCHAR(5) NOT NULL,
);
