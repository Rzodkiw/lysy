-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Mar 2025, 12:14
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kalendarz`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kalendarz`
--

CREATE TABLE `kalendarz` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `opis` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `kalendarz`
--

INSERT INTO `kalendarz` (`id`, `data`, `opis`) VALUES
(1, '2025-09-01', 'Bronislawa'),
(1, '2025-09-01', 'Bronislaw'),
(2, '2025-09-02', 'Stefan'),
(3, '2025-09-03', 'Szymon'),
(4, '2025-09-04', 'Rozalia'),
(5, '2025-09-05', 'Wawrzyniec'),
(6, '2025-09-06', 'Beata'),
(7, '2025-09-07', 'Regina'),
(8, '2025-09-08', 'Maria'),
(9, '2025-09-09', 'Piotr'),
(10, '2025-09-10', 'Bernarda'),
(11, '2025-09-11', 'Jacek'),
(12, '2025-09-12', 'Gwidona'),
(13, '2025-09-13', 'Filip'),
(14, '2025-09-14', 'Cyprian'),
(15, '2025-09-15', 'Albina'),
(16, '2025-09-16', 'Edyta'),
(17, '2025-09-17', 'Franciszek'),
(18, '2025-09-18', 'Irena'),
(19, '2025-09-19', 'Konstancja'),
(20, '2025-09-20', 'Filipina'),
(21, '2025-09-21', 'Hipolit'),
(22, '2025-09-22', 'Tomasz'),
(23, '2025-09-23', 'Tekla'),
(24, '2025-09-24', 'Gerard'),
(25, '2025-09-25', 'Aurelia'),
(26, '2025-09-26', 'Justyna'),
(27, '2025-09-27', 'Kosma'),
(28, '2025-09-28', 'Wacław'),
(29, '2025-09-29', 'Michał'),
(30, '2025-09-30', 'Zofia');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
