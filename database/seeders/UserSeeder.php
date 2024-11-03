<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\Traits\GenerateUsers;

class UserSeeder extends Seeder
{
    use GenerateUsers;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createRoles();

        User::create([
            'name'              => 'Gustavo Sachetto da Cruz',
            'image'             => null,
            'email'             => 'sistemateste@gmail.com',
            'email_verified_at' => now(),
            'password'          => Hash::make('admin'),
            'remember_token'    => Str::random(10),
        ]);
    }
}
