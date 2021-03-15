<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesApartmentsBuilds extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_apartments_builds', function($table)
        {
            $table->integer('apartment_id')->unsigned()->change();
            $table->integer('build_id')->unsigned()->change();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_apartments_builds', function($table)
        {
            $table->integer('apartment_id')->unsigned(false)->change();
            $table->integer('build_id')->unsigned(false)->change();
        });
    }
}
