<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesApartments5 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->string('apartment_num')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->dropColumn('apartment_num');
        });
    }
}
