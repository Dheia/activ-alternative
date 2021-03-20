<?php namespace Tentax\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxNewsPosts2 extends Migration
{
    public function up()
    {
        Schema::table('tentax_news_posts', function($table)
        {
            $table->text('slug')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('tentax_news_posts', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
