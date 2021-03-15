<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesRequests extends Migration
{
    public function up()
    {
        Schema::table('tentax_houses_requests', function($table)
        {
            $table->boolean('is_view');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_houses_requests', function($table)
        {
            $table->dropColumn('is_view');
        });
    }
}
