<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StoreController extends Controller
{
    /**
     * 店舗一覧画面
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $stores = Store::all();
        return Inertia::render('Store/index', compact('stores'));
    }

    /**
     * 店舗取得処理
     *
     * @return \Inertia\Response
     */
    public function getAllStore()
    {
        Log::debug('testtesttesttesttest');
        $stores = Store::all();
        return response()->json(['data' => $stores, 'status' => 200]);
    }

    /**
     * 店舗登録処理
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        // バリデーション
        // $request->validate([
        //     'name' => 'required|max:255',
        //     'address' => 'required|max:255',
        //     'tel' => 'required|max:255',
        // ]);

        // データの保存
        Store::create($request->all());

        return redirect()->route('store.index');
    }
}
