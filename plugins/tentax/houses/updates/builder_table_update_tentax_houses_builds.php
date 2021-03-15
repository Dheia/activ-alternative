<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesBuilds extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->integer('street_id');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->dropColumn('street_id');
        });
    }
}
