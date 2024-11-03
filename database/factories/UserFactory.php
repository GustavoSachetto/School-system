<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name'              => fake()->name(),
            'image'             => null,
            'email'             => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password'          => static::$password ??= Hash::make('password'),
            'remember_token'    => Str::random(10),
        ];
    }

    /**
     * Activate the user role after creation.
     */
    public function active(string $role = null): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 1,
            ])
            ->afterCreating(function (User $user) use($role) {
                $user->assignRole($role ?? Role::inRandomOrder()->first()->id);
            });
    }

    /**
     * Indicates that the user must have an image.
     */
    public function withimage(): static
    {
        return $this->state(fn (array $attributes) => [
            'image' => fake()->optional(0.7)->imageUrl(),
        ]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
