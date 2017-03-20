<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    public function action()
    {
        return $this->hasOne(Action::class);
    }

    public function shelf()
    {
        return $this->hasOne(Shelf::class);
    }

    public function tag()
    {
        return $this->hasOne(Tag::class);
    }
}
