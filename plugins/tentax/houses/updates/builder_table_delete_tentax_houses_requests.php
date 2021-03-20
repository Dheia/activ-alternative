<?php namespace Tentax\Houses\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteTentaxHousesRequests extends Migration
{
    public function up()
    {
        Schema::dropIfExists('tentax_houses_requests');
    }
    
    public function down()
    {
        Schema::create('tentax_houses_requests', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->text('comment')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->boolean('is_view');
            $table->string('name', 191)->nullable();
            $table->string('phone', 191)->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
}
