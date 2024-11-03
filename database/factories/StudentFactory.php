<?php

namespace Database\Factories;

use Database\Factories\Traits\RandomElements;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    use RandomElements;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {   
        static::$countIfRandomNotExists = $this->count;

        return [
            'cpf'        => fake('pt_BR')->unique()->cpf(false),
            'phone'      => fake('pt_BR')->unique()->cellphoneNumber(false),
            'date_birth' => fake()->optional(0.9)->date('Y-m-d', '2022-12-31'),
            'user_id'    => $this->randomUsers('student')->shift(),
        ];
    }
}
