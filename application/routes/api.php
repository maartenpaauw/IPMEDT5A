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

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api)
{
    $api->resource('actions',    \IPMEDT5A\Http\Controllers\ActionController::class);
    $api->resource('demos',      \IPMEDT5A\Http\Controllers\DemoController::class);
    $api->resource('products',   \IPMEDT5A\Http\Controllers\ProductController::class);
    $api->resource('shelves',    \IPMEDT5A\Http\Controllers\ShelfController::class);
    $api->resource('shoes',      \IPMEDT5A\Http\Controllers\ShoeController::class);
    $api->resource('sizes',      \IPMEDT5A\Http\Controllers\SizeController::class);
    $api->resource('statistics', \IPMEDT5A\Http\Controllers\StatisticController::class);
    $api->resource('tags',       \IPMEDT5A\Http\Controllers\TagController::class);
});
