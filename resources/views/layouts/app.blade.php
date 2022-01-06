<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="drupal-theme" content="..." data-turbolinks-track="reload">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/tabler.css')}}">
    <link rel="stylesheet" href="{{asset('css/tabler-icons/tabler-icons.css')}}">
    @livewireStyles
    @livewireScripts
    <script src="{{asset('js/turbolinks.js')}}"></script>
    <script src="{{asset('js/turbolinks-adapter.js')}}" data-turbolinks-eval="false" data-turbo-eval="false"></script>
</head>
<body>
    {{$slot}}
</body>
</html>
