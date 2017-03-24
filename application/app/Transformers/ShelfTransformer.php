<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Shelf;
use League\Fractal\TransformerAbstract;

class ShelfTransformer extends TransformerAbstract
{
    public function transform(Shelf $shelf)
    {
        return $shelf->toArray();
    }
}