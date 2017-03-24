<?php

namespace IPMEDT5A\Http\Controllers;

use IPMEDT5A\Models\Shelf;
use Illuminate\Http\Request;
use IPMEDT5A\Transformers\ShelfTransformer;

/**
 * Class ShelfController
 *
 * @package IPMEDT5A\Http\Controllers
 *
 * @Resource("Shelves")
 */
class ShelfController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shelves = Shelf::all();

        return $this->response->collection($shelves, new ShelfTransformer);
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
     * @param  \IPMEDT5A\Models\Shelf  $shelf
     * @return \Illuminate\Http\Response
     */
    public function show(Shelf $shelf)
    {
        return $this->response->item($shelf, new ShelfTransformer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \IPMEDT5A\Models\Shelf  $shelf
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shelf $shelf)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \IPMEDT5A\Models\Shelf  $shelf
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shelf $shelf)
    {
        //
    }
}
