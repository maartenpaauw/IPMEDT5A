<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $with = ['size'];

    public function size()
    {
        return $this->hasOne(Size::class, 'id', 'size_id');
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
