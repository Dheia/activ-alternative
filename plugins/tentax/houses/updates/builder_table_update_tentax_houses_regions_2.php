<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesRegions2 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_regions', function($table)
        {
            $table->integer('country_id')->unsigned(false)->change();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_regions', function($table)
        {
            $table->integer('country_id')->unsigned()->change();
        });
    }
}
