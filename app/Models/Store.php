<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $fillable = [
        'user_id',
        'category_id',
        'name',
        'first_postal_code',
        'second_postal_code',
        'prefecture_code',
        'address',
        'building_name',
        'phone',
        'email',
        'website',
        'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
