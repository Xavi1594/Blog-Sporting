-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 23:07:13
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `img_post` varchar(250) NOT NULL,
  `titulo_post` varchar(200) NOT NULL,
  `fecha_post` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `contenido_post` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `img_post`, `titulo_post`, `fecha_post`, `contenido_post`) VALUES
(22, '1688320124881-miguel.webp', 'Al Sporting no le afecta la nueva «norma Wenger», pero sí habrá fuera de juego semiautomático', '2023-07-02 17:48:44', 'La propuesta de Arsene Wenger para intentar que haya más goles en los partidos de fútbol va por buen camino gracias a la aprobación en fase de pruebas de la nueva regla por parte de la FIFA y la IFAB.\r\n\r\nEl cambio consiste en señalar fuera de juego unicamente cuando se tenga todo el cuerpo adelantado respecto a la línea defensiva, evitando de ese modo los goles anulados por el VAR al realizar revisiones milimétricas con partes del cuerpo inapreciables.\r\n\r\nSin embargo, esta novedad va a tardar en llegar a España. Por ahora se probará con los juveniles de Suecia, así como en Italia y en Países Bajos también han mostrado interés por utilizarlo en alguna de sus competiciones.'),
(30, '1688315805072-aitor.webp', 'Ex Sporting: Aitor García marca un golazo y ya ilusiona en México', '2023-07-02 16:36:45', 'El ya ex del Real Sporting de Gijón, Aitor García, empieza con buen pie en el FC Juárez de México. El jugador español fue clave para remontar al América en la primera jornada.\r\n\r\nEl extremo marcó en el minuto 86 un gran gol que se puede ver en el siguiente vídeo y posteriormente, su compañero Ángel Zapata anotaba el definitivo 1-2 en casa del América para sellar la remontada:\r\n\r\nEl onubense no logró ser titular indiscutible en los planes de Miguel Ángel Ramírez, a pesar de haber acabado como uno de los máximos goleadores con 6 dianas.'),
(31, '1688320082505-cote.webp', 'Cote confía en la progresión de Jeraldino: «Es buen jugador, cada mes le he visto mejor»', '2023-07-02 17:48:02', 'El Campus de Mareo comenzó días atrás el primer turno de su vigésimo séptima edición y finalizará el próximo 5 de agosto. El evento gestionado por su director, Juan Luna, contó ayer con José Ángel \'Cote\' como invitado especial para los participantes y realizó las siguientes declaraciones:\r\n\r\n«Jeraldino es un buen jugador, no es fácil llegar aquí en enero de México y adaptarse, todo lleva su proceso, yo en cada entrenamiento y cada mes que fue pasando le he visto mejor».\r\n\r\n«Creo que no hay que cometer los mismos errores, hay que limpiarse de estos años atrás, afrontarlo con una mentalidad positiva, con ganas, sabiendo que estamos en un club muy importante. Representamos al Sporting, son palabras mayores». '),
(32, '1688314738310-riad.webp', 'Así ven en Barcelona el posible fichaje de Chadi Riad por el Sporting', '2023-07-02 16:18:58', 'Siempre es interesante conocer los diferentes puntos de vista en una noticia y por los micros de Deportes Cope Asturias se ha pasado José Luis Gil, periodista de la misma cadena en Barcelona, que aprovechó para realizar un análisis sobre el culebrón entre Chadi Riad y el Real Sporting de Gijón -desde el minuto 7-:\r\n\r\n\r\n«Cualquier cosa que suene a dinero es bien recibida en Barcelona (risas), pero lo que pasa con Chadi es que también son conscientes de que le ven con opciones de futuro, no para ahora mismo, porque tiene nombres que le cierran la puerta como Araujo, Christensen,...».\r\n\r\n«La opción de una salida en forma de cesión al Sporting sería buena para las tres partes. Ha sido el jugador más destacado por encima de otros más regateadores por ejemplo».'),
(37, '1688397116490-villalba.webp', 'El Sporting confirma el regreso de Villalba, Gaspar Campos, Pablo García, Christian Joel y Enol Coto', '2023-07-03 15:11:56', 'El Real Sporting de Gijón ha hecho público un comunicado oficial en el que confirma el regreso de los 5 jugadores cedidos durante la pasada campaña, tal como se venía contando semanas atrás en La Voz de Asturias.\r\n\r\nGaspar Campos, Pablo García, Fran Villalba, Christian Joel y Enol Coto, todos ellos están citados para empezar el miércoles la pretemporada con Miguel Ángel Ramírez y su cuerpo técnico\r\n\r\nGaspar, cedido al Burgos CF, disputó 30 encuentros y anotó siete goles. Pablo García ascendió a la categoría de plata con la AD Alcorcón, sumando un total de 36 partidos en los que marcó seis goles y dio dos asistencias. Enol, que jugó 27 partidos a buen nivel, también consiguió el ascenso a la Segunda División con el Racing de Ferrol.\r\n\r\nChristian Joel defendió la portería del Real Club Celta de Vigo B en 25 partidos, incluido el play off de ascenso, y entró en la dinámica del primer equipo durante un extenso tramo del curso liguero. Por su parte, Fran Villalba, en el Málaga CF, acumuló 3'),
(45, '1688380836790-milo.webp', 'Los detalles de la salida de Uros Milovanovic del Sporting', '2023-07-03 10:40:36', 'Nuevo capítulo en el culebrón de la salida de Uros Milovanovic, que apunta a no comenzar la pretemporada con el Real Sporting de Gijón si nada se tuerce de nuevo en las próximas horas en la operación para su cesión al TSC Backa Topola.\r\n\r\nEl delantero serbio está citado por el cuerpo técnico de Miguel Ángel Ramírez para realizar la pretemporada, cuyas pruebas médicas comienzan este lunes en la Escuela de Fútbol de Mareo y el Hospital Covadonga, pero tanto el club como su entorno son partidarios de ahorrarle estas gestiones si todo sale adelante. A esta hora no hay citado ningún delantero de la cantera, por lo que el canario contaría con Uros Djurdjevic, Víctor Campuzano y Nacho Jeraldino en esa zona, a la espera de la llegada de un fichaje llamado a pelear la titularidad.\r\n\r\nEl TSC ha mejorado su oferta, por lo que la propuesta del Beveren, que había gustado más en un primer momento al Sporting y no así al delantero centro al tener que jugar en la segunda categoría del fútbol belga, qu'),
(46, '1688397098366-bruno.webp', 'Bruno se queda sin contrato en el Sporting ', '2023-07-03 15:11:38', 'A día de hoy, varios son los refuerzos que aún necesita la plantilla del Real Sporting de Gijón, a pesar de contar prácticamente hasta con una treintena de futbolistas para el inicio de los entrenamientos que tendrá lugar el próximo miércoles. Una de las demarcaciones que requieren de esos retoques, tal y como se ha venido contando estos días en La Voz de Asturias, es la de defensa central. Curiosamente la posición en la que hoy deja de tener vinculación uno de los nombres que defendió la elástica rojiblanca el pasado curso: Bruno González.\r\n\r\nEl veterano central canario de 33 años finaliza hoy su contrato con el Sporting después de llegar con el curso ya iniciado durante el pasado mes de noviembre. Su fichaje, en una apuesta desde el cuerpo técnico de Abelardo Fernández, técnico del equipo por aquel entonces, y que contó con la aprobación del área de gestión deportiva que encabeza Gerardo García, vino para ocupar el lugar de un Axel Bamba que caía lesionado de gravedad y que terminarí'),
(47, '1688397193129-sportingb.webp', 'El Sporting ficha a Aitor Zulaika como nuevo entrenador del filial', '2023-07-03 15:13:13', 'El Real Sporting de Gijón ha cerrado por una temporada el fichaje de Aitor Zulaika Aranguren (Azpeitia, Guipúzcoa, 1978) como nuevo entrenador del filial rojiblanco para la próxima temporada en sustitución de Dani Mori.\r\n\r\nEl técnico vasco tiene experiencia como entrenador en la Tercera División, la vieja Segunda División B y la nueva Primera RFEF. Su trayectoria se ha desarrollado en el País Vasco.\r\n\r\nDespués de dejar su carrera como futbolista, Zulaika se hizo cargo del banquillo del Club Deportivo Lagun Onak durante siete temporadas, consiguiendo el campeonato en la 2008/09 y disputando el play off de ascenso a la Segunda División B.\r\n\r\nEn el curso 2012/13 fue el segundo entrenador y preparador físico del Sestao River. En 2014 se incorporó a la Real Sociedad, que le cedió al Real Unión de Irún durante dos temporadas, etapa en la que consiguió la Copa Federación y disputó el play off de ascenso a la Segunda División.\r\n\r\nRegresó a Zubieta en 2016 para trabajar junto a Imanol Alguacil '),
(48, '1688397439441-jony.webp', 'Jony busca nuevo club a coste cero tras acabar su cesión en el Sporting', '2023-07-03 15:17:19', 'La plantilla del Real Sporting de Gijón empieza hoy lunes las pruebas médicas para el inicio de su pretemporada, una cita en la que no se encuentra Jony Rodríguez, que busca club tras acabar su cesión en El Molinón - Enrique Castro \'Quini\'.\r\n\r\nEl extremo zurdo no entra en los planes de la Lazio y puede negociar con otros clubes con la carta de libertad pese a que había firmado en su momento por un año más de contrato, por lo que estas semanas busca una nueva escuadra donde seguir desarrollando su carrera deportiva a los 31 años -32 el próximo 9 de julio-.\r\n\r\nEl atacante asturiano acumuló durante la pasada campaña 17 partidos disputados, aunque sólo 4 de ellos fueron como titular. En total sumó 556 minutos de juego y marcó 1 gol. Unas cifras muy alejadas de las expectativas creadas a su llegada.\r\nEl Sporting ha iniciado el verano con ese espacio del campo muy recargado al contar con Gaspar Campos, Dani Queipo y Alejandro Lozano para la gira por México, así como Fran Villalba, Jordan Car');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
