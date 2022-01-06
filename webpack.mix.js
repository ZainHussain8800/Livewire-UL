const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/tabler/tabler.js', 'public/js');
mix.js('resources/js/turbolinks.js', 'public/js');
mix.js('resources/js/turbolinks-adapter.js', 'public/js');

mix.sass('resources/sass/tabler/tabler.scss', 'public/css')
    .sourceMaps();

mix.sass('resources/sass/tabler-icons/tabler-icons.scss', 'public/css/tabler-icons')
    .sourceMaps();
