<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Tag;
use League\Fractal\TransformerAbstract;

class TagTransformer extends TransformerAbstract
{
    public function transform(Tag $tag)
    {
        return $tag->toArray();
    }
}