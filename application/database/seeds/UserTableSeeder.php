<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\User;
use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'name'       => 'Maarten Paauw',
                'email'      => 's1094220@student.hsleiden.nl',
                'password'   => Hash::make(env('USER_PASSWORD', 'secret')),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'Djovanni Tehubijuluw',
                'email'      => 's1095067@student.hsleiden.nl',
                'password'   => Hash::make(env('USER_PASSWORD', 'secret')),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'Bram Valstar',
                'email'      => 's1092875@student.hsleiden.nl',
                'password'   => Hash::make(env('USER_PASSWORD', 'secret')),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'name'       => 'Rogier Cabout',
                'email'      => 's1071287@student.hsleiden.nl',
                'password'   => Hash::make(env('USER_PASSWORD', 'secret')),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
