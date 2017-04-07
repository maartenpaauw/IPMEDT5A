<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Files\ShoesListImport;
use IPMEDT5A\Models\Shoe;
use IPMEDT5A\Models\Product;
use IPMEDT5A\Models\Size;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param ShoesListImport $import
     * @return void
     */
    public function run(ShoesListImport $import)
    {
        // Verkrijg de inhoud van het bestand.
        $results = $import->get();

        // Ga door elke resultaat heen.
        foreach ($results as $result)
        {
            // Verkrijg de schoen.
            $shoe = Shoe::firstOrCreate([
                'name'  => $result->benaming,
                'brand' => $result->merk,
                'color' => $result->kleur,
                'price' => $result->prijs
            ]);

            // Maak het product.
            Product::create([
                'shoe_id' => $shoe->id,
                'size_id' => Size::size($result->maat)->id
            ]);
        }
    }
}
