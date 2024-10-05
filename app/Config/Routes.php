<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->get('/test-db', 'DatabaseTest::index');
$routes->options('(:any)', 'CorsController::optionsHandler');

$routes->group('recipes', function ($routes) {
  $routes->get('/', 'RecipeController::index');  // Obtener todas las recetas (GET)
  $routes->get('(:alpha)', 'RecipeController::helpers/$1');  // Obtener solo los helpers (GET)
  $routes->get('(:num)', 'RecipeController::show/$1');  // Obtener una receta por ID (GET)
  $routes->post('/', 'RecipeController::create');  // Crear una nueva receta (POST)
  $routes->put('(:num)', 'RecipeController::update/$1');  // Actualizar una receta por ID (PUT)
  $routes->delete('(:num)', 'RecipeController::delete/$1');  // Eliminar una receta por ID (DELETE)
});

// Todas las rutas que no sean API las maneja Vue.js
$routes->get('(:any)', function () {
  // Cargar el archivo index.html desde el directorio public
  return file_get_contents(FCPATH . 'index.html');
});
