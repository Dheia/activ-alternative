<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteTentaxHousesApartmentsBuilds extends Migration
{
    public function up()
    {
        Schema::dropIfExists('tentax_houses_apartments_builds');
    }
    
    public function down()
    {
        Schema::create('tentax_houses_apartments_builds', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('apartment_id')->unsigned();
            $table->integer('build_id')->unsigned();
        });
    }
}
