<?php

    namespace App\Controllers;

    use App\Controllers\Controller;

    class AuthController extends Controller {


        public function postSignIn($request, $response) {

            require_once('/../api/dbconnect.php');

            $email = $request->getParam('email');
            $password = $request->getParam('password');

            $user = $database->select("users", "*",["email" => $email]);

            $hash = $user[0]['password'];

            if (password_verify($password, $hash)) {

                return $response->withRedirect('/dashboard');

            } else {

                return $response->withRedirect('/signin');

            }

        }

        public function postSignUp($request, $response) {

            require_once('/../api/dbconnect.php');

            $full_name = $request->getParam('full_name');
            $email = $request->getParam('email');
            $password = password_hash($request->getParam('password'), PASSWORD_DEFAULT);

            $database->insert("users", [
            	"full_name" => $full_name,
            	"email" => $email,
            	"password" => $password
            ]);

            return $response->withRedirect('/');

        }

    }

 ?>
