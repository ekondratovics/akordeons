let mix = require('laravel-mix');

mix.js('source/js/app.js', 'public')
   .sass('source/sass/app.scss', 'public')
   .setPublicPath('public');