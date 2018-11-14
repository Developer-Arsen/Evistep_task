<?php

class Database
{
    public static function getConnection()
    {
        $paramsPath = ROOT.'/db_params.php';
        $params = include $paramsPath;

        $dsn = "mysql:host={$params['host']};dbname={$params['dbname']};charset={$params['charset']}";
        $db = new PDO($dsn, $params['user'], $params['password']);

        return $db;
    }
}
