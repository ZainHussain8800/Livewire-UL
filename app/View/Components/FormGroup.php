<?php

namespace App\View\Components;

use Illuminate\View\Component;

class FormGroup extends Component
{

    public $type,$label,$model,$mode;

    public function __construct($label,$model,$type = "text",$mode="defer")
    {
        $this->type = $type;
        $this->model = $model;
        $this->label = $label;
        $this->mode = $mode;
    }


    public function render()
    {
        return view('components.form-group');
    }
}
