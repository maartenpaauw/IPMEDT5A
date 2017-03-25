<?php

namespace IPMEDT5A\Http\Controllers;

use Illuminate\Http\Request;
use IPMEDT5A\Models\Action;
use IPMEDT5A\Models\Shelf;
use IPMEDT5A\Models\Statistic;
use IPMEDT5A\Models\Tag;
use IPMEDT5A\Transformers\ShelfTransformer;
use IPMEDT5A\Transformers\StatisticTransformer;

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

    /**
     * @param $mac_address
     * @return \Dingo\Api\Http\Response
     */
    public function connect($mac_address)
    {
        $shelf = new Shelf();
        $shelf->mac_address = $mac_address;
        $shelf->save();

        return $this->response->item($shelf, new ShelfTransformer);
    }

    /**
     * @param Shelf $shelf
     * @return \Dingo\Api\Http\Response
     */
    public function demoPickedUp(Shelf $shelf)
    {
        $statistic = Statistic::create([
            'action_id' => Action::demoOpgepakt()->id,
            'shelf_id'  => $shelf->id
        ]);

        return $this->response->item($statistic, new StatisticTransformer);
    }

    /**
     * @param Shelf $shelf
     * @param $new_demo_uuid
     */
    public function demoScanned(Shelf $shelf, $new_demo_uuid)
    {
        // TODO: broadcast naar angular frontend met shelf id en demo uuid
    }

    /**
     * @param Shelf $shelf
     * @return \Dingo\Api\Http\Response
     */
    public function buttonPressed(Shelf $shelf)
    {
        $statistic = Statistic::create([
            'action_id' => Action::knopIngedrukt()->id,
            'shelf_id'  => $shelf->id
        ]);

        // TODO: product opzoeken.
        // TODO: notificatie sturen.

        return $this->response->item($statistic, new StatisticTransformer);
    }

    /**
     * @param Shelf $shelf
     * @param Tag $tag
     * @return \Dingo\Api\Http\Response
     */
    public function tagScanned(Shelf $shelf, Tag $tag)
    {
        $statistic = Statistic::create([
            'action_id' => Action::maatGescanned()->id,
            'shelf_id'  => $shelf->id,
            'tag_id'    => $tag->id
        ]);

        // TODO: opzoeken product.
        // TODO: informatie sturen.
        // TODO: maten terug sturen.

        return $this->response->item($statistic, new StatisticTransformer);
    }
}
