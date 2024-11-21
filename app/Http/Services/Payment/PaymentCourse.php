<?php

namespace App\Http\Services\Payment;

use App\Models\User;
use App\Models\Course;
use App\Models\CoursePayment;
use App\Http\Services\Payment\PaymentService\MercadoPago;
use App\Http\Services\Payment\PaymentService\PaymentInterface;

class PaymentCourse extends Payment
{
    public function __construct(
        private User $user,
        private Course $course
    ) {}

    /**
     * Capture authorized payment to the bank.
     */
    public function capturePayment(PaymentInterface $paymentService, CoursePayment $coursePayment): mixed
    {
        $payment = $paymentService->capturePayment($coursePayment->payment_id);

        $coursePayment->update([
            'status' => $payment->status
        ]);

        return $payment;
    }

    /**
     * Check if the course payment has been approved.
     */
    public function checkCoursePayment(PaymentInterface $paymentService, CoursePayment $coursePayment): mixed
    {
        $coursePayment = CoursePayment::find($coursePayment->id)->approved();

        return $coursePayment 
            ? $coursePayment
            : $this->capturePayment($paymentService, $coursePayment);
    }

    /** 
     * Makes the payment request to the bank.
    */
    public function sendPayment(PaymentInterface $paymentService, string $paymentMethodId): mixed
    {
        $payment = $paymentService->sendPayment($this->course->price, $paymentMethodId);

        CoursePayment::create([
            'status'             => $payment->status,
            'user_id'            => $this->user->id,
            'course_id'          => $this->course->id,
            'payment_id'         => $payment->id,
            'model_type'         => MercadoPago::class,
            'payment_method_id'  => $paymentMethodId,
            'transaction_amount' => $this->course->price,
        ]);

        return $payment;
    }
}