<?php

    $app->get('/', 'HomeController:index')->setName('home');

    $app->post('/signup', 'AuthController:postSignUp');

    $app->post('/signin', 'AuthController:postSignIn');

 ?>
