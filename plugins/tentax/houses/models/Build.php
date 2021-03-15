<?php namespace Tentax\Houses\Models;

use Model;

/**
 * Model
 */
class Build extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_houses_builds';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    // relations

    public $hasMany = [
        'apartments' => 'TenTax\Houses\Models\Apartment'
    ];

    public $belongsTo = [
        'street' => ['Tentax\Houses\Models\Street']
    ];
}
