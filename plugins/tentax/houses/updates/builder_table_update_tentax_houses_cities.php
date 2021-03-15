<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesCities extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_cities', function($table)
        {
            $table->integer('region_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_cities', function($table)
        {
            $table->dropColumn('region_id');
        });
    }
}
