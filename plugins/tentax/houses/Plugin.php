<?php namespace Tentax\Houses;

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

            $manager->addMainMenuItems('Tentax.Houses', [
                'houses' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/city.png'
                ]
            ]);

            $manager->addSideMenuItems('Tentax.Houses', 'houses', [
                'apartments' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/apartment.png'
                ],
                'streets' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/street.png'
                ],
                'cities' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/city.png'
                ],
                'regions' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/region.png'
                ],
                'countries' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/country.png'
                ],
                'types_build' => [
                    'iconSvg' => 'plugins/tentax/houses/assets/icons/bricks.png'
                ]
            ]);

        });
    }
}
