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
     * Display a listing of the resource.
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
        //
    }

    /**
     * Display the specified resource.
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
