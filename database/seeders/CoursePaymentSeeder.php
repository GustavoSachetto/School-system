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
            'status'             => 'approved',
            'user_id'            => 7,
            'payment_id'         => 1,
            'course_id'          => 11,
            'model_type'         => 'App\Services\BankService',
            'payment_method_id'  => 'pix',
            'transaction_amount' => '0.59',
        ],
        [
            'status'             => 'pending',
            'user_id'            => 7,
            'payment_id'         => 13,
            'course_id'          => 3,
            'model_type'         => 'App\Services\BankService',
            'payment_method_id'  => 'pix',
            'transaction_amount' => '1.99',
        ],
        [
            'status'             => 'approved',
            'user_id'            => 9,
            'payment_id'         => 17,
            'course_id'          => 4,
            'model_type'         => 'App\Services\BankService',
            'payment_method_id'  => 'pix',
            'transaction_amount' => '2.99',
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
