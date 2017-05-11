<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Size;
use IPMEDT5A\Models\Tag;
use IPMEDT5A\Files\TagsListImport;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param \IPMEDT5A\Files\TagsListImport $import
     * @return void
     */
    public function run(TagsListImport $import)
    {
        // Verkrijg de inhoud van het bestand.
        $results = $import->get();

        // Ga door elk resultaat heen.
        foreach ($results as $result)
        {
            // Maak een nieuwe tag aan.
            Tag::create([
                'uuid'    => $result->uuid,
                'size_id' => Size::size($result->size)->id
            ]);
        }
    }
}
