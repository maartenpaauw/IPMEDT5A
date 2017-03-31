<?php

namespace IPMEDT5A\Transformers;

use Illuminate\Support\Collection;
use IPMEDT5A\Models\Shelf;
use League\Fractal\TransformerAbstract;

/**
 * Class ShelfTransformer
 * @package IPMEDT5A\Transformers
 */
class ShelfTransformer extends TransformerAbstract
{
    /**
     * @var Collection
     */
    private $sizes;

    /**
     * ShelfTransformer constructor.
     * @param Collection|null $sizes
     */
    public function __construct(Collection $sizes = null)
    {
        $this->sizes = $sizes;
    }

    /**
     * @param Shelf $shelf
     * @return array
     */
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