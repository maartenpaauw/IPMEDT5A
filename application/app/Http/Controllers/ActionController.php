<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Action;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\ActionTransformer;

/**
 * Class ActionController
 *
 * @Resource("Actions")
 *
 * @package IPMEDT5A\Http\Controllers
 */
class ActionController extends Controller
{
    /**
     * Display a listing of actions.
     *
     * @Get("/api/actions/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"name":"demo_opgepakt","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $actions = Action::all();

        return $this->response->collection($actions, new ActionTransformer);
    }

    /**
     * Store a newly created action in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified action.
     *
     * @Get("/api/actions/{action}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("action", description="The name of the action.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"name":"demo_opgepakt","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function show(Action $action)
    {
        return $this->response->item($action, new ActionTransformer);
    }

    /**
     * Update the specified action in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Action $action)
    {
        //
    }

    /**
     * Remove the specified action from storage.
     *
     * @param  \IPMEDT5A\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function destroy(Action $action)
    {
        //
    }
}
