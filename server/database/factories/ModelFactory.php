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
        'shoe_id' => $factory->create(\IPMEDT5A\Models\Shoe::class)->id,
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
        'shoe_id' => $factory->create(\IPMEDT5A\Models\Shoe::class)->id,
        'uuid'    => $faker->uuid,
    ];
});

$factory->define(\IPMEDT5A\Models\Shelf::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'demo_id' => $factory->create(\IPMEDT5A\Models\Demo::class)->id,
    ];
});

$factory->define(\IPMEDT5A\Models\Statistic::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'action_id' => \IPMEDT5A\Models\Action::where('name', 'demo_oppakken')->first()->id,
        'shelf_id'  => $factory->create(\IPMEDT5A\Models\Shelf::class)->id,
        'tag_id'    => null
    ];
});

$factory->state(\IPMEDT5A\Models\Statistic::class, 'tag_scannen', function(\Faker\Generator $faker) use ($factory) {
    return [
        'action_id' => \IPMEDT5A\Models\Action::where('name', 'tag_scannen')->first()->id,
        'tag_id'    => $factory->create(\IPMEDT5A\Models\Tag::class)->id
    ];
});