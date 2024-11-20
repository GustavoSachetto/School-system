<?php

namespace Database\Factories;

use App\Models\Course;
use Database\Factories\Traits\RandomElements;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CoursePayment>
 */
class CoursePaymentFactory extends Factory
{
    use RandomElements;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static::$countIfRandomNotExists = $this->count;

        return [
            'price'     => fake()->randomFloat(2, 120, 400),
            'status'    => fake()->randomElement(['pending', 'approved', 'authorized', 'cancelled']),
            'user_id'   => $this->randomUsers('student')->shift(),
            'course_id' => $this->randomModels(Course::class)->shift(),
        ];
    }
}
