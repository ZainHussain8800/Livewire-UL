<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Form extends Component
{


    public $action,$text;

    public function __construct($action,$text = "Submit")
    {
        $this->action = $action;
        $this->text = $text;
    }


    public function render()
    {
        return view('components.form');
    }
}
