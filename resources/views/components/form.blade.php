<form wire:submit.prevent="{{$action}}">

    {{$slot}}

    <div class="d-flex justify-content-end">
        <x-my-button color="success" text="{{$text}}" />
    </div>

</form>
