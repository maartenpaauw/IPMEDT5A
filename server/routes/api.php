<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('actions',    'ActionController');
Route::resource('demos',      'DemoController');
Route::resource('products',   'ProductController');
Route::resource('shelves',    'ShelfController');
Route::resource('shoes',      'ShoeController');
Route::resource('sizes',      'SizeController');
Route::resource('statistics', 'StatisticController');
Route::resource('tags',       'TagController');
