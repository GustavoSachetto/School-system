<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classrooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('instructor_id')->constrained('instructors', 'id', 'instructor_classroom');
            $table->foreignId('course_id')->constrained('courses', 'id', 'course_classroom')->noActionOnUpdate()->noActionOnDelete();
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->unsignedSmallInteger('workload');
            $table->unsignedSmallInteger('total_places');
            $table->unsignedSmallInteger('available_places');
            $table->unique(['instructor_id', 'course_id']);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classrooms');
    }
};
