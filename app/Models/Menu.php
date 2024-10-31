<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'stores_id',
        'name',
        'menu_image',
    ];

    public function store()
    {
        return $this->belongsTo(Store::class, 'stores_id');
    }
}
