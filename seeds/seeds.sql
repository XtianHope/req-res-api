
-- //////////Seeds users table////////// --
INSERT INTO users (id, users_name, users_pw, users_email, users_phone)
VALUES  (1, "John Doe", "password", "john.d@email.com", 9999999999);

--///////////// Seeds available times  ///////////////--
INSERT INTO available (available_times)
VALUES  (530),
        (600),
        (630),
        (700),
        (730),
        (800),
        (830),
        (900);

--///////////// Seeds reservation info  ////////////////////--
INSERT INTO reservation (party_size, res_time, users_id)
VALUES  (0,0,0);