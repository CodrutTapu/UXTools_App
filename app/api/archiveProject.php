<?php

    $app->post('/archiveProject', function($request, $response) {

        require_once('dbconnect.php');

        $author_id = $request->getParam('author_id');

        $project_id = $request->getParam('project_id');

        $state = $database->select("projects", [
            	"archived"
            ], [
                "AND" => [
            		"author_id" => $author_id,
            		"project_id" => $project_id
            	]
            ]);

        if( $state[0]['archived'] == 0 ) {
            $database->update("projects", [
            	"archived" => "1",
                ], [
                    "AND" => [
                		"author_id" => $author_id,
                		"project_id" => $project_id
                	]
                ]);
        } else {
            $database->update("projects", [
            	"archived" => "0",
                ], [
                    "AND" => [
                		"author_id" => $author_id,
                		"project_id" => $project_id
                	]
                ]);
        }

    });

?>
