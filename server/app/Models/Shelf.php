<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Shelf extends Model
{
    protected $with = ['demo'];

    public function demo()
    {
        return $this->hasOne(Demo::class, 'id', 'demo_id');
    }
}
