<?php

namespace App\Models;

use CodeIgniter\Model;

class CategoriesModel extends Model
{
  // Especificamos la tabla y la clave primaria
  protected $table = 'recipe_category';
  protected $primaryKey = 'recipe_category_id';

  // Especificamos qué columnas pueden ser manipuladas
  protected $allowedFields = [
    'recipe_category_name', 
  ];

  // GET: Obtener todas las categorías
  public function getCategories()
  {
    $categories = $this->findAll(); // Obtiene todas las categorías
    
    $categoriesProcessed = [];
    foreach($categories as $category){
      $categoryProcessed = [
        'id' => intval($category['recipe_category_id']),
        'name' => $category['recipe_category_name'],
      ];

      array_push($categoriesProcessed, $categoryProcessed);
    }

    return $categoriesProcessed;
  }

}
