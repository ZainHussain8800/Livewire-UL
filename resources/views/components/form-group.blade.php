<div class="form-group mb-3">
    <label for="">{{ $label }}</label>
    <input type="{{ $type }}" class="form-control @error($model) is-invalid @enderror"
        wire:model.{{ $mode }}="{{ $model }}">
    @error($model)
        <span class="invalid-feedback">{{ $errors->first($model) }}</span>
    @enderror
</div>
