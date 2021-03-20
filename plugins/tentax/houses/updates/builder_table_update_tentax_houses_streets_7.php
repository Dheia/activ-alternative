<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesStreets7 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->string('type')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->dropColumn('type');
        });
    }
}
