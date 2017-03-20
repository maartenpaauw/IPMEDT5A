<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function shoe()
    {
        return $this->hasOne(Shoe::class);
    }

    public function size()
    {
        return $this->hasOne(Size::class);
    }
}
