CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(255) DEFAULT "User"
);

CREATE TABLE paid (
    paid_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    is_paid BOOLEAN
);

CREATE TABLE category (
    category_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255)
);

CREATE TABLE user (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT UNSIGNED,
    FOREIGN KEY (role_id) REFERENCES role (role_id)
);

CREATE TABLE event (
    event_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    image VARCHAR(255),
    artist VARCHAR(255),
    city VARCHAR(255),
    description TEXT,
    date DATE,
    price FLOAT,
    category_id INT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE reservation (
    reservation_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT UNSIGNED,
    event_id INT UNSIGNED,
    paid_id INT UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (event_id) REFERENCES event(event_id),
    FOREIGN KEY (paid_id) REFERENCES paid(paid_id)
);

