<?php

    $app->get('/getprojects/{author_id}', function($request, $response) {

        require_once('dbconnect.php');

        $author_id = $request->getAttribute('author_id');

        $projects = $database->select("projects", "*",["author_id" => $author_id]);

        echo json_encode($projects);

    });

?>
