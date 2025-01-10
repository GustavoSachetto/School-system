<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Response;
use App\Models\Course;
use App\Models\CoursePayment;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Services\Payment\PaymentCourse;
use App\Http\Exception\PaymentRequiredException;
use App\Http\Requests\CoursePaymentStoreRequest;
use App\Services\Payment\PaymentService\MercadoPago;

class CoursePaymentController extends Controller
{
    public function __construct() 
    {
        $this->renderingComponent = 'Auth/PaymentCourse';
    }

    /**
     * Display a rendering of courses payment.
     */
    public function payment(CoursePayment $coursePayment): Response
    {
        $this->checkUserId($coursePayment);

        $paymentCourse = new PaymentCourse($coursePayment->user, $coursePayment->course);
        $payment = $paymentCourse->capturePayment(new $coursePayment->model_type($coursePayment->user), $coursePayment);

        return $this->renderComponent([
            'payment'       => $payment,
            'coursePayment' => $coursePayment,
            'course'        => $coursePayment->course,
        ]);
    }

    /**
     * Store a newly created course payment in storage.
     */
    public function store(CoursePaymentStoreRequest $coursePaymentStoreRequest): RedirectResponse
    {
        $user = User::find(Auth::user()->id);
        $course = Course::find($coursePaymentStoreRequest->courseId);

        $paymentCourse = new PaymentCourse($user, $course);
        $coursePayment = $paymentCourse->sendPayment(new MercadoPago($user), 'pix');

        return redirect("/course/payment/{$coursePayment->id}");
    }

    /**
     * Check if authentication user matches payment user.
     * 
     * @throws PaymentRequiredException
     */
    private function checkUserId(CoursePayment $coursePayment): void
    {
        if ($coursePayment->user_id != Auth::user()->id)
            throw new PaymentRequiredException();
    }
}
