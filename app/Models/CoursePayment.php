<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
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
     * The accessors to append to the model's array form.
     */
    protected $appends = ['generated_at'];

    /**
     * Return created at in format of date.
     */
    public function generatedAt(): Attribute
    {
        return new Attribute(
            get: fn () => $this->created_at->format('d/m/Y | H:i')
        );
    }

    /**
     * Return a course payment status test.
     */
    public function isApproved(): bool
    {
        return $this->status === "approved" ? true : false;
    }

    /**
     * Scope a query to only include payments approved.
     */
    public function scopeApproved(Builder $query): void
    {
        $query->where('status', '=', 'approved');
    }

    /**
     * Scope a query to select user and course payments.
     */
    public function scopeUserAndCourse(Builder $query, User $user, Course $course): void
    {
        $query->where('user_id', $user->id)->where('course_id', $course->id);
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
