CREATE TABLE role (
    role_id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE paid (
    paid_id INT PRIMARY KEY,
    is_paid BOOLEAN
);
CREATE TABLE category (
    category_id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE user (
    user_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(role_id)
);

CREATE TABLE event (
    event_id INT PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    artist VARCHAR(255),
    city VARCHAR(255),
    description TEXT,
    date DATE,
    price FLOAT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE reservation (
    reservation_id INT PRIMARY KEY,
    user_id INT,
    event_id INT,
    paid_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (event_id) REFERENCES event(event_id),
    FOREIGN KEY (paid_id) REFERENCES paid(paid_id)
);