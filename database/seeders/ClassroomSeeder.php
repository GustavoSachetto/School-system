<?php

namespace Database\Seeders;

use App\Models\Classroom;
use Illuminate\Database\Seeder;

class ClassroomSeeder extends Seeder
{
    /**
     * Count of classrooms to be inserted into storage.
     */
    public int $countClassrooms = 10;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Classroom::factory($this->countClassrooms)->create();
    }
}
