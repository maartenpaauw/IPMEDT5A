<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Shoe;
use League\Fractal\TransformerAbstract;

class ShoeTransformer extends TransformerAbstract
{
    public function transform(Shoe $shoe)
    {
        return $shoe->toArray();
    }
}