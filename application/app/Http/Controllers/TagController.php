<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Tag;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\TagTransformer;

/**
 * Class TagController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Tags")
 */
class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @Get("/api/tags/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{{"id":1,"size_id":19,"uuid":"0f299533-7ef3-315c-94f6-127db4fad343","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","size":{"id":19,"eu_size":"39.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::all();

        return $this->response->collection($tags, new TagTransformer);
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
     * Display the specified tag.
     *
     * @Get("/api/tags/{tag}/")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("tag", description="The uuid of the tag.", required=true, type="string"),
     * })
     * @Transaction({
     *      @Request(headers = {"Authorization": "Bearer TOKEN_HERE"}),
     *      @Response(200, body = {"data":{"id":1,"size_id":19,"uuid":"0f299533-7ef3-315c-94f6-127db4fad343","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46","size":{"id":19,"eu_size":"39.0","created_at":"2017-03-25 23:18:46","updated_at":"2017-03-25 23:18:46"}}}),
     *      @Response(401, body = {"message":"Failed to authenticate because of bad credentials or an invalid authorization header.","status_code":401}),
     *      @Response(401, body = {"message":"Could not decode token: The token 'TOKEN_HERE' is an invalid JWS","status_code":401}),
     * })
     *
     * @param  \IPMEDT5A\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag)
    {
        return $this->response->item($tag, new TagTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag)
    {
        //
    }
}
