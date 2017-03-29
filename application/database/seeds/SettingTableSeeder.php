<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Setting;

class SettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::create([
            'key'         => 'kan_koppelen',
            'value'       => false,
            'title'       => 'Koppelen van schoenen',
            'description' => 'Via deze optie kan het koppelen van schoenen aan of uit gezet worden.'
        ]);
    }
}
