<?php

    $app->post('/deleteProject', function($request, $response) {

        require_once('dbconnect.php');

        $author_id = $request->getParam('author_id');

        $project_id = $request->getParam('project_id');

        $database->delete("projects", [
        	"AND" => [
        		"author_id" => $author_id,
        		"project_id" => $project_id
        	]
        ]);

    });

?>
