<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesBuilds4 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->dropColumn('city');
            $table->dropColumn('country');
            $table->dropColumn('region');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->string('city', 191)->nullable();
            $table->string('country', 191)->nullable();
            $table->string('region', 191)->nullable();
        });
    }
}
