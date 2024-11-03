<?php

namespace Database\Seeders;

use App\Models\Registration;
use Illuminate\Database\Seeder;

class RegistrationSeeder extends Seeder
{
    /**
     * Count of registrations to be inserted into storage.
     */
    public int $countRegistrations = 5;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Registration::factory($this->countRegistrations)->create();
    }
}
