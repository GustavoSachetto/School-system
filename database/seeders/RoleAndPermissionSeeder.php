<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Roles to be created.
     */
    public array $roles = ['instructor', 'student', 'moderator', 'admin'];

    /** 
     * Permissions to be created.
    */
    public array $permissions = ['publish courses'];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createRoles();
        $this->createPermissions();
        
        // Give permissions to intructor role
        $this->roles['instructor']->givePermissionTo(['publish courses']);
    }

    /** 
     * Method for creating roles.
    */
    private function createRoles(): void
    {
        foreach ($this->roles as $role) {
            $this->roles[$role] = Role::create(['name' => $role]);
        }
    }

    /** 
     * Method for creating permissions.
    */
    private function createPermissions(): void
    {
        foreach ($this->permissions as $permission) {
            $this->permissions[$permission] = Permission::create(['name' => $permission]);
        }
    }
}
