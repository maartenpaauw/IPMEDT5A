<?php

namespace IPMEDT5A\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use IPMEDT5A\Models\Demo;
use IPMEDT5A\Models\Product;
use IPMEDT5A\Models\Shelf;

class RealDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:real {--fake-shelf}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vul de database met echte data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ($this->confirm('Do you wish to continue?'))
        {
            Artisan::call('migrate:refresh', [
                '--seed' => true
            ]);

            if($this->option('fake-shelf'))
            {
                $demo = Demo::create([
                    'product_id' => Product::first()->id,
                    'uuid'       => '208-13-27-131-69'
                ]);

                Shelf::create([
                    'demo_id'     => $demo->id,
                    'mac_address' => '00:0b:81:9c:31:f2'
                ]);
            }
        }
    }
}
