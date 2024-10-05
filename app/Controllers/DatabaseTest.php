<?php
namespace App\Controllers;

use App\Models\TestModel;
use CodeIgniter\Database\Config;

class DatabaseTest extends BaseController
{
    public function index()
    {
        $model = new TestModel();
        $data = $model->findAll();
        return $this->response->setJSON($data);  // Devuelve los datos en formato JSON
    }
}