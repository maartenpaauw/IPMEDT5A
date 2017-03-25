<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    protected $with = ['product'];

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
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
