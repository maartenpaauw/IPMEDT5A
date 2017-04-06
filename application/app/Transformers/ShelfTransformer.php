<?php

namespace IPMEDT5A\Transformers;

use Illuminate\Support\Collection;
use IPMEDT5A\Models\Shelf;
use IPMEDT5A\Models\Tag;
use League\Fractal\TransformerAbstract;

/**
 * Class ShelfTransformer
 * @package IPMEDT5A\Transformers
 */
class ShelfTransformer extends TransformerAbstract
{
    /**
     * @var Collection|null
     */
    private $sizes;

    /**
     * @var Tag|null
     */
    private $tag;

    /**
     * ShelfTransformer constructor.
     * @param Collection|null $sizes
     * @param Tag|null $tag
     */
    public function __construct(Collection $sizes = null, Tag $tag = null)
    {
        $this->sizes = $sizes;
        $this->tag   = $tag;
    }

    /**
     * @param Shelf $shelf
     * @return array
     */
    public function transform(Shelf $shelf)
    {
        if($this->sizes && $this->tag)
        {
            return [
                'shelf' => $shelf->toArray(),
                'sizes' => $this->sizes->toArray(),
                'tag'   => $this->tag->toArray()
            ];
        }

        return $shelf->toArray();
    }
}