<?php

namespace Database\Factories\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

trait RandomElements
{
    private static array $instances = [];
    
    /**
     * Count to generate if model does not exist.
     */
    private static int $countIfRandomNotExists = 5;

    /**
     * Generates a random static collection of the user model.
     */
    private function randomUsers(string $role): Collection
    {
        if (empty(static::$instances[User::class])) {
            $elements = User::role($role)->get();
    
            if ($elements->isEmpty())
                $elements = User::factory(self::$countIfRandomNotExists)->active($role)->create();

            return static::$instances[User::class] = $elements->shuffle();
        }

        return static::$instances[User::class];
    }

    /**
     * Generates a random static collection of the specified model.
     */
    private function randomModels(string $model): Collection
    {
        if (empty(static::$instances[$model])) {
            $elements = $model::all();

            if ($elements->isEmpty())
                $elements = $model::factory(self::$countIfRandomNotExists)->create();

            return static::$instances[$model] = $elements->shuffle();
        }

        return static::$instances[$model];
    }
}
