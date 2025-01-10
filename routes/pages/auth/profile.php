<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::middleware('auth')->controller(ProfileController::class)->group(function () {
    Route::get('/', 'edit')->name('.edit');
    Route::patch('/', 'update')->name('.update');
    Route::delete('/', 'destroy')->name('.destroy');
});