<?php

namespace Database\Seeders\Traits;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Database\Seeders\RoleAndPermissionSeeder;

trait GenerateUsers
{
    /** 
     * Method for creating users with a student role.
    */
    private function createUsers(): void
    {
        $this->createRoles();

        User::factory($this->countUsers ?? 5)->withimage()->active($this->usersRole ?? null)->create();
    }

    /** 
     * Check and create user roles.
    */
    private function createRoles(): void
    {
        isset($this->usersRole) 
            ? $roleCount = Role::where('name', $this->usersRole)->count() 
            : $roleCount = Role::all()->count();

        if (!$roleCount) $this->call(RoleAndPermissionSeeder::class);
    }
}
