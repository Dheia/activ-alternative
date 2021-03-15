<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesBuilds2 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->integer('street_id')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_builds', function($table)
        {
            $table->integer('street_id')->nullable(false)->change();
        });
    }
}
