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
        $api->resource('actions',    \IPMEDT5A\Http\Controllers\ActionController::class, $except);
        $api->resource('demos',      \IPMEDT5A\Http\Controllers\DemoController::class, $except);
        $api->resource('products',   \IPMEDT5A\Http\Controllers\ProductController::class, $except);
        $api->resource('shelves',    \IPMEDT5A\Http\Controllers\ShelfController::class, $except);
        $api->resource('shoes',      \IPMEDT5A\Http\Controllers\ShoeController::class, $except);
        $api->resource('sizes',      \IPMEDT5A\Http\Controllers\SizeController::class, $except);
        $api->resource('statistics', \IPMEDT5A\Http\Controllers\StatisticController::class, $except);
        $api->resource('tags',       \IPMEDT5A\Http\Controllers\TagController::class, $except);
        $api->resource('settings',   \IPMEDT5A\Http\Controllers\SettingController::class, $except);

        // Statistics
        $api->get('statistics/actions/count', ['as' => 'statistics.actions.count', 'uses' => '\IPMEDT5A\Http\Controllers\StatisticController@actionCount']);

        $api->get('statistics/custom/picked_up_today_grouped_by_hour', ['as' => 'statistics.picked_up_today_grouped_by_hour', 'uses' => '\IPMEDT5A\Http\Controllers\StatisticController@pickedUpTodayGroupedByHour']);
        $api->get('statistics/custom/scanned_today_grouped_by_hour', ['as' => 'statistics.scanned_today_grouped_by_hour', 'uses' => '\IPMEDT5A\Http\Controllers\StatisticController@scannedTodayGroupedByHour']);
        $api->get('statistics/custom/pressed_today_grouped_by_hour', ['as' => 'statistics.pressed_today_grouped_by_hour', 'uses' => '\IPMEDT5A\Http\Controllers\StatisticController@pressedTodayGroupedByHour']);

        // Settings
        $api->post('settings/{setting}/toggle', ['as' => 'actions.toggle', 'uses' => '\IPMEDT5A\Http\Controllers\SettingController@toggle']);

        // Actions
        $api->post('shelves/{shelf}/demos/{demo}/link', ['as' => 'shelves.demo.link', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@linkDemo']);
        $api->post('shelves/{shelf}/demos/{demo_uuid}/scanned', ['as' => 'shelves.actions.demo_scanned', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@demoScanned']);
        $api->post('shelves/{shelf}/tags/{tag}/actions/{action}', ['as' => 'shelves.actions.tag_scanned', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@interactionWithShelf']);
        $api->post('shelves/{shelf}/actions/picked_up', ['as' => 'shelves.actions.picked_up', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@demoPickedUp']);

        // Products
        $api->post('products/upload', ['as' => 'products.upload', 'uses' => '\IPMEDT5A\Http\Controllers\ProductController@uploadProducts']);

        // Authenticate
        $api->post('authenticate/check', ['as' => 'authenticate.check', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticateCheck']);
        $api->post('authenticate/shelf/check', ['as' => 'authenticate.check', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticateShelfCheck']);
    });

    // Authenticate
    $api->post('authenticate', ['as' => 'authenticate.user', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticate']);
    $api->post('authenticate/shelf', ['as' => 'authenticate.shelf', 'uses' => '\IPMEDT5A\Http\Controllers\AuthenticateController@authenticateShelf']);

    // Shelves
    $api->post('shelves/{mac_address}/connect', ['as' => 'shelves.connect', 'uses' => '\IPMEDT5A\Http\Controllers\ShelfController@connect']);
});
