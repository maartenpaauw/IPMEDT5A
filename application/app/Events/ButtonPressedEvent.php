<?php

namespace IPMEDT5A\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Support\Collection;
use IPMEDT5A\Models\Shelf;
use IPMEDT5A\Models\Tag;

class ButtonPressedEvent implements ShouldBroadcast
{
use Dispatchable, InteractsWithSockets, SerializesModels;

    public $sizes;
    public $tag;
    public $shelf;

    /**
     * Create a new event instance.
     * @param Shelf $shelf
     * @param Tag $tag
     * @param Collection $sizes
     * @internal param $response
     */
    public function __construct(Shelf $shelf, Tag $tag, Collection $sizes)
    {
        $this->shelf = $shelf;
        $this->tag   = $tag;
        $this->sizes = $sizes;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return ['notifications'];
    }

    /**
     * @return string
     */
    public function broadcastAs()
    {
        return 'button.pressed';
    }
}
