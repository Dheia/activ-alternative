<?php namespace Tentax\Contact;

use System\Classes\PluginBase;

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
}
