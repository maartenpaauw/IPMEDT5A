<?php

namespace IPMEDT5A\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use IPMEDT5A\Models\Action;
use IPMEDT5A\Models\Statistic;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\ActionTransformer;
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
     * Display a listing of the statistics.
     *
     * @Get("/api/statistics/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"action_id":1,"shelf_id":6,"tag_id":null,"created_at":"2017-03-19 09:59:20","updated_at":"2017-03-25 23:18:46","action":{"id":1,"name":"demo_opgepakt","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"shelf":{"id":6,"demo_id":null,"mac_address":"8F:01:C8:BF:97:44","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","demo":null},"tag":null}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statistics = Statistic::all();

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
     * Display the specified statistic.
     *
     * @Get("/api/statistics/{statistic}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("statistic", description="The id of the statistic.", required=true, type="integer"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"action_id":1,"shelf_id":6,"tag_id":null,"created_at":"2017-03-19 09:59:20","updated_at":"2017-03-25 23:18:46","action":{"id":1,"name":"demo_opgepakt","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"},"shelf":{"id":6,"demo_id":null,"mac_address":"8F:01:C8:BF:97:44","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","demo":null},"tag":null}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
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

    /**
     * @return \Dingo\Api\Http\Response
     */
    public function actionCount()
    {
        $actions = Action::withCount('statistics')->get();

        return $this->response->collection($actions, new ActionTransformer());
    }

    /**
     * @return \Dingo\Api\Http\Response
     */
    public function pickedUpTodayGroupedByHour()
    {
        $statistics = Statistic::where('action_id', Action::demoOpgepakt()->id)
            ->whereRaw('Date(created_at) = CURDATE()')
            ->select(DB::raw('DATE_FORMAT(created_at, "%H:00") as uur'), DB::raw('COUNT(*) as aantal'))
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%H:00")'))
            ->get()
        ;

        return $this->response->collection($statistics, new StatisticTransformer());
    }

    /**
     * @return \Dingo\Api\Http\Response
     */
    public function scannedTodayGroupedByHour()
    {
        $statistics = Statistic::where('action_id', Action::maatGescanned()->id)
            ->whereRaw('Date(created_at) = CURDATE()')
            ->select(DB::raw('DATE_FORMAT(created_at, "%H:00") as uur'), DB::raw('COUNT(*) as aantal'))
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%H:00")'))
            ->get()
        ;

        return $this->response->collection($statistics, new StatisticTransformer());
    }

    public function pressedTodayGroupedByHour()
    {
        $statistics = Statistic::where('action_id', Action::knopIngedrukt()->id)
            ->whereRaw('Date(created_at) = CURDATE()')
            ->select(DB::raw('DATE_FORMAT(created_at, "%H:00") as uur'), DB::raw('COUNT(*) as aantal'))
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%H:00")'))
            ->get()
        ;

        return $this->response->collection($statistics, new StatisticTransformer());
    }
}
