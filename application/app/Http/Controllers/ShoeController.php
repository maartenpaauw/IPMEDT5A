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
     * Display a listing of the resource.
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
     * Display the specified resource.
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
