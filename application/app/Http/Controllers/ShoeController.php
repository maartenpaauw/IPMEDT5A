<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Shoe;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\ShoeTransformer;

/**
 * Class ShoeController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Shoes")
 */
class ShoeController extends Controller
{
    /**
     * Display a listing of the shoes.
     *
     * @Get("/api/shoes/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"name":"LimeGreen","brand":"Heathcote-Ondricka","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shoes = Shoe::all();

        return $this->response->collection($shoes, new ShoeTransformer);
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
     * Display the specified shoe.
     *
     * @Get("/api/shoes/{shoe}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("shoe", description="The id of the shoe.", required=true, type="integer"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":2,"name":"Teal","brand":"Ratke-Runolfsdottir","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Shoe  $shoe
     * @return \Illuminate\Http\Response
     */
    public function show(Shoe $shoe)
    {
        return $this->response->item($shoe, new ShoeTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Shoe  $shoe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shoe $shoe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Shoe  $shoe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shoe $shoe)
    {
        //
    }
}
