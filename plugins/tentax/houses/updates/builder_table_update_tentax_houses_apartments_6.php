<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesApartments6 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->integer('typebuild_id')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_apartments', function($table)
        {
            $table->dropColumn('typebuild_id');
        });
    }
}
