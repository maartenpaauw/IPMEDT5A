<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $with = ['shoe', 'size'];

    public function shoe()
    {
        return $this->hasOne(Shoe::class, 'id', 'shoe_id');
    }

    public function size()
    {
        return $this->hasOne(Size::class, 'id', 'size_id');
    }
}
