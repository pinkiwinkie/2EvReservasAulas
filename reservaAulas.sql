-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2024 a las 14:35:56
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservaaulas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bookings`
--

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `space_id` int(11) DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `is_pattern` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bookings`
--

INSERT INTO `bookings` (`booking_id`, `email`, `space_id`, `start_date`, `end_date`, `is_pattern`) VALUES
(6, 'win@gmail.com', 1, '2024-03-07 11:00:00', '2024-03-08 11:30:00', 0),
(8, 'win@gmail.com', 1, '2024-03-04 08:15:00', '2024-03-05 10:05:00', 0),
(9, 'win@gmail.com', 3, '2024-03-07 15:30:00', '2024-03-07 16:25:00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario`
--

CREATE TABLE `calendario` (
  `id` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calendario`
--

INSERT INTO `calendario` (`id`, `start_time`, `end_time`) VALUES
(35, '08:15:00', '09:10:00'),
(36, '09:10:00', '10:05:00'),
(37, '10:05:00', '11:00:00'),
(38, '11:00:00', '11:30:00'),
(39, '11:30:00', '12:25:00'),
(40, '12:25:00', '13:20:00'),
(41, '13:20:00', '14:15:00'),
(42, '14:15:00', '14:35:00'),
(43, '14:35:00', '15:30:00'),
(44, '15:30:00', '16:25:00'),
(45, '16:25:00', '17:20:00'),
(46, '17:20:00', '17:40:00'),
(47, '17:40:00', '18:35:00'),
(48, '18:35:00', '19:30:00'),
(49, '19:30:00', '20:25:00'),
(50, '20:25:00', '21:20:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `id` bigint(20) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`id`, `fechaInicio`, `fechaFin`) VALUES
(30, '2023-09-03', '2024-07-31'),
(31, '2023-09-03', '2024-07-31'),
(32, '2024-03-01', '2024-03-23'),
(33, '2024-03-01', '2024-03-23'),
(34, '2024-03-01', '2024-03-23'),
(35, '2024-03-01', '2024-03-23'),
(36, '2024-03-01', '2024-03-23'),
(37, '2024-03-01', '2024-03-23'),
(38, '2024-03-01', '2024-03-23'),
(39, '2024-03-01', '2024-03-23'),
(40, '2024-03-01', '2024-03-23'),
(41, '2024-03-01', '2024-03-23'),
(42, '2024-03-01', '2024-03-23'),
(43, '2024-03-01', '2024-03-23'),
(44, '2024-03-01', '2024-03-23'),
(45, '2024-03-01', '2024-03-23'),
(46, '2024-03-01', '2024-03-23'),
(47, '2024-03-01', '2024-03-23'),
(48, '2024-09-04', '2025-07-31'),
(49, '2024-09-04', '2025-07-31'),
(50, '2024-09-04', '2025-07-31'),
(51, '2024-03-08', '2024-03-30'),
(52, '2024-03-08', '2024-03-30'),
(53, '2024-03-08', '2024-03-30'),
(54, '2024-03-08', '2024-03-30'),
(55, '2024-03-08', '2024-03-30'),
(56, '2024-03-08', '2024-03-30'),
(57, '2024-03-08', '2024-03-30'),
(58, '2024-03-08', '2024-03-30'),
(59, '2024-03-08', '2024-03-30'),
(60, '2024-03-08', '2024-03-30'),
(61, '2024-03-08', '2024-03-30'),
(62, '2024-03-08', '2024-03-30'),
(63, '2024-03-08', '2024-03-30'),
(64, '2024-03-08', '2024-03-30'),
(65, '2024-03-08', '2024-03-30'),
(66, '2024-03-08', '2024-03-30'),
(67, '2024-03-08', '2024-03-30'),
(68, '2024-03-08', '2024-03-30'),
(69, '2024-03-08', '2024-03-30'),
(70, '2024-03-08', '2024-03-30'),
(71, '2024-03-08', '2024-03-30'),
(72, '2024-03-08', '2024-03-30'),
(73, '2024-03-08', '2024-03-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `holidays`
--

CREATE TABLE `holidays` (
  `holiday_id` int(11) NOT NULL,
  `holiday_date` date NOT NULL,
  `holiday_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spaces`
--

CREATE TABLE `spaces` (
  `space_id` int(11) NOT NULL,
  `space_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `spaces`
--

INSERT INTO `spaces` (`space_id`, `space_name`) VALUES
(1, 'aula 2'),
(2, 'aula 3'),
(3, 'aula 1'),
(4, 'aula 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`email`, `names`, `username`, `pwd`, `user_type`) VALUES
('win@gmail.com', 'win', 'win', '$2y$10$./XkjgxG7QPqrQfl0VKZWuO51fKHAk23XC3jVU91XqM0kBnWcwwuq', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `email` (`email`),
  ADD KEY `space_id` (`space_id`);

--
-- Indices de la tabla `calendario`
--
ALTER TABLE `calendario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `holidays`
--
ALTER TABLE `holidays`
  ADD PRIMARY KEY (`holiday_id`);

--
-- Indices de la tabla `spaces`
--
ALTER TABLE `spaces`
  ADD PRIMARY KEY (`space_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `calendario`
--
ALTER TABLE `calendario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `holidays`
--
ALTER TABLE `holidays`
  MODIFY `holiday_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `spaces`
--
ALTER TABLE `spaces`
  MODIFY `space_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`space_id`) REFERENCES `spaces` (`space_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
