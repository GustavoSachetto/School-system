<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\User;
use App\Models\Classroom;
use App\Models\Instructor;
use App\Models\Registration;

class InstructorModelTest extends TestCase
{ 
    /**
     * Test instructor model's are instantiated.
     */
    public function test_instructor_model_can_be_instantiated(): void
    {
        $instructor = Instructor::inRandomOrder()->first();

        $this->assertModelExists($instructor);
    }

    /**
     * Test instructor model the function belongsTo user is correct.
     */
    public function test_instructor_belongs_to_the_user(): void
    {
        $instructor = Instructor::inRandomOrder()->first();

        $this->assertInstanceOf(User::class, $instructor->user);
    }

    /**
     * Test instructor model the function hasMany classrooms is correct.
     */
    public function test_instructor_has_many_classrooms(): void
    {
        $instructor = Instructor::has('classrooms')->inRandomOrder()->first();

        $classroom = $instructor->classrooms->random();

        $this->assertInstanceOf(Classroom::class, $classroom);
    }

    /**
     * Test instructor model the function HasManyThrough registrations is correct.
     */
    public function test_instructor_has_many_through_registrations(): void
    {
        $instructor = Instructor::has('registrations')->inRandomOrder()->first();

        $registration = $instructor->registrations->random();

        $this->assertInstanceOf(Registration::class, $registration);
    }

    /**
     * Test instructor table soft deleted are null.
     */
    public function test_instructor_table_soft_deleted_is_correct(): void
    {
        $instructor = Instructor::class;

        $this->assertNotSoftDeleted($instructor);
    }
}
