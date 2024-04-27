<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/  
Route::get('/', [NewsController::class, 'index'])->name('/');
Route::get('/kelompok', [NewsController::class, 'view'])->name('kelompok');
Route::get('/create', [NewsController::class, 'create'])->middleware(['auth', 'verified'])->name('create');
Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified']);
Route::get('/news/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified']);
Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified']);
Route::delete('/news/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified']);

Route::get('/download/{image}',  [NewsController::class, 'download'])->name('download.image');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
