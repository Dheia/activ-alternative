<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTentaxHouses extends Migration
{
    public function up()
    {
        Schema::create('tentax_houses_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title');
            $table->string('slug');
            $table->text('full_description')->nullable();
            $table->integer('current_price')->nullable();
            $table->text('type_build')->nullable();
            $table->integer('floors_build')->nullable();
            $table->integer('floor')->nullable();
            $table->integer('num_rooms')->nullable();
            $table->integer('living_area')->nullable();
            $table->integer('total_area')->nullable();
            $table->boolean('is_active')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tentax_houses_');
    }
}
