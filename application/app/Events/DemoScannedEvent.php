<?php

namespace IPMEDT5A\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use IPMEDT5A\Models\Shelf;

class DemoScannedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $shelf;
    public $uuid;

    /**
     * Create a new event instance.
     *
     * @param Shelf $shelf
     * @param $uuid
     */
    public function __construct(Shelf $shelf, $uuid)
    {
        $this->shelf = $shelf;
        $this->uuid  = $uuid;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return ['demos'];
    }

    /**
     * @return string
     */
    public function broadcastAs()
    {
        return 'demo.scanned';
    }
}
