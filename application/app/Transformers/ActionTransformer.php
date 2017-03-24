<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Action;
use League\Fractal\TransformerAbstract;

class ActionTransformer extends TransformerAbstract
{
    public function transform(Action $action)
    {
        return $action->toArray();
    }
}