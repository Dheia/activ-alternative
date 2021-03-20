<?php namespace Tentax\Houses\Models;

use Model;

/**
 * Model
 */
class TypeBuild extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_houses_types_build';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
