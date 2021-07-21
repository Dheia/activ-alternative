<?php namespace Tentax\Houses\Models;

use Model;

/**
 * Model
 */
class Apartment extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_houses_apartments';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    // relations

    public $attachOne = [
        'preview' => 'System\Models\File'
    ];

    public $attachMany = [
        'gallery' => 'System\Models\File'
    ];

    public $belongsTo = [
        'country' => ['Tentax\Houses\Models\Country'],
        'region' => ['Tentax\Houses\Models\Region'],
        'city' => ['Tentax\Houses\Models\City'],
        'street' => ['Tentax\Houses\Models\Street'],
        'typebuild' => ['Tentax\Houses\Models\TypeBuild'],
    ];

    // scope functions

    public function scopegetApartmentBySlug($query, $slug) {
        $apartment = $query->where('slug', $slug)->first();

        if(empty($apartment)) {
            return null;
        }

        return $apartment;
    }

    public function scopegetApartmentsByParams($query, $params = []) {
        extract(array_merge([
            'page' => 1,
            'perPage' => 6,
            'sort' => 'created_at-desc'
        ], $params));

        $query->where('is_active', true);

        if($sort) {
            $parts = explode('-', $sort);
            $query->orderBy($parts[0], $parts[1]);
        }

        return $query->paginate($perPage, $page);
    }
}
