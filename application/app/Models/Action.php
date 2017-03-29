<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeDemoOpgepakt($query)
    {
        return $query->where('slug', 'demo_opgepakt')->first();
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeMaatGescanned($query)
    {
        return $query->where('slug', 'maat_gescanned')->first();
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeKnopIngedrukt($query)
    {
        return $query->where('slug', 'knop_ingedrukt')->first();
    }
}
