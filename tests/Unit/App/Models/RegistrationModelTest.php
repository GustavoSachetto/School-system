<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\Student;
use App\Models\Classroom;
use App\Models\Registration;

class RegistrationModelTest extends TestCase
{ 
    /**
     * Test registration model's are instantiated.
     */
    public function test_registration_model_can_be_instantiated(): void
    {
        $registration = Registration::inRandomOrder()->first();

        $this->assertModelExists($registration);
    }

    /**
     * Test registration model the function belongsTo student is correct.
     */
    public function test_registration_belongs_to_the_student(): void
    {
        $registration = Registration::inRandomOrder()->first();

        $this->assertInstanceOf(Student::class, $registration->student);
    }

    /**
     * Test registration model the function belongsTo classroom is correct.
     */
    public function test_registration_belongs_to_the_classroom(): void
    {
        $registration = Registration::inRandomOrder()->first();

        $this->assertInstanceOf(Classroom::class, $registration->classroom);
    }

    /**
     * Test registration table soft deleted are null.
     */
    public function test_registration_table_soft_deleted_is_correct(): void
    {
        $registration = Registration::class;

        $this->assertNotSoftDeleted($registration);
    }
}
