<?php

namespace App\Controllers;

use App\Models\RecipeModel;
use App\Models\AllergensModel;
use App\Models\CategoriesModel;
use App\Models\CookwareModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\Database\Config;

class RecipeController extends ResourceController
{
  protected $modelName = 'App\Models\RecipeModel';
  protected $format    = 'json'; // Usamos formato JSON para las respuestas

  // GET: /recipes -> recetas que se muestran en el listado de recetas
  public function index()
  {
    $recipes = $this->model->getRecipes();

    $returnData = [
      'recipes' => $recipes
    ];

    return $this->respond($returnData);
  }

    // GET: /recipes/helpers -> helpers
    public function helpers($string)
    {
      if($string === 'helpers'){
        $allergensModel = new AllergensModel();
        $categoriesModel = new CategoriesModel();
        $cookwareModel = new CookwareModel();

        $allergens = $allergensModel->getAllergens();
        $categories = $categoriesModel->getCategories();
        $cookware = $cookwareModel->getCookware();
        $difficulties = $this->model->getDifficulties();
        $ingredientsUnits = $this->model->getIngredientsUnits();

        $helpers = [
          'allergens' => $allergens,
          'categories' => $categories,
          'cookware' => $cookware,
          'difficulties' => $difficulties,
          'ingredientsUnits' => $ingredientsUnits
        ];
    
        $returnData = [
          'helpers' => $helpers
        ];
    
        return $this->respond($returnData);
      }else{
        $message = 'url inválida';
        return $this->respondNoContent($message);
      }
    

    }
  

  // GET: /recipes/{id} -> Datos que se muestran al pinchar 'editar' en la lista de recetas
  public function show($id = null)
  {
    if (!$recipe = $this->model->getRecipeById($id)) {
      return $this->failNotFound('La receta no ha sido encontrada');
    }

    $returnData = [
      'recipe' => $recipe,
    ];

    return $this->respond($returnData);
  }

  // POST: /recipes
  public function create()
  {
    $data = $this->request->getPost();
    $id = $this->model->createRecipe($data);

    return $this->respondCreated(['id' => $id, 'message' => 'Receta creada con éxito']);
  }

  // PUT: /recipes/{id}
  public function update($id = null)
  {
    $data = $this->request->getRawInput(); // Obtiene los datos del cuerpo de la solicitud

    $recipe = $this->model->getRecipeById($id);

    if (!$recipe) {
      return $this->failNotFound('La receta no ha sido encontrada');
    }

    $this->model->updateRecipe($id, $data);
    return $this->respond(['message' => 'Receta actualizada con éxito']);
  }

  // DELETE: /recipes/{id}
  public function delete($id = null)
  {
    $recipe = $this->model->getRecipeById($id);

    if (!$recipe) {
      return $this->failNotFound('La receta no ha sido encontrada');
    }

    $this->model->deleteRecipe($id);
    return $this->respondDeleted(['message' => 'Receta eliminada con éxito']);
  }
}
