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

$api = app(\Dingo\Api\Routing\Router::class);

$api->version('v1', function ($api)
{
    // API
    $api->group(['middleware' => 'api.auth'], function ($api)
    {
        $except = ['except' => ['create', 'edit']];

        $api->resource('actions',    \IPMEDT5A\Http\Controllers\ActionController::class, $except);
        $api->resource('demos',      \IPMEDT5A\Http\Controllers\DemoController::class, $except);
        $api->resource('products',   \IPMEDT5A\Http\Controllers\ProductController::class, $except);
        $api->resource('shelves',    \IPMEDT5A\Http\Controllers\ShelfController::class, $except);
        $api->resource('shoes',      \IPMEDT5A\Http\Controllers\ShoeController::class, $except);
        $api->resource('sizes',      \IPMEDT5A\Http\Controllers\SizeController::class, $except);
        $api->resource('statistics', \IPMEDT5A\Http\Controllers\StatisticController::class, $except);
        $api->resource('tags',       \IPMEDT5A\Http\Controllers\TagController::class, $except);
        $api->resource('settings',   \IPMEDT5A\Http\Controllers\SettingController::class, $except);
    });

    // Authenticate
    $api->post('authenticate',       ['as' => 'authenticate.user',  'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticate']);
    $api->post('authenticate/shelf', ['as' => 'authenticate.shelf', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticateShelf']);
});
