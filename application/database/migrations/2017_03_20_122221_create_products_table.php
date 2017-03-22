<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('shoe_id')->unsigned();
            $table->integer('size_id')->unsigned();
            $table->string('sku');
            $table->decimal('price', 5);
            $table->timestamps();

            $table->foreign('shoe_id')
                ->references('id')
                ->on('shoes')
            ;

            $table->foreign('size_id')
                ->references('id')
                ->on('sizes')
            ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
