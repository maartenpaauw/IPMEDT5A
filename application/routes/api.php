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

// API
$api = app(\Dingo\Api\Routing\Router::class);

// Version 1 routes
$api->version('v1', function ($api)
{
    // API
    $api->group(['middleware' => ['api.auth', 'api']], function ($api)
    {
        // Except front end routes.
        $except = ['except' => ['create', 'edit']];

        // Resource routes.
        $api->resource('actions',    \IPMEDT5A\Http\Controllers\ActionController::class,    $except);
        $api->resource('demos',      \IPMEDT5A\Http\Controllers\DemoController::class,      $except);
        $api->resource('products',   \IPMEDT5A\Http\Controllers\ProductController::class,   $except);
        $api->resource('shelves',    \IPMEDT5A\Http\Controllers\ShelfController::class,     $except);
        $api->resource('shoes',      \IPMEDT5A\Http\Controllers\ShoeController::class,      $except);
        $api->resource('sizes',      \IPMEDT5A\Http\Controllers\SizeController::class,      $except);
        $api->resource('statistics', \IPMEDT5A\Http\Controllers\StatisticController::class, $except);
        $api->resource('tags',       \IPMEDT5A\Http\Controllers\TagController::class,       $except);
        $api->resource('settings',   \IPMEDT5A\Http\Controllers\SettingController::class,   $except);

        // Settings
        $api->post('settings/toggle/{setting}/', ['as' => 'actions.toggle', 'uses' => '\IPMEDT5A\Http\Controllers\SettingController@toggle']);

        // Shelves
        $api->post('shelves/{mac_address}/connect/', ['as' => 'shelves.connect', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@connect']);

        // Actions
        $api->post('shelves/{shelf}/demos/{demo_uuid}/scanned/', ['as' => 'shelves.actions.demo_scanned', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@demoScanned']);
        $api->post('shelves/{shelf}/tags/{tag}/scanned/', ['as' => 'shelves.actions.tag_scanned', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@tagScanned']);
        $api->post('shelves/{shelf}/tags/{tag}/actions/button_pressed/', ['as' => 'shelves.actions.button_pressed', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@buttonPressed']);
        $api->post('shelves/{shelf}/actions/picked_up/', ['as' => 'shelves.actions.picked_up', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@demoPickedUp']);

        // Authenticate
        $api->post('authenticate/check', ['as' => 'authenticate.check', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticateCheck']);
    });

    // Authenticate
    $api->post('authenticate', ['as' => 'authenticate.user', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticate']);
    $api->post('authenticate/shelf', ['as' => 'authenticate.shelf', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticateShelf']);
});
