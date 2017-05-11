<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Demo;
use League\Fractal\TransformerAbstract;

class DemoTransformer extends TransformerAbstract
{
    public function transform(Demo $demo)
    {
        return $demo->toArray();
    }
}