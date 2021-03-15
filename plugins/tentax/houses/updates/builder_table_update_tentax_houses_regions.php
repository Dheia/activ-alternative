<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesRegions extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_regions', function($table)
        {
            $table->integer('country_id')->nullable()->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_regions', function($table)
        {
            $table->dropColumn('country_id');
        });
    }
}
