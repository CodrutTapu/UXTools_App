<?php

    $app->post('/saveNewPersona', function($request, $response) {

        require_once('dbconnect.php');

        $author_id = $request->getParam('author_id');

        $project_name = $request->getParam('project_name');

        $date_created  = date("m.d.y");

        $date_modified  = date("m.d.y");

        $content = $request->getParam('gridElements');

        $database->insert("projects", [
            "author_id" => $author_id,
            "project_type" => "persona",
            "project_name" => $project_name,
            "date_created" => $date_created,
            "date_modified" => $date_modified,
            "content" => $content,
            "archived" => 0
            ]);

    });

?>
