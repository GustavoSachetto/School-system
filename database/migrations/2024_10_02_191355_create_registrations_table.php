<?php

use App\Models\Classroom;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Classroom::class, 'classroom_id')->constrained('classrooms', 'id', 'classroom_registration')
                ->noActionOnUpdate()->noActionOnDelete();
            $table->foreignId('student_id')->constrained('students', 'id', 'student_registration')
                ->noActionOnUpdate()->noActionOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};