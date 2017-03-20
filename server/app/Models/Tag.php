<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function size()
    {
        return $this->hasOne(Size::class);
    }
}
