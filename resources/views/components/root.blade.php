<div>
    <div class="progress progress-sm bg-transparent position-absolute">
        <div wire:loading.delay @if ($target) wire:target="{{ $target }}" @endif class="progress-bar progress-bar-indeterminate"></div>
    </div>

    <div class="container py-5">
        {{ $slot }}
    </div>
</div>
