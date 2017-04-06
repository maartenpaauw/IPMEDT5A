<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Shoe;
use IPMEDT5A\Models\Product;
use IPMEDT5A\Models\Size;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Alle producten
        $shoes = Shoe::all();

        // Ga door elk product heen.
        foreach($shoes as $shoe)
        {
            // Ga door elke maat heen.
            foreach (range(36, 41, 1) as $size)
            {
                // Maak het product aan.
                Product::create([
                        'shoe_id' => $shoe->id,
                        'size_id' => Size::size($size)->id
                    ]
                );
            }
        }
    }
}
