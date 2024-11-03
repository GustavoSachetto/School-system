<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\Course;
use App\Models\Classroom;

class CourseModelTest extends TestCase
{ 
    /**
     * Test course model's are instantiated.
     */
    public function test_course_model_can_be_instantiated(): void
    {
        $course = Course::inRandomOrder()->first();

        $this->assertModelExists($course);
    }

    /**
     * Test course model the function hasMany classrooms is correct.
     */
    public function test_course_has_many_classrooms(): void
    {
        $course = Course::has('classrooms')->inRandomOrder()->first();

        $classroom = $course->classrooms->random();

        $this->assertInstanceOf(Classroom::class, $classroom);
    }
}
