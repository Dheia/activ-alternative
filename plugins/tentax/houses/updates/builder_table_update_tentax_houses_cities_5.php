<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesCities5 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_cities', function($table)
        {
            $table->string('type')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_cities', function($table)
        {
            $table->dropColumn('type');
        });
    }
}
