const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/index.js', 'public/js').react()
    .postCss('resources/css/index.css', 'public/css', [
        require('tailwindcss')
    ]);
    
mix.alias({
    '@images': path.join(__dirname, 'public/images'),
    '@reducers': path.join(__dirname, 'resources/js/reducers'),
    '@common': path.join(__dirname, 'resources/js/common'),
    '@animations': path.join(__dirname, 'resources/js/animations'),
    '@pages': path.join(__dirname, 'resources/js/pages'),
    '@sub-pages': path.join(__dirname, 'resources/js/sub-pages'),
    '@layouts': path.join(__dirname, 'resources/js/layouts'),
    '@App': path.join(__dirname, 'resources/js/App')
})