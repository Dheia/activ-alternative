<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesStreets3 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->integer('city_id')->unsigned(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->integer('city_id')->unsigned()->change();
        });
    }
}
