<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(IPMEDT5A\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(\IPMEDT5A\Models\Shoe::class, function (Faker\Generator $faker) {
    return [
        'name'  => $faker->colorName,
        'brand' => $faker->company
    ];
});

$factory->define(\IPMEDT5A\Models\Product::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'shoe_id' => \IPMEDT5A\Models\Shoe::inRandomOrder()->first()->id,
        'size_id' => \IPMEDT5A\Models\Size::inRandomOrder()->first()->id,
        'sku'     => $faker->ean13,
        'price'   => $faker->randomFloat(2, 50, 900),

    ];
});

$factory->define(\IPMEDT5A\Models\Tag::class, function (\Faker\Generator $faker) {
   return [
       'size_id' => \IPMEDT5A\Models\Size::inRandomOrder()->first()->id,
       'uuid'    => $faker->uuid,
   ];
});

$factory->define(\IPMEDT5A\Models\Demo::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'product_id' => \IPMEDT5A\Models\Product::inRandomOrder()->first()->id,
        'uuid'       => $faker->uuid,
    ];
});

$factory->define(\IPMEDT5A\Models\Shelf::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'demo_id' => \IPMEDT5A\Models\Demo::inRandomOrder()->first()->id,
    ];
});

$factory->define(\IPMEDT5A\Models\Statistic::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'action_id'  => \IPMEDT5A\Models\Action::where('name', 'demo_oppakken')->first()->id,
        'shelf_id'   => \IPMEDT5A\Models\Shelf::inRandomOrder()->first()->id,
        'tag_id'     => null,
        'created_at' => $faker->dateTimeBetween(\Carbon\Carbon::now()->subWeek(), \Carbon\Carbon::now()),
        'updated_at' => \Carbon\Carbon::now()
    ];
});

$factory->state(\IPMEDT5A\Models\Statistic::class, 'maat_scannen', function(\Faker\Generator $faker) use ($factory) {
    return [
        'action_id' => \IPMEDT5A\Models\Action::where('name', 'maat_scannen')->first()->id,
        'tag_id'    => \IPMEDT5A\Models\Tag::inRandomOrder()->first()->id
    ];
});