<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteTentaxHousesDistricts extends Migration
{
    public function up()
    {
        Schema::dropIfExists('tentax_houses_districts');
    }
    
    public function down()
    {
        Schema::create('tentax_houses_districts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('city_id')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('title', 191);
            $table->timestamp('updated_at')->nullable();
        });
    }
}
