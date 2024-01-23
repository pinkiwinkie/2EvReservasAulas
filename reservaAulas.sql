
CREATE DATABASE IF NOT EXISTS reservaAulas;

USE reservaAulas;

CREATE TABLE IF NOT EXISTS users (
  email VARCHAR(255) PRIMARY KEY,
  names VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  pwd VARCHAR(255) NOT NULL,
  user_type VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS spaces (
  space_id INT PRIMARY KEY,
  space_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  booking_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255),
  space_id INT,
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  is_pattern BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (email) REFERENCES users(email),
  FOREIGN KEY (space_id) REFERENCES spaces(space_id)
);

CREATE TABLE IF NOT EXISTS holidays (
  holiday_id INT PRIMARY KEY AUTO_INCREMENT,
  holiday_date DATE NOT NULL,
  holiday_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS calendario (
  horario_name VARCHAR(255) PRIMARY KEY,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  number_of_periods INT NOT NULL,
  hour_of_periods VARCHAR(255) NOT NULL,
  time_per_period INT NOT NULL,
  duration_per_hour INT NOT NULL
);
