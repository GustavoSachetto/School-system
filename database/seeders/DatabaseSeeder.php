<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Course;
use App\Models\Student;
use App\Models\Classroom;
use App\Models\Instructor;
use App\Models\Registration;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleAndPermissionSeeder::class);
        
        $this->runSeeders();
        // $this->runFactories(); 
    }

    /** 
     * Seed the factories in database.
    */
    private function runFactories(): void
    {
        User::factory(5)->active()->create();
        Instructor::factory(User::role('instructor')->count())->create();
        Student::factory(User::role('student')->count())->create();
        Course::factory(12)->create();
        Classroom::factory(5)->create();
        Registration::factory(User::role('student')->count())->create();
    }

    /** 
     * Seed the seeders in database.
    */
    private function runSeeders(): void
    {
        $this->call([
            UserSeeder::class,
            InstructorSeeder::class,
            StudentSeeder::class,
            CourseSeeder::class,
            ClassroomSeeder::class,
            RegistrationSeeder::class
        ]);
    }
}
