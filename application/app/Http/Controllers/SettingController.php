<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Setting;
use IPMEDT5A\Transformers\SettingTransformer;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
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
        $setting = Setting::create($request->only(['key', 'value']));

        return $this->response->item($setting, new SettingTransformer);
    }

    /**
     * Display the specified resource.
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
        $setting->value = $request->input('value');
        $setting->save();

        return $this->response->item($setting, new SettingTransformer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        $setting->delete();

        return $this->response->item($setting, new SettingTransformer);
    }

    /**
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
