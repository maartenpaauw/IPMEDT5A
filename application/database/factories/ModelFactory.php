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
        'brand' => $faker->company,
        'price' => $faker->randomFloat(2, 50, 900),
    ];
});

$factory->define(\IPMEDT5A\Models\Product::class, function (\Faker\Generator $faker) use ($factory) {
    return [
        'shoe_id' => \IPMEDT5A\Models\Shoe::inRandomOrder()->first()->id,
        'size_id' => \IPMEDT5A\Models\Size::inRandomOrder()->first()->id
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
        'mac_address' => $faker->macAddress,
        'demo_id'     => \IPMEDT5A\Models\Demo::inRandomOrder()->first()->id,
    ];
});

$factory->state(\IPMEDT5A\Models\Shelf::class, 'lege_plank', function(\Faker\Generator $faker) use ($factory) {
    return [
        'demo_id' => null
    ];
});

$factory->define(\IPMEDT5A\Models\Statistic::class, function (\Faker\Generator $faker) use ($factory) {

    $date = $faker->dateTimeBetween(\Carbon\Carbon::now()->subWeek(), \Carbon\Carbon::now());

    return [
        'action_id'  => \IPMEDT5A\Models\Action::demoOpgepakt()->id,
        'shelf_id'   => \IPMEDT5A\Models\Shelf::inRandomOrder()->first()->id,
        'tag_id'     => null,
        'created_at' => $date,
        'updated_at' => $date
    ];
});

$factory->state(\IPMEDT5A\Models\Statistic::class, 'maat_gescanned', function(\Faker\Generator $faker) use ($factory) {
    return [
        'action_id' => \IPMEDT5A\Models\Action::maatGescanned()->id,
        'tag_id'    => \IPMEDT5A\Models\Tag::inRandomOrder()->first()->id
    ];
});

$factory->state(\IPMEDT5A\Models\Statistic::class, 'knop_ingedrukt', function(\Faker\Generator $faker) use ($factory) {
    return [
        'action_id' => \IPMEDT5A\Models\Action::knopIngedrukt()->id,
        'tag_id'    => \IPMEDT5A\Models\Tag::inRandomOrder()->first()->id
    ];
});