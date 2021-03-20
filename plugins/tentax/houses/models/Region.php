<?php namespace Tentax\Houses\Models;

use Model;

/**
 * Model
 */
class Region extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_houses_regions';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
