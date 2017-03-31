<?php

namespace IPMEDT5A\Transformers;

use Illuminate\Support\Collection;
use IPMEDT5A\Models\Shelf;
use League\Fractal\TransformerAbstract;

class ShelfTransformer extends TransformerAbstract
{
    private $sizes;

    public function __construct(Collection $sizes)
    {
        $this->sizes = $sizes;
    }

    public function transform(Shelf $shelf)
    {
        if($this->sizes)
        {
            return [
                'shelf' => $shelf->toArray(),
                'sizes' => $this->sizes->toArray()
            ];
        }

        return $shelf->toArray();
    }
}