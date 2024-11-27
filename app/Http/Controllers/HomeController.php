<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Course;
use App\Http\Requests\HomeSearchRequest;

class HomeController extends Controller
{
    /**
     * Default rendering component.
     */
    public string $renderingComponent = 'Home';
    
    /**
     * Item limit per query.
     */
    private int $limitQueries = 8;

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
     * Search a newly created resource in storage.
     */
    public function search(HomeSearchRequest $homeSearchRequest): Response
    {
        $queryResult = Course::whereTitleOrName($homeSearchRequest->titleOrName)->limit($this->limitQueries)->get();

        return $this->renderComponent([
            'courses' => $queryResult
        ]); 
    }

    /**
     * Render default home controller component.
     */
    private function renderComponent(?array $props = null): Response
    {
        return Inertia::render($this->renderingComponent, $props); 
    }
}
