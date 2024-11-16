<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'about',
        'name',
        'workload',
        'requirement',
        'price',
    ];

    /**
     * The attributes that should be hidden for arrays.
     */
    protected $hidden = ['image'];

    /**
     * The accessors to append to the model's array form.
     */
    protected $appends = ['image_url'];

    /**
     * Return image in url format.
     */
    public function imageUrl(): Attribute
    {
        return new Attribute(
            get: fn () => url($this->image)
        );
    }

    /**
     * Get the classrooms to the cource.
     */
    public function classrooms(): HasMany
    {
        return $this->hasMany(Classroom::class);
    }
}
