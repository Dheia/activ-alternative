<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesAppartaments2 extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_appartaments', function($table)
        {
            $table->dropColumn('type_build');
            $table->dropColumn('floors_build');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_appartaments', function($table)
        {
            $table->text('type_build')->nullable();
            $table->integer('floors_build')->nullable();
        });
    }
}
