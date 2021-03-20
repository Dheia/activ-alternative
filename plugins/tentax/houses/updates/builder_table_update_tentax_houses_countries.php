<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesCountries extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_countries', function($table)
        {
            $table->string('title', 191)->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_countries', function($table)
        {
            $table->string('title', 191)->nullable(false)->change();
        });
    }
}
