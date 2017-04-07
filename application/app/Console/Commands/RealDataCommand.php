<?php

namespace IPMEDT5A\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class RealDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:real';

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
        }
    }
}
