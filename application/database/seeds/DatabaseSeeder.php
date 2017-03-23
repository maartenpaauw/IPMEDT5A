<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(SizeTableSeeder::class);
         $this->call(ActionTableSeeder::class);
         $this->call(UserTableSeeder::class);
         $this->call(SettingTableSeeder::class);
    }
}
