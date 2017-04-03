<?php

namespace IPMEDT5A\Events;

use Dingo\Api\Http\Response;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ButtonPressedEvent implements ShouldBroadcast
{
use Dispatchable, InteractsWithSockets;

    public $response;

    /**
     * Create a new event instance.
     * @param $response
     */
    public function __construct($response)
    {
        $this->response = $response;
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
