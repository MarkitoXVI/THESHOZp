<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'price' => $this->faker->numberBetween(10, 1000),
            'image' => $this->faker->imageUrl(),
            'description' => $this->faker->sentence(),
            'slug' => $this->faker->slug(),
            'category' => $this->faker->word(),
        ];
    }
}
