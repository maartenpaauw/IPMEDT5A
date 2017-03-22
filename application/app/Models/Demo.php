<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    protected $with = ['shoe'];

    public function shoe()
    {
        return $this->hasOne(Shoe::class, 'id', 'shoe_id');
    }
}
