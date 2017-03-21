<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    protected $with = ['action', 'shelf', 'tag'];

    public function action()
    {
        return $this->hasOne(Action::class, 'id', 'action_id');
    }

    public function shelf()
    {
        return $this->hasOne(Shelf::class, 'id', 'shelf_id');
    }

    public function tag()
    {
        return $this->hasOne(Tag::class, 'id', 'tag_id');
    }
}
