<?php

namespace Database\Factories;

use Database\Factories\Traits\RandomElements;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Instructor>
 */
class InstructorFactory extends Factory
{
    use RandomElements;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        static::$countIfRandomNotExists = $this->count;

        return [
            'hourly_rate'  => fake()->randomFloat(1, 15, 100),
            'certificates' => fake()->optional(0.6)->sentences(4, true),
            'user_id'      => $this->randomUsers('instructor')->shift(),
        ];
    }
}
