<?php

namespace App\Models;

use CodeIgniter\Model;

class AllergensModel extends Model
{
  // Especificamos la tabla y la clave primaria
  protected $table = 'recipe_allergens';
  protected $primaryKey = 'recipe_allergens_id';

  // Especificamos qué columnas pueden ser manipuladas
  protected $allowedFields = [
    'recipe_allergens_name', 
  ];

  // GET: Obtener todos los alérgenos
  public function getAllergens()
  {
    $allergens = $this->findAll(); // Obtiene todos los alérgenos
    
    $allergensProcessed = [];
    foreach($allergens as $allergen){
      $allergenProcessed = [
        'id' => intval($allergen['recipe_allergens_id']),
        'name' => $allergen['recipe_allergens_name'],
      ];

      array_push($allergensProcessed, $allergenProcessed);
    }

    return $allergensProcessed;
  }

}
