<?php namespace Tentax\News\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteTentaxNewsCategoriesPosts extends Migration
{
    public function up()
    {
        Schema::dropIfExists('tentax_news_categories_posts');
    }
    
    public function down()
    {
        Schema::create('tentax_news_categories_posts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('category_id')->nullable();
            $table->integer('post_id')->nullable();
        });
    }
}
