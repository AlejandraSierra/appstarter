<?php

namespace App\Models;

use CodeIgniter\Model;

class RecipeModel extends Model
{
  // Especificamos la tabla y la clave primaria
  protected $table = 'recipe_info';
  protected $primaryKey = 'recipe_info_id';

  // Especificamos qué columnas pueden ser manipuladas
  protected $allowedFields = [
    'recipe_info_name', 
    'recipe_info_short_description', 
    'recipe_info_description', 
    'recipe_info_category',
    'recipe_info_difficult',
    'recipe_info_time',
    'recipe_info_amount',
    'recipe_info_ingredients',
    'recipe_info_allergens',
    'recipe_info_cookware',
    'recipe_info_instructions',
    'recipe_info_side_suggestions',
    'recipe_info_main_image',
    'recipe_info_media',
    'recipe_info_miniature_image',
    'recipe_info_likes',
  ];

  // GET: Obtener todas las recetas
  public function getRecipes()
  {
    $recipes = $this->findAll(); // Obtiene todas las recetas

    $recipesProcessed = [];
    foreach($recipes as $recipe){
      $recipeProcessed = [
        'id' => $recipe['recipe_info_id'],
        'name' => $recipe['recipe_info_name'],
        'category' => $recipe['recipe_info_category'],
        'actions' => [
          'edit' => true,
          'delete' => true
        ]
      ];

      array_push($recipesProcessed, $recipeProcessed);
    }
    
    return $recipesProcessed;
  }

  // GET: Obtener una receta por su ID
  public function getRecipeById($id)
  {
    $recipe = $this->where('recipe_info_id', $id)->first(); // Obtiene una receta específica

    $category = [1,2];
    $difficult = 1;
    $ingredients = [
      [
        "amount" => 100,
        "units" => 1,
        "name" => 'Arroz',
        "allergens" => [1,2]
      ],
      [
        "amount" => 2,
        "units" => 2,
        "name" => 'Ingrediente 2',
        "allergens" => [3]
      ]
    ];
    $cookware = [1,3];
    $instructions = [
      [
        "step" => 1,
        "description" => 'Primer paso para hacer la receta'
      ],
    ];

    $recipeProcessed = [
      'id' => $recipe['recipe_info_id'],
      'name' => $recipe['recipe_info_name'],
      'shortDescription' => $recipe['recipe_info_short_description'],
      'longDescription' => $recipe['recipe_info_description'],
      'category' => $category,
      'difficult' => $difficult,
      'cookingTime' => $recipe['recipe_info_time'],
      'portions' => $recipe['recipe_info_amount'],
      'ingredients' => $ingredients,
      'cookware' => $cookware,
      'instructions' => $instructions,
      'sideSuggestions' => $recipe['recipe_info_side_suggestions'],
      'largeImage' => $recipe['recipe_info_main_image'],
      'smallImage' => $recipe['recipe_info_miniature_image'],
      'video' => $recipe['recipe_info_media'],
      'likes' => $recipe['recipe_info_likes']
    ];

    return $recipeProcessed;
  }

  // POST: Crear una nueva receta
  public function createRecipe($data)
  {
    $category = $data['category'];
    $difficult = $data['difficult'];
    $ingredients = $data['ingredients'];
    $allergens = $data['allergens'];
    $cookware = $data['cookware'];
    $instructions = $data['instructions'];

    $recipeProcessed = [
      'recipe_info_name' => $data['name'],
      'recipe_info_short_description' => $data['shortDescription'],
      'recipe_info_description' => $data['longDescription'],
      'recipe_info_category' => $category,
      'recipe_info_difficult' => $difficult,
      'recipe_info_time' => $data['cookingTime'],
      'recipe_info_amount' => $data['portions'],
      'recipe_info_ingredients' => $ingredients,
      'recipe_info_allergens' => $allergens,
      'recipe_info_cookware' => $cookware,
      'recipe_info_instructions' => $instructions,
      'recipe_info_side_suggestions' => $data['sideSuggestions'],
      'recipe_info_main_image' => $data['largeImage'],
      'recipe_info_media' => $data['video'],
      'recipe_info_miniature_image' => $data['smallImage'],
      'recipe_info_likes' => $data['likes'],
    ];
    return $this->insert($recipeProcessed); // Inserta una nueva receta
  }

