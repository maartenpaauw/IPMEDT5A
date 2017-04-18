<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Demo;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\DemoTransformer;

/**
 * Class DemoController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Demos")
 */
class DemoController extends Controller
{
    /**
     * Display a listing of demo shoes.
     *
     * @Get("/api/demos/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"product_id":45,"uuid":"d20fe26a-f9d2-335e-a029-a8628520a76e","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","product":{"id":45,"shoe_id":10,"size_id":23,"sku":"3725077122970","price":"762.27","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","shoe":{"id":10,"name":"SlateBlue","brand":"Walter PLC","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"size":{"id":23,"eu_size":"41.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $demos = Demo::all();

        return $this->response->collection($demos, new DemoTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Verkrijg de demo data.
        $demo_data = collect($request->only(['uuid', 'product_id']));

        // Demo, de eerste of een nieuwe.
        $demo = Demo::firstOrNew(['uuid' => $demo_data->get('uuid')]);
        $demo->product_id = $demo_data->get('product_id');
        $demo->save();

        // Geef de demo terug.
        return $this->response->item($demo, new DemoTransformer());
    }

    /**
     * Display the specified demo.
     *
     * @Get("/api/demos/{demo}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("demo", description="The uuid of the demo.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"product_id":45,"uuid":"d20fe26a-f9d2-335e-a029-a8628520a76e","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","product":{"id":45,"shoe_id":10,"size_id":23,"sku":"3725077122970","price":"762.27","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","shoe":{"id":10,"name":"SlateBlue","brand":"Walter PLC","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"size":{"id":23,"eu_size":"41.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Demo  $demo
     * @return \Illuminate\Http\Response
     */
    public function show(Demo $demo)
    {
        return $this->response->item($demo, new DemoTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Demo  $demo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Demo $demo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Demo  $demo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Demo $demo)
    {
        //
    }
}
