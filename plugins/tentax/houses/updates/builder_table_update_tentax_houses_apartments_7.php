<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesApartments7 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->integer('build_floors')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->dropColumn('build_floors');
        });
    }
}