  // PUT: Actualizar una receta existente
  public function updateRecipe($id, $data)
  {
    $savedRecipeInfo = $this->getRecipeById($id);
    $modifiedFields = array_diff($savedRecipeInfo, $data);
    if(!empty($modifiedFields)){
      $fieldsToUpdate = [];

      foreach($modifiedFields as $field){
        if($field == 'name') $fieldsToUpdate['recipe_info_name'] = $field['name'];
        if($field == 'shortDescription') $fieldsToUpdate['recipe_info_short_description'] = $field['shortDescription'];
        if($field == 'longDescription') $fieldsToUpdate['recipe_info_description'] = $field['longDescription'];
        if($field == 'cookingTime') $fieldsToUpdate['recipe_info_time'] = $field['cookingTime'];
        if($field == 'portions') $fieldsToUpdate['recipe_info_amount'] = $field['portions'];
        if($field == 'sideSuggestions') $fieldsToUpdate['recipe_info_side_suggestions'] = $field['sideSuggestions'];
        if($field == 'largeImage') $fieldsToUpdate['recipe_info_main_image'] = $field['largeImage'];
        if($field == 'smallImage') $fieldsToUpdate['recipe_info_miniature_image'] = $field['smallImage'];
        if($field == 'video') $fieldsToUpdate['recipe_info_media'] = $field['video'];
        if($field == 'likes') $fieldsToUpdate['recipe_info_likes'] = $field['likes'];

        if($field == 'category'){
          $fieldsToUpdate['recipe_info_category'] = 'pending';
        }
        if($field == 'difficult'){
          $fieldsToUpdate['recipe_info_difficult'] = 'pending';
        }
        if($field == 'ingredients'){
          $fieldsToUpdate['recipe_info_ingredients'] = 'pending';
        }
        if($field == 'allergens'){
          $fieldsToUpdate['recipe_info_allergens'] = 'pending';
        }
        if($field == 'cookware'){
          $fieldsToUpdate['recipe_info_cookware'] = 'pending';
        }
        if($field == 'instructions'){
          $fieldsToUpdate['recipe_info_instructions'] = 'pending';
        }
      }

      return $this->update($id, $fieldsToUpdate); // Actualiza la receta con el ID proporcionado
    }
    return;
  }

  // DELETE: Eliminar una receta por su ID
  public function deleteRecipe($id)
  {
    return $this->delete($id); // Elimina la receta con el ID proporcionado
  }

  // RETURN difficulties
  public function getDifficulties()
  {
    $difficulties = $this->db->table('recipe_difficult') // Supongamos que hay una tabla de relación
                              ->select('*')
                              ->get()
                              ->getResultArray();
    
    $difficultiesProcessed = [];
    foreach($difficulties as $difficult){
      $difficultProcessed = [
        'id' => intval($difficult['recipe_difficult_id']),
        'value' => intval($difficult['recipe_difficult_value']),
        'name' => $difficult['recipe_difficult_name']
      ];
      array_push($difficultiesProcessed, $difficultProcessed);
    }

    return $difficultiesProcessed;
  }

  // RETURN units of measurement
  public function getIngredientsUnits()
  {
    $ingredientsUnits = [
      [
        'id' => 1,
        'name' => 'Unidades',
      ],
      [
        'id' => 2,
        'name' => 'Gramos',
      ],
      [
        'id' => 3,
        'name' => 'Kilos',
      ],
      [
        'id' => 4,
        'name' => 'Mililitros',
      ],
      [
        'id' => 5,
        'name' => 'Litros',
      ],
      [
        'id' => 6,
        'name' => 'Cucharaditas',
      ],
      [
        'id' => 7,
        'name' => 'Cucharadas',
      ]
    ];

    return $ingredientsUnits;
  }
}