<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Setting;
use IPMEDT5A\Transformers\SettingTransformer;
use Illuminate\Http\Request;

/**
 * Class SettingController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Settings")
 */
class SettingController extends Controller
{
    /**
     * Display a listing of the settings.
     *
     * @Get("/api/settings/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"key":"kan_aanpassen","value":true,"created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $settings =  Setting::all();

        return $this->response->collection($settings, new SettingTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        $setting = Setting::create($request->only(['key', 'value']));
//
//        return $this->response->item($setting, new SettingTransformer);
    }

    /**
     * Display the specified setting.
     *
     * @Get("/api/settings/{setting}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("setting", description="The key of the setting.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"key":"kan_aanpassen","value":true,"created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        return $this->response->item($setting, new SettingTransformer());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
//        $setting->value = $request->input('value');
//        $setting->save();
//
//        return $this->response->item($setting, new SettingTransformer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
//        $setting->delete();
//
//        return $this->response->item($setting, new SettingTransformer);
    }

    /**
     * Toggle the value of the setting.
     *
     * @Post("/api/settings/{setting}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("setting", description="The key of the setting.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"key":"kan_aanpassen","value":false,"created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param Setting $setting
     * @return \Dingo\Api\Http\Response
     */
    public function toggle(Setting $setting)
    {
        $setting->value = !$setting->value;
        $setting->save();

        return $this->response->item($setting, new SettingTransformer);
    }
}
