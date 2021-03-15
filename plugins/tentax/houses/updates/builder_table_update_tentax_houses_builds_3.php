<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesBuilds3 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->dropColumn('street');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->string('street', 191)->nullable();
        });
    }
}
