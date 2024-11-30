<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Course;
use App\Http\Requests\HomeSearchRequest;

class HomeController extends Controller
{
    private int $limitQueries = 8;

    public function __construct() 
    {
        $this->renderingComponent = 'Home';
    }

    /**
     * Display a rendering of the courses.
     */
    public function index(): Response
    {
        $queryResult = Course::limit($this->limitQueries)->get();

        return $this->renderComponent([
            'courses' => $queryResult
        ]); 
    }

    /**
     * Display a rendering of the about page.
     */
    public function about(): Response
    {
        return Inertia::render('About');
    }

    /**
     * Search a newly created resource in storage.
     */
    public function search(HomeSearchRequest $homeSearchRequest): Response
    {
        $queryResult = Course::titleOrName($homeSearchRequest->titleOrName)->limit($this->limitQueries)->get();

        return $this->renderComponent([
            'courses' => $queryResult
        ]); 
    }
}
