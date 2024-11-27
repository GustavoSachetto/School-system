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

        $course = $this->randomModels(Course::class)->shift();

        return [
            'start_date'       => fake()->dateTimeBetween('-4 years', '-2 years'),
            'end_date'         => fake()->dateTimeBetween('-1 years'),
            'total_places'     => fake()->numberBetween(30, 40),
            'available_places' => fake()->numberBetween(0, 30),
            'workload'         => $course->workload,
            'course_id'        => $course->id,
            'instructor_id'    => $this->randomModels(Instructor::class)->random(),
        ];
    }
}
