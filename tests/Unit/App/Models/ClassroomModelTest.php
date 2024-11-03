<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\Course;
use App\Models\Classroom;
use App\Models\Instructor;

class ClassroomModelTest extends TestCase
{ 
    /**
     * Test classroom model's are instantiated.
     */
    public function test_classroom_model_can_be_instantiated(): void
    {
        $classroom = Classroom::inRandomOrder()->first();

        $this->assertModelExists($classroom);
    }

    /**
     * Test classroom model the function belongsTo course is correct.
     */
    public function test_classroom_belongs_to_the_course(): void
    {
        $classroom = Classroom::inRandomOrder()->first();

        $this->assertInstanceOf(Course::class, $classroom->course);
    }
    
    /**
     * Test classroom model the function belongsTo instructor is correct.
     */
    public function test_classroom_belongs_to_the_instructor(): void
    {
        $classroom = Classroom::inRandomOrder()->first();

        $this->assertInstanceOf(Instructor::class, $classroom->instructor);
    }

    /**
     * Test classroom table soft deleted are null.
     */
    public function test_classroom_table_soft_deleted_is_correct(): void
    {
        $classroom = Classroom::class;

        $this->assertNotSoftDeleted($classroom);
    }
}
