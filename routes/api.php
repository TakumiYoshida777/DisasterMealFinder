<?php

use App\Http\Controllers\StoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 店舗一覧取得
Route::get('store/all', [StoreController::class, 'getAllStore'])->name('store.getAllStore');

// 店舗登録
Route::post('/store/store', [StoreController::class, 'store'])->name('store.store');
