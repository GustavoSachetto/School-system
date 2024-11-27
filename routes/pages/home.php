<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::controller(HomeController::class)->group(function () {
    Route::get('', 'index')->name('.index');
    Route::post('', 'search')->name('.search');
    
    Route::get('about', 'about')->name('.about');
});