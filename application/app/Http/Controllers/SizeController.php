<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Size;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\SizeTransformer;

/**
 * Class SizeController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Sizes")
 */
class SizeController extends Controller
{
    /**
     * Display a listing of the sizes.
     *
     * @Get("/api/sizes/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"eu_size":"30.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sizes = Size::limit(1)->get();

        return $this->response->collection($sizes, new SizeTransformer);
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
     * Display the specified size.
     *
     * @Get("/api/sizes/{size}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("size", description="The eu_size of the size.", required=true, type="integer"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":21,"eu_size":"40.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function show(Size $size)
    {
        return $this->response->item($size, new SizeTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Size $size)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Size  $size
     * @return \Illuminate\Http\Response
     */
    public function destroy(Size $size)
    {
        //
    }
}
