<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//return to resources/view and it is a welome.blade.php on resource
// Route::get('/', function () {
//     return view('welcome');
// });

// $router->get('/', function ()
// {
//     return view('welcome');
// });
//display login & register at nav
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', 'PostController@home');
// Route::get('/listpost', 'PostController@home');
Route::resource('/posts', 'PostController');
