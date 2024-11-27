<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

abstract class Controller
{
    /**
     * Default rendering component.
     */
    protected string $renderingComponent = 'Home';

    /**
     * Render default home controller component.
     */
    protected function renderComponent(?array $props = null): Response
    {
        return Inertia::render($this->renderingComponent, $props); 
    }
}
