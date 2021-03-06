<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    /**
     * @var array
     */
    protected $with = ['product'];

    /**
     * @var array
     */
    protected $fillable = ['uuid', 'product_id'];

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function shelf()
    {
        return $this->belongsTo(Shelf::class, 'demo_id', 'id');
    }
}
