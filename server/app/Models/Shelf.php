<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Shelf extends Model
{
    public function demo()
    {
        return $this->hasOne(Demo::class);
    }
}
