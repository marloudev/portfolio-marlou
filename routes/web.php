<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index/homepage/page');
});

Route::get('/about', function () {
    return Inertia::render('index/about/page');
});

Route::get('/service', function () {
    return Inertia::render('index/service/page');
});

Route::get('/portfolio', function () {
    return Inertia::render('index/portfolio/page');
});

Route::get('/contact_me', function () {
    return Inertia::render('index/contact_me/page');
});


Route::get('/my_team', function () {
    return Inertia::render('index/my_team/page');
});


// Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('administrator/page');
//     });
// });

Route::prefix('administrator')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('administrator/dashboard/page');
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
