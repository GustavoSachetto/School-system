<?php

namespace Database\Seeders;

use App\Models\CoursePayment;
use Illuminate\Database\Seeder;

class CoursePaymentSeeder extends Seeder
{
    /**
     * Course payments to be inserted into storage.
     */
    private array $coursePayments = [
        [
            'price'     => '0.59',
            'status'    => 'approved',
            'user_id'   => 7,
            'course_id' => 1,
        ],
        [
            'price'     => '1.99',
            'status'    => 'pending',
            'user_id'   => 7,
            'course_id' => 3,
        ],
        [
            'price'     => '2.99',
            'status'    => 'approved',
            'user_id'   => 9,
            'course_id' => 4,
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->coursePayments as $payment) {
            CoursePayment::create($payment);
        }
    }
}
