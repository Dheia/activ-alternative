<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTentaxHousesApartmentsBuilds extends Migration
{
    public function up()
    {
        Schema::create('tentax_houses_apartments_builds', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('apartment_id');
            $table->integer('build_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tentax_houses_apartments_builds');
    }
}
