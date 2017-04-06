<?php

use Illuminate\Database\Seeder;
use IPMEDT5A\Models\Size;
use IPMEDT5A\Models\Tag;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Tags
        $tags = [
            "04 34 ED A2 30 4C 81" => 35,
            "04 FD FC 72 DF 4C 80" => 35,
            "04 0E EB A2 30 4C 81" => 35,
            "04 2C ED A2 30 4C 81" => 36,
            "04 08 FC 72 DF 4C 81" => 36,
            "04 06 EB A2 30 4C 81" => 36,
            "04 26 EB A2 30 4C 81" => 37,
            "04 0F FB 72 DF 4C 81" => 37,
            "04 FE EB A2 30 4C 80" => 37,
            "04 1E EB A2 30 4C 81" => 38,
            "04 17 FA 72 DF 4C 81" => 38,
            "04 F7 EA A2 30 4C 80" => 38,
            "04 50 B7 F2 30 4C 81" => 39,
            "04 1F FA 72 DF 4C 81" => 39,
            "04 F0 E9 A2 30 4C 80" => 39,
            "04 C7 E8 A2 30 4C 80" => 40,
            "04 F5 FC 72 DF 4C 80" => 40,
            "04 CE E9 A2 30 4C 80" => 41,
            "04 ED FC 72 DF 4C 80" => 41,
            "04 D7 E9 A2 30 4C 80" => 42,
            "04 E5 FC 72 DF 4C 80" => 42,
            "04 E0 E9 A2 30 4C 80" => 43,
            "04 DD FC 72 DF 4C 80" => 43,
            "04 E8 E9 A2 30 4C 80" => 44,
            "04 D6 FC 72 DF 4C 80" => 44
        ];

        // Maak voor alle maten een tag aan.
        foreach ($tags as $uuid => $size)  {
            Tag::create([
                'uuid'    => $uuid,
                'size_id' => Size::size($size)->id
            ]);
        }

        Tag::create([
            'uuid'    => '540811907',
            'size_id' => Size::size(40)->id
        ]);
    }
}
