<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Statistic;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\StatisticTransformer;

/**
 * Class StatisticController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * Resource("Statistics")
 */
class StatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statistics = Statistic::paginate();

        return $this->response->collection($statistics, new StatisticTransformer);
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
     * @param  \IPMEDT5A\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function show(Statistic $statistic)
    {
        return $this->response->item($statistic, new StatisticTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Statistic $statistic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Statistic  $statistic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Statistic $statistic)
    {
        //
    }
}
