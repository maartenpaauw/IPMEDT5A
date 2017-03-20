<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Size;

class SizeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sizes = range(30, 50);

        foreach ($sizes as $size)
        {
            Size::create([
                'eu_size' => $size
            ]);
        }
    }
}
