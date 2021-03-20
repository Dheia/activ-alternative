<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteTentaxHousesBuilds extends Migration
{
    public function up()
    {
        Schema::dropIfExists('tentax_houses_builds');
    }
    
    public function down()
    {
        Schema::create('tentax_houses_builds', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->integer('floors')->nullable();
            $table->string('num_build', 191)->nullable();
            $table->integer('street_id')->nullable();
            $table->string('title', 191);
            $table->string('type_build', 191)->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
}
