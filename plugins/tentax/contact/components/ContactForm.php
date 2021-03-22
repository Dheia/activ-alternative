<?php namespace TenTax\Contact\Components;

use Cms\Classes\ComponentBase;
use Input;
use Mail;
use Validator;
use Tentax\Contact\Models\Request;

class ContactForm extends ComponentBase {
    public function componentDetails() {
        return [
            'name' => 'Contact Form',
            'description' => 'Simple contact form'
        ];
    }

    public static function onSend() {

        $validator = Validator::make(
            [ 'name' => Input::get('name'), 'phone' => Input::get('phone'), 'agree' => Input::get('agree') ],
            [ 'name' => 'required|min:3', 'phone' => 'required', 'agree' => 'required']
        );

        if($validator->fails()) {
            return '{"error": "Валидация не пройдена"}';
        }
        
        $vars = [
            'name' => Input::get('name'),
            'phone' => Input::get('phone'),
            'comment' => Input::get('comment'),
            'agree' => Input::get('agree')
        ];

        Mail::send('tentax.contact::mail.message', $vars, function($message) {

            $message->from('kostya.dorokhov.2016@mail.ru', 'Active');
            $message->to('kostya.dorokhov.2016@mail.ru');
            $message->subject('Заявка с сайта Activ');
        
        });

        Request::create([
            'name' => $vars['name'],
            'phone' => $vars['phone'],
            'comment' => $vars['comment'],
            'is_view' => 0
        ]);

        return '{"success": "Ваше сообщение отправлено"}';
    }
}