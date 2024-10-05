<?php
namespace App\Controllers;

use App\Models\TestModel;
use CodeIgniter\Database\Config;

class CorsController extends BaseController
{
    public function optionsHandler()
    {
        header("Access-Control-Allow-Origin: *"); // Permite acceso desde cualquier origen. Reemplazar * por tu dominio específico si es necesario.
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos permitidos
        header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
        header("Access-Control-Max-Age: 86400"); // Tiempo en segundos para que la política CORS sea cacheada por el navegador
        
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            // Si el método es OPTIONS, termina aquí para evitar ejecutar lógica adicional
            header('HTTP/1.1 200 OK');
            exit();
        }
    }
}