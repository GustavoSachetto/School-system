<?php

namespace Tests\Unit\App\Models;

use Tests\TestCase;
use App\Models\User;

class UserModelTest extends TestCase
{ 
    /**
     * Test user model's are instantiated.
     */
    public function test_user_model_can_be_instantiated(): void
    {
        $user = User::inRandomOrder()->first();

        $this->assertModelExists($user);
    }

    /**
     * Test user table soft deleted are null.
     */
    public function test_user_table_soft_deleted_is_correct(): void
    {
        $user = User::class;

        $this->assertNotSoftDeleted($user);
    }
}
