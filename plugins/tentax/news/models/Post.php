<?php namespace Tentax\News\Models;

use Model;

/**
 * Model
 */
class Post extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'tentax_news_posts';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    // relations

    public $attachOne = [
        'preview' => 'System\Models\File'
    ];

    public $belongsToMany = [
        'categories' => ['Tentax\News\Models\Category', 'table' => 'tentax_news_category_post']
    ];

    // scope functions

    public function scopegetPostBySlug($query, $slug) {
        $post = $query->where('slug', $slug)->first();

        if(empty($post)) {
            return null;
        }

        return $post;
    }

    public function scopegetPostsByParams($query, $params = []) {
        extract(array_merge([
            'page' => 1,
            'perPage' => 1,
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
