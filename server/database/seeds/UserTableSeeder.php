<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            [
                'name'     => 'Maarten Paauw',
                'email'    => 's1094220@student.hsleiden.nl',
                'password' => env('USER_PASSWORD', 'secret')
            ],
            [
                'name'     => 'Djovanni Tehubijuluw',
                'email'    => 's1095067@student.hsleiden.nl',
                'password' => env('USER_PASSWORD', 'secret')
            ],
            [
                'name'     => 'Bram Valstar',
                'email'    => 's1092875@student.hsleiden.nl',
                'password' => env('USER_PASSWORD', 'secret')
            ],
            [
                'name'     => 'Rogier Cabout',
                'email'    => 's1071287@student.hsleiden.nl',
                'password' => env('USER_PASSWORD', 'secret')
            ]
        ]);
    }
}
