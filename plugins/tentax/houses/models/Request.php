<?php namespace Tentax\Houses\Models;

use Model;
use Validator;
use Mail;

/**
 * Model
 */
class Request extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;


    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_houses_requests';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    function scopesendMail($query, $data = []) {
        $validator = Validator::make(
            $data,
            [
                'name' => ['required', 'min:3'],
                'phone' => ['required', 'min:5'],
                'agree' => 'required'
            ]

        );

        if ($validator->fails()) return '{"error": "Валидация не пройдена"}';

        extract(array_merge([
            'name' => '',
            'phone' => '',
            'comment' => ''
        ], $data));
        
        Request::insert(
            [
                'name' => $name, 
                'phone' => $phone, 
                'comment' => $comment, 
                'is_view' => false
            ]
        );

        return '{"success": "Ваше сообщение успешно отправлено!"}';
    }
}
