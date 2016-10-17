<?php
    require  'medoo.php';
    $database = new medoo([

    	'database_type' => 'mysql',
    	'database_name' => 'uxtools',
    	'server' => 'localhost',
    	'username' => 'codrut',
    	'password' => '226633',
    	'charset' => 'utf8',

    	'port' => 3306,

    	'option' => [
    		PDO::ATTR_CASE => PDO::CASE_NATURAL
        ]
    ]);
