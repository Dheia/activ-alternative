<?php
use TenTax\Contact\Components\ContactForm;

Route::post('/send-mail-api-v1.0', function () {
    // return post();
    // hohj
    return ContactForm::onSend();
});