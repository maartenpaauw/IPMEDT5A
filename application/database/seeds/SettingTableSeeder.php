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
            'key'   => 'kan_aanpassen',
            'value' => true
        ]);
    }
}
