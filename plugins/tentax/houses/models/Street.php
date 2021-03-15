<?php namespace Tentax\Houses\Models;

use Model;

/**
 * Model
 */
class Street extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_houses_streets';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    // relations

    public $hasMany = [
        'builds' => 'TenTax\Houses\Models\Build'
    ];

    public $belongsTo = [
        'city' => ['Tentax\Houses\Models\City']
    ];
}
