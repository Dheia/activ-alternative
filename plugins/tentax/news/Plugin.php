<?php namespace Tentax\News;

use System\Classes\PluginBase;
use Event;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerSettings()
    {
    }

    public function boot()
    {
        Event::listen('backend.menu.extendItems', function($manager) {

            $manager->addMainMenuItems('Tentax.News', [
                'news' => [
                    'iconSvg' => 'plugins/tentax/news/assets/icons/news.png'
                ]
            ]);

            $manager->addSideMenuItems('Tentax.News', 'news', [
                'posts' => [
                    'iconSvg' => 'plugins/tentax/news/assets/icons/posts.png'
                ],
                'categories' => [
                    'iconSvg' => 'plugins/tentax/news/assets/icons/categories.png'
                ]
            ]);
        });
    }
}
