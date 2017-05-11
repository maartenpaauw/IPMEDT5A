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
            'Demo opgepakt',
            'Maat gescanned',
            'Knop ingedrukt'
        ];

        foreach ($actions as $action) {
            Action::create([
                'slug' => str_slug($action, '_'),
                'name' => $action
            ]);
        }
    }
}
