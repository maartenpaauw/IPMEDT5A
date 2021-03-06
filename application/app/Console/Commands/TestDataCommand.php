<?php

namespace IPMEDT5A\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use IPMEDT5A\Models\Demo;
use IPMEDT5A\Models\Product;
use IPMEDT5A\Models\Shelf;
use IPMEDT5A\Models\Shoe;
use IPMEDT5A\Models\Statistic;
use IPMEDT5A\Models\Tag;

class TestDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Vul de database met test data';

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
        if ($this->confirm('Do you wish to continue?') && app()->environment() == "local")
        {
            Artisan::call('migrate:refresh', [
                '--seed' => true
            ]);

            factory(Demo::class, 3)->create();
            factory(Shelf::class, 3)->create();
            factory(Shelf::class, 1)->states(['lege_plank'])->create();
            factory(Statistic::class, rand(50, 150))->create();
            factory(Statistic::class, rand(50, 150))->states(['maat_gescanned'])->create();
            factory(Statistic::class, rand(50, 150))->states(['knop_ingedrukt'])->create();
        }
    }
}
