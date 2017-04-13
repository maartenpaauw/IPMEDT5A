<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    /**
     * Soft deletes.
     */
    use SoftDeletes;

    /**
     * @var array
     */
    protected $with = ['shoe', 'size'];

    /**
     * @var array
     */
    protected $dates  =['deleted_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function shoe()
    {
        return $this->hasOne(Shoe::class, 'id', 'shoe_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function size()
    {
        return $this->hasOne(Size::class, 'id', 'size_id');
    }

    /**
     * @param $query
     * @param $sizes
     * @param Shelf $shelf
     */
    public function scopeProductsWithSpecificSizes($query, $sizes, Shelf $shelf)
    {
        $query->whereHas('size', function($query) use ($sizes) {
            $query->whereIn('eu_size', $sizes);
        })->whereHas('shoe', function ($query) use ($shelf) {
            $query->where('id', $shelf->demo->product->shoe->id);
        });
    }
}
