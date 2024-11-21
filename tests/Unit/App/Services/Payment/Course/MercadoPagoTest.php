<?php

namespace Tests\Unit\App\Services\Payment\Course;

use App\Models\User;
use App\Models\Course;
use App\Models\CoursePayment;
use MercadoPago\Resources\Payment;
use App\Http\Services\Payment\PaymentCourse;
use App\Http\Services\Payment\PaymentService\MercadoPago;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

class MercadoPagoTest extends BaseTestCase
{
    /**
     * Test whether users can send payment for courses via Mercado Pago.
     */
    public function test_users_can_send_payment_for_courses(): void
    {
        $user = User::inRandomOrder()->first();
        $course = Course::inRandomOrder()->first();
        
        $paymentCourse = new PaymentCourse($user, $course);
        $payment = $paymentCourse->sendPayment(new MercadoPago($user), 'pix');

        $this->assertInstanceOf(Payment::class, $payment);
    }

    /**
     * Test whether users can capture payment for courses via Mercado Pago.
     */
    public function test_users_can_capture_payment_for_courses(): void
    {
        $coursePayment = CoursePayment::orderBy('id', 'desc')->first();

        $paymentCourse = new PaymentCourse($coursePayment->user, $coursePayment->course);
        $payment = $paymentCourse->capturePayment(new $coursePayment->model_type($coursePayment->user), $coursePayment);
        
        $this->assertInstanceOf(Payment::class, $payment);
    }
}
