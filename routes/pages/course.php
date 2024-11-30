<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;

Route::controller(CourseController::class)->group(function () {
    Route::get('/view/{title}', 'show');
});