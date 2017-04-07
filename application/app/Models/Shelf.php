<?php

namespace IPMEDT5A\Models;

use Illuminate\Database\Eloquent\Model;

class Shelf extends Model
{
    /**
     * @var array
     */
    protected $with = ['demo'];

    /**
     * @var array
     */
    protected $fillable = ['mac_address'];
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function demo()
    {
        return $this->hasOne(Demo::class, 'id', 'demo_id');
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'mac_address';
    }
}
