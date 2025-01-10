<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\CoursePaymentController;

Route::middleware('auth')->controller(CoursePaymentController::class)->group(function () {
    Route::get('/payment/{coursePayment}', 'payment')->name('.payment.index');
    Route::post('/payment', 'store')->name('.payment.store');
});