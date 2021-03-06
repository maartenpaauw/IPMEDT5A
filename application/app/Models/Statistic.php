<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    /**
     * @var array
     */
    protected $with = ['action', 'shelf', 'tag'];

    /**
     * @var array
     */
    protected $fillable = ['action_id', 'shelf_id', 'tag_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function action()
    {
        return $this->hasOne(Action::class, 'id', 'action_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function shelf()
    {
        return $this->hasOne(Shelf::class, 'id', 'shelf_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function tag()
    {
        return $this->hasOne(Tag::class, 'id', 'tag_id');
    }
}
