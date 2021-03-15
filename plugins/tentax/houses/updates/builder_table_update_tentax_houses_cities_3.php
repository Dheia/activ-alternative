<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesCities3 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_cities', function($table)
        {
            $table->integer('region_id')->unsigned(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_cities', function($table)
        {
            $table->integer('region_id')->unsigned()->change();
        });
    }
}
