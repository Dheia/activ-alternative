<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesAppartaments extends Migration
{
    public function up()
    {
        Schema::rename('tentax_houses_', 'tentax_houses_appartaments');
    }
    
    public function down()
    {
        Schema::rename('tentax_houses_appartaments', 'tentax_houses_');
    }
}
