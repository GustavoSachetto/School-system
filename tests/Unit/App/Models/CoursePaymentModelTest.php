<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\User;
use App\Models\Course;
use App\Models\CoursePayment;

class CoursePaymentModelTest extends TestCase
{ 
    /**
     * Test course payments model's are instantiated.
     */
    public function test_course_payments_model_can_be_instantiated(): void
    {
        $coursePayments = CoursePayment::inRandomOrder()->first();

        $this->assertModelExists($coursePayments);
    }

    /**
     * Test course payments model the function belongsTo user is correct.
     */
    public function test_course_payments_belongs_to_the_user(): void
    {
        $coursePayments = CoursePayment::inRandomOrder()->first();

        $this->assertInstanceOf(User::class, $coursePayments->user);
    }

    /**
     * Test course payments model the function belongsTo course is correct.
     */
    public function test_course_payments_belongs_to_the_course(): void
    {
        $coursePayments = CoursePayment::inRandomOrder()->first();

        $this->assertInstanceOf(Course::class, $coursePayments->course);
    }

    /**
     * Test course payments table soft deleted are null.
     */
    public function test_course_payments_table_soft_deleted_is_correct(): void
    {
        $coursePayments = CoursePayment::class;

        $this->assertNotSoftDeleted($coursePayments);
    }
}
