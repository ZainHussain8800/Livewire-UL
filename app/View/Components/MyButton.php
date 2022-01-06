<?php

namespace App\View\Components;

use Illuminate\View\Component;

class MyButton extends Component
{
    public $text, $color;

    public function __construct($text = "Click Me", $color = 'primary')
    {
        $this->text = $text;
        $this->color = $color;
    }


    public function render()
    {
        return view('components.my-button');
    }
}
