<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Allergy extends Model
{
    protected $fillable = [
        'menus_id',
        'name',
    ];

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menus_id');
    }
}
