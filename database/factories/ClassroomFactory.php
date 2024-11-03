<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Instructor;
use Database\Factories\Traits\RandomElements;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Classroom>
 */
class ClassroomFactory extends Factory
{
    use RandomElements;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        static::$countIfRandomNotExists = $this->count;

        return [
            'start_date'    => fake()->dateTimeBetween('-4 years', '-2 years'),
            'end_date'      => fake()->dateTimeBetween('-1 years'),
            'workload'      => fake()->numberBetween(400, 1200),
            'course_id'     => $this->randomModels(Course::class)->shift(),
            'instructor_id' => $this->randomModels(Instructor::class)->random(),
        ];
    }
}
