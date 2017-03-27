<?php

namespace IPMEDT5A\Http\Controllers;

use Illuminate\Http\Request;
use IPMEDT5A\Models\Action;
use IPMEDT5A\Models\Shelf;
use IPMEDT5A\Models\Statistic;
use IPMEDT5A\Models\Tag;
use IPMEDT5A\Transformers\ShelfTransformer;
use IPMEDT5A\Transformers\StatisticTransformer;

/**
 * Class ShelfController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Shelves")
 */
class ShelfController extends Controller
{
    /**
     * Display a listing of the shelves.
     *
     * @Get("/api/shelves/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"demo_id":3,"mac_address":"91:86:26:67:1E:53","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","demo":{"id":3,"product_id":11,"uuid":"aa5ebcd1-5602-3413-9d43-80e1a1123151","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","product":{"id":11,"shoe_id":10,"size_id":12,"sku":"5610726471739","price":"113.50","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","shoe":{"id":10,"name":"SlateBlue","brand":"Walter PLC","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"size":{"id":12,"eu_size":"35.5","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shelves = Shelf::all();

        return $this->response->collection($shelves, new ShelfTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified shelf.
     *
     * @Get("/api/shelves/{shelf}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("shelf", description="The mac_address of the shelf.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"demo_id":3,"mac_address":"THE_MAC_ADDRESS","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","demo":{"id":3,"product_id":11,"uuid":"aa5ebcd1-5602-3413-9d43-80e1a1123151","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","product":{"id":11,"shoe_id":10,"size_id":12,"sku":"5610726471739","price":"113.50","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","shoe":{"id":10,"name":"SlateBlue","brand":"Walter PLC","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"size":{"id":12,"eu_size":"35.5","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Shelf  $shelf
     * @return \Illuminate\Http\Response
     */
    public function show(Shelf $shelf)
    {
        return $this->response->item($shelf, new ShelfTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Shelf  $shelf
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shelf $shelf)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Shelf  $shelf
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shelf $shelf)
    {
        //
    }

    /**
     * Connect a brand new shelf to the API.
     *
     * @Post("/api/shelves/connect/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request({"mac_address": "THE_MAC_ADDRESS"}, headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":4,"demo_id":null,"mac_address":"THE_MAC_ADDRESS","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","demo":null}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param $mac_address
     * @return \Dingo\Api\Http\Response
     */
    public function connect($mac_address)
    {
        $shelf = new Shelf();
        $shelf->mac_address = $mac_address;
        $shelf->save();

        return $this->response->item($shelf, new ShelfTransformer);
    }

    /**
     * Add a demo_opgepakt statistic to the database.
     *
     * @Post("/api/shelves/{shelf}/actions/picked_up/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("shelf", description="The mac_address of the shelf.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"action_id":1,"shelf_id":6,"tag_id":null,"created_at":"2017-03-19 09:59:20","updated_at":"2017-03-25 23:18:46","action":{"id":1,"name":"demo_opgepakt","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"shelf":{"id":6,"demo_id":null,"mac_address":"8F:01:C8:BF:97:44","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","demo":null},"tag":null}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param Shelf $shelf
     * @return \Dingo\Api\Http\Response
     */
    public function demoPickedUp(Shelf $shelf)
    {
        $statistic = Statistic::create([
            'action_id' => Action::demoOpgepakt()->id,
            'shelf_id'  => $shelf->id
        ]);

        return $this->response->item($statistic, new StatisticTransformer);
    }

    /**
     * @param Shelf $shelf
     * @param $new_demo_uuid
     */
    public function demoScanned(Shelf $shelf, $new_demo_uuid)
    {
        // TODO: broadcast naar angular frontend met shelf id en demo uuid
    }

    /**
     * @param Shelf $shelf
     * @return \Dingo\Api\Http\Response
     */
    public function buttonPressed(Shelf $shelf)
    {
        $statistic = Statistic::create([
            'action_id' => Action::knopIngedrukt()->id,
            'shelf_id'  => $shelf->id
        ]);

        // TODO: product opzoeken.
        // TODO: notificatie sturen.

        return $this->response->item($statistic, new StatisticTransformer);
    }

    /**
     * @param Shelf $shelf
     * @param Tag $tag
     * @return \Dingo\Api\Http\Response
     */
    public function tagScanned(Shelf $shelf, Tag $tag)
    {
        $statistic = Statistic::create([
            'action_id' => Action::maatGescanned()->id,
            'shelf_id'  => $shelf->id,
            'tag_id'    => $tag->id
        ]);

        // TODO: opzoeken product.
        // TODO: informatie sturen.
        // TODO: maten terug sturen.

        return $this->response->item($statistic, new StatisticTransformer);
    }
}
