<?php

namespace App\Models;

use CodeIgniter\Model;

class CookwareModel extends Model
{
  // Especificamos la tabla y la clave primaria
  protected $table = 'recipe_cookware';
  protected $primaryKey = 'recipe_cookware_id';

  // Especificamos qué columnas pueden ser manipuladas
  protected $allowedFields = [
    'recipe_cookware_name', 
  ];

  // GET: Obtener todas las categorías
  public function getCookware()
  {
    $cookwares = $this->findAll(); // Obtiene todas las categorías
    
    $cookwaresProcessed = [];
    foreach($cookwares as $cookware){
      $cookwareProcessed = [
        'id' => intval($cookware['recipe_cookware_id']),
        'name' => $cookware['recipe_cookware_name'],
      ];

      array_push($cookwaresProcessed, $cookwareProcessed);
    }

    return $cookwaresProcessed;
  }

}
