<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Action;

class ActionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $actions = [
            'demo_oppakken',
            'maat_scannen'
        ];

        foreach ($actions as $action) {
            Action::create([
                'name' => $action
            ]);
        }
    }
}