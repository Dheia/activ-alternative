<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxHousesApartments extends Migration
{
    public function up()
    {
        Schema::rename('tentax_houses_appartaments', 'tentax_houses_apartments');
    }
    
    public function down()
    {
        Schema::rename('tentax_houses_apartments', 'tentax_houses_appartaments');
    }
}
