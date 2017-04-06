<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Shoe;

class ShoesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Shoe::create([
            'name'  => 'Dacia',
            'brand' => 'Gino-B',
            'color' => 'Grey',
            'price' => 219
        ]);

        Shoe::create([
            'name'  => 'Ibiza',
            'brand' => 'Gino-B',
            'color' => 'Pink',
            'price' => 229
        ]);

        Shoe::create([
            'name'  => 'Grace',
            'brand' => 'Gino-B',
            'color' => 'Silver',
            'price' => 229
        ]);

        Shoe::create([
            'name'  => 'Boemia',
            'brand' => 'Melissa',
            'color' => 'Orange',
            'price' => 94
        ]);

        Shoe::create([
            'name'  => 'Boemia',
            'brand' => 'Melissa',
            'color' => 'Pink',
            'price' => 94
        ]);
    }
}
