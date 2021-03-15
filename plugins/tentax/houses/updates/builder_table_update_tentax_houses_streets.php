<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesStreets extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->integer('city_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->dropColumn('city_id');
        });
    }
}
