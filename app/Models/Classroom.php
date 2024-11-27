<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Classroom extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'start_date',
        'end_date',
        'workload',
        'course_id',
        'instructor_id',
        'total_places',
        'available_places',
    ];

    /**
     * Scope a query to only include classrooms where there are available places.
     */
    public function scopeAvailablePlaces(Builder $query): void
    {
        $query->where('available_places', '>', 0);
    }

    /**
     * Get the cource that owns the classroom.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * Get the instructor that owns the classroom.
     */
    public function instructor(): BelongsTo
    {
        return $this->belongsTo(Instructor::class);
    }
}
