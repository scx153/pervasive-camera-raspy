-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2020 at 10:59 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `databasepervasive`
--

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `device_id` int(11) NOT NULL,
  `device_name` varchar(255) NOT NULL DEFAULT 'RaspberryPi',
  `peoplecount` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`device_id`, `device_name`, `peoplecount`) VALUES
(1, 'baru1', 20),
(25, 'barugan', 55);

-- --------------------------------------------------------

--
-- Table structure for table `logdata`
--

CREATE TABLE `logdata` (
  `timeLog` datetime NOT NULL,
  `device_idLog` int(100) NOT NULL,
  `peoplecountLog` int(100) NOT NULL,
  `maxcapacityLog` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `logdata`
--

INSERT INTO `logdata` (`timeLog`, `device_idLog`, `peoplecountLog`, `maxcapacityLog`) VALUES
('2020-12-01 13:28:48', 1, 20, 5);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2020-11-21 11:19:03', '2020-11-21 11:19:03'),
(2, 'moderator', '2020-11-21 11:19:03', '2020-11-21 11:19:03'),
(3, 'admin', '2020-11-21 11:21:09', '2020-11-21 11:21:09');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `room_info` varchar(255) NOT NULL DEFAULT '-',
  `length` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `maxcapacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `device_id`, `room_info`, `length`, `width`, `maxcapacity`) VALUES
(1, 1, 'dosen', 5, 5, 11);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'scx153', 'andrerizaldi2015@gmail.com', '$2a$08$5NYEK5l3vJmVA/K1mUwTTOkpmuBpd5pMR8.EgbnkjlctnBtYPwnmy', '2020-11-21 03:49:21', '2020-11-21 03:49:21'),
(4, 'admin', 'admin@admin.com', '$2a$08$m5QtWZYCw1ACpVfSV3koUepVB/3gCLfolMl0B2muW1uy485g/ks1m', '2020-11-21 04:16:58', '2020-11-21 04:16:58'),
(5, 'andrerizaldi', 'scx153@gmail.com', '$2a$08$nerbXMO.tuVZJHi3kfGTMO/CZu4FJ1Uht/65rSwXOdGkSseClNrt6', '2020-12-04 08:05:54', '2020-12-04 08:05:54');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2020-11-21 03:49:21', '2020-11-21 03:49:21', 1, 2),
('2020-11-21 04:16:58', '2020-11-21 04:16:58', 3, 4),
('2020-12-04 08:05:54', '2020-12-04 08:05:54', 3, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`device_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `device_id` (`device_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `device` (`device_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
