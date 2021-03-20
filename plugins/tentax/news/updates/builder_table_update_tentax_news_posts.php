<?php namespace Tentax\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTentaxNewsPosts extends Migration
{
    public function up()
    {
        Schema::table('tentax_news_posts', function($table)
        {
            $table->boolean('is_active');
        });
    }
    
    public function down()
    {
        Schema::table('tentax_news_posts', function($table)
        {
            $table->dropColumn('is_active');
        });
    }
}
