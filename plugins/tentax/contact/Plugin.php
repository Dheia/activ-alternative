<?php namespace Tentax\Contact;

use System\Classes\PluginBase;
use Event;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'TenTax\Contact\Components\ContactForm' => 'contactForm'
        ];
    }

    public function registerSettings()
    {
    }

    public function boot()
    {
        Event::listen('backend.menu.extendItems', function($manager) {

            $manager->addMainMenuItems('Tentax.Contact', [
                'contact' => [
                    'iconSvg' => 'plugins/tentax/contact/assets/icons/contact.png'
                ]
            ]);

            $manager->addSideMenuItems('Tentax.Contact', 'contact', [
                'requests' => [
                    'iconSvg' => 'plugins/tentax/contact/assets/icons/requests.png'
                ]
            ]);
        });
    }
}
