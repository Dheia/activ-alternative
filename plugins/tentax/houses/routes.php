<?php

use TenTax\Houses\Models\Request;

Route::post('send-mail', function () {
    return Request::sendMail(post());
});