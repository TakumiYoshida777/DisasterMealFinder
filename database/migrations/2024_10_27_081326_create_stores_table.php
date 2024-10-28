<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->id()->comment('StoreID');
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->comment('ユーザID');
            $table->foreignId('category_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->comment('カテゴリID');
            $table->string('name')->comment('店舗名');
            $table->string('first_postal_code')->comment('郵便番号1');
            $table->string('second_postal_code')->comment('郵便番号2');
            $table->string('prefecture_code')->comment('都道府県コード');
            $table->string('address')->comment('住所');
            $table->string('building_name')->nullable()->comment('建物名');
            $table->string('phone')->comment('電話番号');
            $table->string('email')->comment('メールアドレス');
            $table->string('website')->nullable()->comment('ホームページ');
            $table->text('description')->comment('説明');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stores');
    }
};
