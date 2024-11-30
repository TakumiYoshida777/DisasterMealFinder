<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'admin',
                'email' => 'admin@example.com',
                'password' => 'password',
            ],
            [
                'name' => 'user',
                'email' => 'user@example.com',
                'password' => 'password',
            ],
            [
                'name' => 'takumi',
                'email' => 'takumi@takumi.com',
                'password' => 'password',
            ],
        ];

        foreach ($users as $user) {
            \App\Models\User::create($user);
        }
    }
}
