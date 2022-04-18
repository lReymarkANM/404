<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Collections;
use App\Http\Controllers\Collection;
use App\Http\Controllers\Notes;
use App\Http\Controllers\Note;
use App\Http\Controllers\ProfilePicture;
use App\Http\Controllers\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::delete('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::prefix('/user')->group(function () {
    Route::get('/', [AuthController::class, 'currentUser'])->middleware('auth:sanctum');
    Route::put('/update', User\UpdateController::class)->middleware('auth:sanctum');
});
Route::prefix('/collections')->group(function () {
    Route::get('/', Collections\IndexController::class)->middleware('auth:sanctum');
    Route::post('/add', Collections\AddController::class)->middleware('auth:sanctum');
    Route::get('/search', Collections\SearchController::class)->middleware('auth:sanctum');
});
Route::prefix('/collection')->group(function () {
    Route::put('/{collectionId}/update', Collection\UpdateController::class)->middleware('auth:sanctum');
    Route::delete('/{collectionId}/delete', Collection\DeleteController::class)->middleware('auth:sanctum');
});
Route::prefix('/notes')->group(function () {
    Route::get('/{collectionId}', Notes\IndexController::class)->middleware('auth:sanctum');
    Route::post('/add', Notes\AddController::class)->middleware('auth:sanctum');
    Route::get('/{collectionId}/search', Notes\SearchController::class)->middleware('auth:sanctum');
});
Route::prefix('/note')->group(function () {
    Route::get('/{id}', Note\IndexController::class)->middleware('auth:sanctum');
    Route::put('/{id}/update', Note\UpdateController::class)->middleware('auth:sanctum');
    Route::put('/{id}/update-target-word-count', Note\UpdateWordCountController::class)->middleware('auth:sanctum');
    Route::delete('/{id}/delete', Note\DeleteController::class)->middleware('auth:sanctum');
});
Route::prefix('/profile-picture')->group(function () {
    Route::get('/', ProfilePicture\IndexController::class)->middleware('auth:sanctum');
    Route::put('/update', ProfilePicture\UpdateController::class)->middleware('auth:sanctum');
});