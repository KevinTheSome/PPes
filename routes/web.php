<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EventController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/events', function () {
    return Inertia::render('Events');
})->Middleware(['auth', 'verified'])->name('events');

Route::get('/test', function () {
    return Inertia::render('Test');
})->Middleware(['auth', 'verified'])->name('test'); 

Route::get('/image/{any}', function ($any) {
    return response()->file(storage_path( 'app/public/'.$any));
})->where('any', '.*');



Route::get('/events/create', function () {
    return Inertia::render('Events/Create');
})->Middleware(['auth', 'verified'])->name('events.create');

Route::get('/events/update', function () {
    return Inertia::render('Events/Update');
})->Middleware(['auth', 'verified'])->name('events.update');

Route::get('/events/show/{id}', function () {
    return Inertia::render('Events/Show');
})->Middleware(['auth', 'verified'])->name('events.show');

Route::get('/events/edit/{id}', [EventController::class, 'edit'])->Middleware(['auth', 'verified']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/api/events', [EventController::class, 'index'])->name('api.index');
    Route::get('/api/show/{id}', [EventController::class, 'show'])->name('api.show');
    Route::post('/api/create', [EventController::class, 'create'])->name('api.create');
    Route::post('/api/update/{id}', [EventController::class, 'update'])->name('api.update');
    Route::delete('/api/delete/{id}', [EventController::class, 'delete'])->name('api.delete');


});

require __DIR__.'/auth.php';
