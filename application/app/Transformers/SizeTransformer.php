<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Size;
use League\Fractal\TransformerAbstract;

class SizeTransformer extends TransformerAbstract
{
    public function transform(Size $size)
    {
        return $size->toArray();
    }
}