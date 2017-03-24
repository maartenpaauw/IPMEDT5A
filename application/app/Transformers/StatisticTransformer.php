<?php

namespace IPMEDT5A\Transformers;

use IPMEDT5A\Models\Statistic;
use League\Fractal\TransformerAbstract;

class StatisticTransformer extends TransformerAbstract
{
    public function transform(Statistic $statistic)
    {
        return $statistic->toArray();
    }
}