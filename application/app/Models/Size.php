<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'eu_size';
    }
}
