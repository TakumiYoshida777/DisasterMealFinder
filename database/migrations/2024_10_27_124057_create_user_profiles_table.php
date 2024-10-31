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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('ユーザーID');
            $table->string('name_kana')->comment('フリガナ');
            $table->string('postal_code')->comment('郵便番号');
            $table->string('prefecture_code')->comment('都道府県コード');
            $table->string('address')->comment('住所');
            $table->string('building_name')->nullable()->comment('建物名');
            $table->string('phone')->comment('電話番号');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
