<?php

namespace IPMEDT5A\Transformers;

use League\Fractal\TransformerAbstract;
use IPMEDT5A\Models\Setting;

class SettingTransformer extends TransformerAbstract
{
    public function transform(Setting $setting)
    {
        return $setting->toArray();
    }
}