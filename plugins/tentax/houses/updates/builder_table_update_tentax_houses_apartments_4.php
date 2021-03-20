<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesApartments4 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->integer('country_id')->nullable();
            $table->integer('region_id')->nullable();
            $table->integer('city_id')->nullable();
            $table->integer('street_id')->nullable();
            $table->string('build_num')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->dropColumn('country_id');
            $table->dropColumn('region_id');
            $table->dropColumn('city_id');
            $table->dropColumn('street_id');
            $table->dropColumn('build_num');
        });
    }
}
