<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1,
            'category_id' => 1,
            'name' => $this->faker->name,
            'first_postal_code' => $this->faker->postcode,
            'second_postal_code' => $this->faker->postcode,
            'prefecture_code' => $this->faker->numberBetween(1, 47),
            'address' => $this->faker->address,
            'building_name' => $this->faker->secondaryAddress,
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'website' => $this->faker->url,
            'description' => $this->faker->realText(200),
        ];
    }
}
