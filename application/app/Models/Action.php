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
        return 'name';
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeDemoOpgepakt($query)
    {
        return $query->where('name', 'deno_opgepakt')->first();
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeMaatGescanned($query)
    {
        return $query->where('name', 'maat_gescanned')->first();
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeKnopIngedrukt($query)
    {
        return $query->where('name', 'knop_ingedrukt')->first();
    }
}
