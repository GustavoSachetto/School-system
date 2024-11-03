<?php

namespace Database\Seeders;

use App\Models\Instructor;
use Illuminate\Database\Seeder;
use Database\Seeders\Traits\GenerateUsers;

class InstructorSeeder extends Seeder
{
    use GenerateUsers;
    
    /**
     * Count of users to be inserted into storage.
     */
    public int $countUsers = 5;

    /**
     * Role of users to be inserted into storage.
     */
    public string $usersRole = 'instructor';

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createUsers();

        Instructor::factory($this->countUsers)->create();
    }
}
