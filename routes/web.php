<?php

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::group([], function () {
    Route::prefix('/')->name('home')->group(base_path('routes/pages/home.php'));
});

Route::get('/course/{title}', function (string $title) {
    return Inertia::render('Course', [
        'course' => Course::where('title', $title)->firstOrFail()
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
