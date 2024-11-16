<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'title'       => fake()->unique()->words(2, true),
            'name'        => fake()->unique()->words(3, true),
            'about'       => fake()->text(255),
            'image'       => null,
            'requirement' => fake()->text(255),
            'workload'    => fake()->numberBetween(5, 200),
            'price'       => fake()->randomFloat(2, 120, 400),
        ];
    }

    /**
     * Indicates that the user must have an image.
     */
    public function withimage(): static
    {
        return $this->state(fn (array $attributes) => [
            'image' => fake()->optional(0.7)->imageUrl(),
        ]);
    }
}
