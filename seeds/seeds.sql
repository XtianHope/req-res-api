
-- //////////Seeds users table////////// --
INSERT INTO users (id, users_name, users_email, users_phone)
VALUES  
(1, "John Doe", "john.d@email.com", '999-999-9999'),
(2, 'Nick Ryan', 'nick.r@example.com', '987-654-3210'),
(3'Jane Smith', 'jane@example.com', '987-654-3210');

--///////////// Seeds available times  ///////////////--
INSERT INTO available (available_times)
VALUES  ('17:30'),
        ('18:00'),
        ('18:30'),
        ('19:00'),
        ('19:30'),
        ('20:00'),
        ('20:30'),
        ('21:00');

--///////////// Seeds reservation info  ////////////////////--
INSERT INTO Reservations (user_id, reservation_timestamp, party_size)
VALUES
    (1, '2024-02-15 18:00:00', 4),
    (2, '2024-02-16 19:30:00', 2),
    (3, '2024-02-17 20:00:00', 6);