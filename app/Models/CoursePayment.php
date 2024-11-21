<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CoursePayment extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'status',
        'user_id',
        'course_id',
        'payment_id',
        'model_type',
        'payment_method_id',
        'transaction_amount',
    ];

    /**
     * Scope a query to only include payments approved.
     */
    public function scopeApproved(Builder $query): void
    {
        $query->where('status', '=', 'approved');
    }

    /**
     * Get the cource that owns the course payments.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
    
    /**
     * Get the user who paid for the course.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
