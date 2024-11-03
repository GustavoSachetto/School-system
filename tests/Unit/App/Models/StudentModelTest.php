<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\User;
use App\Models\Student;
use App\Models\Registration;

class StudentModelTest extends TestCase
{ 
    /**
     * Test student model's are instantiated.
     */
    public function test_student_model_can_be_instantiated(): void
    {
        $student = Student::inRandomOrder()->first();

        $this->assertModelExists($student);
    }

    /**
     * Test student model the function belongsTo user is correct.
     */
    public function test_student_belongs_to_the_user(): void
    {
        $student = Student::inRandomOrder()->first();

        $this->assertInstanceOf(User::class, $student->user);
    }

    /**
     * Test student model the function hasMany registrations is correct.
     */
    public function test_student_has_many_registrations(): void
    {
        $student = Student::has('registrations')->inRandomOrder()->first();

        $registration = $student->registrations->random();

        $this->assertInstanceOf(Registration::class, $registration);
    }

    /**
     * Test student table soft deleted are null.
     */
    public function test_student_table_soft_deleted_is_correct(): void
    {
        $student = Student::class;

        $this->assertNotSoftDeleted($student);
    }
}
