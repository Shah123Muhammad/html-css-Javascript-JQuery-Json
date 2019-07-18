--
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `id` smallint(5) unsigned NOT NULL auto_increment,
  `txt` varchar(255) collate utf8_unicode_ci NOT NULL default '',
  `author` varchar(32) collate utf8_unicode_ci NOT NULL default '',
  `bgc` varchar(32) collate utf8_unicode_ci NOT NULL default '',
  `votes` mediumint(9) unsigned NOT NULL default '0',
  `vsum` int(11) unsigned NOT NULL default '0',
  `rating` double NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `rating` (`rating`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `quotes`
--

INSERT INTO `quotes` VALUES(1, 'The most successful people are those who are good at plan B.', 'James Yorke', '#337199', 0, 0, 0);
INSERT INTO `quotes` VALUES(2, 'A verbal contract isn''t worth the paper it''s written on.', 'Samuel Goldwyn', '#550055', 0, 0, 0);
INSERT INTO `quotes` VALUES(3, 'A man wrapped up in himself makes a very small bundle.', 'Benjamin Franklin', '#000055', 0, 0, 0);
INSERT INTO `quotes` VALUES(4, 'Fix your eyes forward on what you can do, not back on what you cannot change.', 'Tom Clancy', '#770000', 0, 0, 0);
INSERT INTO `quotes` VALUES(5, 'I wish people who have trouble communicating would just shut up.', 'Tom Lehrer', '#003300', 0, 0, 0);
INSERT INTO `quotes` VALUES(6, 'The great end of life is not knowledge but action.', 'Thomas Huxley', '#336600', 0, 0, 0);
INSERT INTO `quotes` VALUES(7, 'A good example has twice the value of good advice.', 'Unknown', '#333333', 0, 0, 0);
INSERT INTO `quotes` VALUES(8, 'Some people are so afraid to die that they never begin to live.', 'H. V. Dyke', '#003366', 0, 0, 0);
INSERT INTO `quotes` VALUES(9, 'The greatest risk is to risk nothing at all.', 'Leo Buscaglia', '#0055555', 0, 0, 0);
INSERT INTO `quotes` VALUES(10, 'Inspirations never go in for long engagements; they demand immediate marriage to action.', 'Brendan Francis', '#337199', 0, 0, 0);
INSERT INTO `quotes` VALUES(11, 'Nobody can do everything, but everyone can do something.', 'Unknown', '#007700', 0, 0, 0);
INSERT INTO `quotes` VALUES(12, 'When u get to the end of the rope, tie a knot & hang on.', 'Franklin D Roosevelt', '#550055', 0, 0, 0);
INSERT INTO `quotes` VALUES(13, 'What the heart gives away is never gone ... It is kept in the hearts of others.', 'Robin St. John', '#800000', 0, 0, 0);
INSERT INTO `quotes` VALUES(14, 'Peace if possible, truth at all costs.', 'Martin Luther', '#663399', 0, 0, 0);
INSERT INTO `quotes` VALUES(15, 'We build too many walls and not enough bridges.', 'Isaac Newton', '#222222', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `quotes_votes`
--

CREATE TABLE `quotes_votes` (
  `id` mediumint(9) unsigned NOT NULL auto_increment,
  `qid` smallint(6) unsigned NOT NULL default '0',
  `ip` int(10) NOT NULL default '0',
  `vote` tinyint(1) NOT NULL default '0',
  `date_submit` date NOT NULL default '0000-00-00',
  `dt_submit` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `qid` (`qid`,`ip`,`date_submit`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;