<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\GenerateUsers;

class StudentSeeder extends Seeder
{
    use GenerateUsers;
    
    /**
     * Count of users to be inserted into storage.
     */
    public int $countUsers = 5;

    /**
     * Role of users to be inserted into storage.
     */
    public string $usersRole = 'student';

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createUsers();

        Student::factory($this->countUsers)->create();
    }
}
