<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesStreets5 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->renameColumn('district_id', 'city_id');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_streets', function($table)
        {
            $table->renameColumn('city_id', 'district_id');
        });
    }
}
