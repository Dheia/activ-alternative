<?php namespace Tentax\Contact\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTentaxContactRequests extends Migration
{
    public function up()
    {
        Schema::create('tentax_contact_requests', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
            $table->string('phone')->nullable();
            $table->text('comment')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->boolean('is_view');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tentax_contact_requests');
    }
}
