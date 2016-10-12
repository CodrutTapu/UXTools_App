<?php

    $app->get('/edit/{author_id}/{project_type}/{project_id}', function($request, $response) {

        require_once('dbconnect.php');

        $author_id = $request->getAttribute('author_id');

        $project_type = $request->getAttribute('project_type');

        $project_id = $request->getAttribute('project_id');

        $project = $database->select("projects", "*",[
            "AND" => [
            "author_id" => $author_id,
            "project_type" => $project_type,
            "project_id" => $project_id
        ]
        ]);

        echo json_encode($project);

    });

?>
