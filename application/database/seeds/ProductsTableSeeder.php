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
        $shoes = Shoe::all();

        foreach($shoes as $shoe)
        {
            foreach (range(36, 41, 1) as $size) {
                Product::create([
                        'shoe_id' => $shoe->id,
                        'size_id' => Size::size($size)->id
                    ]
                );
            }
        }
    }
}
