CREATE TABLE role (
    role_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(255) DEFAULT 1
);

CREATE TABLE paid (
    paid_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    is_paid BOOLEAN
);

CREATE TABLE category (
    category_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255)
);

CREATE TABLE users (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT UNSIGNED DEFAULT 1,
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
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (event_id) REFERENCES event(event_id),
    FOREIGN KEY (paid_id) REFERENCES paid(paid_id)
);
INSERT INTO role (role_id, role) VALUES (1, 'Admin');
INSERT INTO role (role_id, role) VALUES (2, 'User');
INSERT INTO role (role_id, role) VALUES (3, 'Artist');
INSERT INTO role (role_id, role) VALUES (4, 'Organizer');

INSERT INTO paid (paid_id, is_paid) VALUES (1, TRUE);
INSERT INTO paid (paid_id, is_paid) VALUES (2, FALSE);
INSERT INTO paid (paid_id, is_paid) VALUES (3, TRUE);
INSERT INTO paid (paid_id, is_paid) VALUES (4, FALSE);

INSERT INTO category (category_id, name) VALUES (1, 'Music');
INSERT INTO category (category_id, name) VALUES (2, 'Art');
INSERT INTO category (category_id, name) VALUES (3, 'Theatre');
INSERT INTO category (category_id, name) VALUES (4, 'Dance');

INSERT INTO users (user_id, first_name, last_name, email, password, role_id) VALUES (1, 'John', 'Doe', 'john.doe@example.com', 'password123', 1);
INSERT INTO users (user_id, first_name, last_name, email, password, role_id) VALUES (2, 'Jane', 'Smith', 'jane.smith@example.com', 'password123', 2);
INSERT INTO users (user_id, first_name, last_name, email, password, role_id) VALUES (3, 'Alice', 'Johnson', 'alice.johnson@example.com', 'password123', 3);
INSERT INTO users (user_id, first_name, last_name, email, password, role_id) VALUES (4, 'Bob', 'Brown', 'bob.brown@example.com', 'password123', 4);

INSERT INTO event (event_id, name, image, artist, city, description, date, price, category_id) VALUES (1, 'Concert Rock', 'concert_rock.jpg', 'Rock Band', 'Paris', 'A great rock concert', '2024-08-01', 50.0, 1);
INSERT INTO event (event_id, name, image, artist, city, description, date, price, category_id) VALUES (2, 'Art Expo', 'art_expo.jpg', 'Various Artists', 'New York', 'An amazing art exposition', '2024-09-15', 30.0, 2);
INSERT INTO event (event_id, name, image, artist, city, description, date, price, category_id) VALUES (3, 'Theatre Play', 'theatre_play.jpg', 'Famous Playwright', 'London', 'A compelling theatre play', '2024-10-10', 40.0, 3);
INSERT INTO event (event_id, name, image, artist, city, description, date, price, category_id) VALUES (4, 'Dance Performance', 'dance_performance.jpg', 'Renowned Dancer', 'Berlin', 'A stunning dance performance', '2024-11-20', 45.0, 4);

INSERT INTO reservation (reservation_id, user_id, event_id, paid_id) VALUES (1, 1, 1, 1);
INSERT INTO reservation (reservation_id, user_id, event_id, paid_id) VALUES (2, 2, 2, 2);
INSERT INTO reservation (reservation_id, user_id, event_id, paid_id) VALUES (3, 3, 3, 3);
INSERT INTO reservation (reservation_id, user_id, event_id, paid_id) VALUES (4, 4, 4, 4);


