DROP DATABASE IF EXISTS api_db;

CREATE DATABASE api_db;

USE api_db;

--/////////////////  stores users database  /////////////////--
CREATE TABLE users (
    id INT NOT NULL,
    users_name VARCHAR(60) NOT NULL,
    users_pw VARCHAR(60) NOT NULL,
    users_email VARCHAR(60) NOT NULL,
    users_phone INT NOT NULL,
    PRIMARY KEY (id)
);

--/////////////////  stores reservation info  /////////////////--
CREATE TABLE reservation (
    party_size INT,
    res_time INT,
   -- res_date INT,--
    FOREIGN KEY (users_id),
    REFERENCES users(id)
);

--/////////////////  stores available times  /////////////////--
CREATE TABLE available (
    available_times INT NOT NULL,
);
