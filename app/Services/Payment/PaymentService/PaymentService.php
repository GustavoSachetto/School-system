<?php

namespace App\Services\Payment\PaymentService;

use App\Models\User;

interface PaymentService
{
    public function __construct(User $user);
    public function capturePayment(int $paymentId);
    public function sendPayment(float $transactionAmount, string $paymentMethodId);
}