/// <reference path="vendor/angular-route/angular-route.min.js" />
/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    build_dir: 'SnowWhiteClientApp',
    compile_dir: 'SnowWhiteClientAppLive',

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, and `unit` contains our
     * app's unit tests.
     */
    app_files: {
        js: ['src/**/*.js', '!src/**/*.spec.js', '!src/ws.js', '!src/assets/**/*.js'],
        //jsunit: [ 'src/**/*.spec.js' ],

        atpl: ['src/app/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],

        html: ['src/index.html'],
        less: 'src/less/main.less'
    },


    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`vendor/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     *
     * The `vendor_files.assets` property holds any assets to be copied along
     * with our app's assets. This structure is flattened, so it is not
     * recommended that you use wildcards.
     */
    vendor_files: {
        js: [
            'vendor/jquery/dist/jquery.min.js',
            //'vendor/jquery/dist/jquery.min.map',
            'vendor/jquery/dist/jquery.snow.min.js',
            //'vendor/jquery/dist/jquery.min.map',
            'vendor/angular/angular.js',
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/angular-cookies/angular-cookies.min.js',
            'vendor/angular-translate/angular-translate.min.js',
            'vendor/angular-bootstrap/ui-bootstrap.min.js',
            'vendor/angular-resource/angular-resource.min.js',
            'vendor/ng-file-upload/angular-file-upload.min.js',
            'vendor/angular-translate-storage-local/angular-translate-storage-local.min.js',
            'vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
            'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            'vendor/angular-route/angular-route.min.js',
            'vendor/angular-route/restangular.min.js',
            'vendor/angular-timer/angular-timer.min.js',
            'vendor/highcharts-ng/highcharts.js',
            'vendor/highcharts-ng/highcharts-more.js',
            'vendor/highcharts-ng/solid-gauge.src.js',
            'vendor/highcharts-ng/highcharts-ng.min.js'
        ],
        css: [
        ],
        assets: [

        ]
    },
};
