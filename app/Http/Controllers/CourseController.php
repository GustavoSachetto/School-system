<?php

namespace App\Http\Controllers;

use Inertia\Response;
use App\Models\Course;

class CourseController extends Controller
{
    public function __construct() 
    {
        $this->renderingComponent = 'Course';
    }

    /**
     * Display a rendering of the course.
     */
    public function show(string $title): Response
    {
        $queryResult = Course::where('title', $title)->firstOrFail();
        
        return $this->renderComponent([
            'course' => $queryResult
        ]); 
    }
}
