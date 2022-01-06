<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Root extends Component
{
    public $target;

    public function  __construct($target = null){
        $this->target = $target;
    }

    public function render()
    {
        return view('components.root');
    }
}
