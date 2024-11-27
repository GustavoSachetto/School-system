<?php

use Illuminate\Support\Facades\Route;

Route::group([], function () {
    Route::prefix('/')->name('home')->group(base_path('routes/pages/home.php'));
    Route::prefix('/course')->name('course')->group(base_path('routes/pages/course.php'));
});

Route::group([], function () {
    Route::prefix('/')->group(base_path('routes/pages/auth/auth.php'));
    Route::prefix('/')->group(base_path('routes/pages/auth/guest.php'));
    Route::prefix('/')->name('auth')->group(base_path('routes/pages/auth/guest.php'));
    Route::prefix('/profile')->name('profile')->group(base_path('routes/pages/auth/profile.php'));

})->middleware('auth');