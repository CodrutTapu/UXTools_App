<?php

    $app->post('/savePersona', function($request, $response) {

        require_once('dbconnect.php');

        $author_id = $request->getParam('author_id');

        $project_id = $request->getParam('project_id');

        $project_name = $request->getParam('project_name');

        $date_modified  = date("m.d.y");

        $content = $request->getParam('gridElements');

        $database->update("projects", [
            "content" => $content,
            "project_name" => $project_name,
            "date_modified" => $date_modified,
            ], [
                "AND" => [
                    "author_id" => $author_id,
                    "project_id" => $project_id
                ]
            ]);

    });

?>
