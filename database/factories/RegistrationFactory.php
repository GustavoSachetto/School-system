<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\Classroom;
use Database\Factories\Traits\RandomElements;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Registration>
 */
class RegistrationFactory extends Factory
{
    use RandomElements;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        static::$countIfRandomNotExists = $this->count;

        return [
            'student_id'   => $this->randomModels(Student::class)->shift(),
            'classroom_id' => $this->randomModels(Classroom::class)->random(),
        ];
    }
}
