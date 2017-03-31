<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Collection;
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function products()
    {
        return $this->belongsTo(Product::class, 'id', 'size_id');
    }

    /**
     * @param Size $size
     * @param int $step
     * @return array
     */
    public static function rangeSizes(Size $size, $step = 1)
    {
        return range($size->eu_size - 1, $size->eu_size + 1, $step);
    }

    /**
     * @param Collection $products
     * @return array
     */
    public static function uniqueRangeSizes(Collection $products)
    {
        return $products
            ->map(function ($item) {
                return $item->size->eu_size;
            })
            ->unique()
            ->values()
            ->toArray()
        ;
    }
}
