<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    session_start();

    require '../vendor/autoload.php';

    $app = new \Slim\App([
        'settings' => [
            'displayErrorDetails' => true,
        ]
    ]);

    $container = $app->getContainer();

    $container['view'] = function ($container) {

        $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
            'cache' => false,
        ]);

        $view->addExtension(new \Slim\Views\TwigExtension(
            $container->router,
            $container->request->getUri()
        ));

        return $view;
    };

    $container['HomeController'] = function($container) {
        return new \App\Controllers\HomeController($container);
    };

    $container['AuthController'] = function($container) {
        return new \App\Controllers\AuthController($container);
    };

    require __DIR__ . '/../app/routes.php';

    require_once('../app/api/getprojects.php');

    require_once('../app/api/getproject.php');

    require_once('../app/api/deleteProject.php');

    require_once('../app/api/archiveProject.php');

    require_once('../app/api/savePersona.php');

    require_once('../app/api/saveNewPersona.php');

    $app->run();

?>
