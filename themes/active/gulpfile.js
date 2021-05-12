"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const less = require("gulp-less");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const notify = require("gulp-notify");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');


/* Paths */
const srcPath = 'src/';
const distPath = 'assets/';

const path = {
    build: {
        js: distPath + "js/",
        css: distPath + "css/",
        images: distPath + "images/",
        fonts: distPath + "fonts/"
    },
    src: {
        js: srcPath + "js/*.js",
        css: srcPath + "less/style.less",
        images: srcPath + "images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    watch: {
        js: srcPath + "js/**/*.js",
        css: srcPath + "less/**/*.less",
        images: srcPath + "images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    clean: "./" + distPath
}



/* Tasks */

function css(cb) {
    return src(path.src.css, { base: srcPath + "less/" })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "Less Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(less())
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css));

    cb();
}

function cssWatch(cb) {
    return src(path.src.css, { base: srcPath + "less/" })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "Less Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(less())
        .pipe(dest(path.build.css))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css));

    cb();
}

function js(cb) {
    return src(path.src.js, { base: srcPath + 'js/' })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(webpackStream({
            mode: "production",
            entry: {
                index: './src/js/index.js',
                catalog: './src/js/catalog.js',
                objects: './src/js/objects.js'
            },
            output: {
                filename: '[name].bundle.js',
            },
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        }))
        .pipe(dest(path.build.js));

    cb();
}

function jsWatch(cb) {
    return src(path.src.js, { base: srcPath + 'js/' })
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(webpackStream({
            mode: "development",
            entry: {
                index: './src/js/index.js',
                catalog: './src/js/catalog.js',
                objects: './src/js/objects.js'
            },
            output: {
                filename: '[name].bundle.js',
            }
        }))
        .pipe(dest(path.build.js));

    cb();
}

function images(cb) {
    return src(path.src.images)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 80, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest(path.build.images));

    cb();
}

function fonts(cb) {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts));

    cb();
}

function clean(cb) {
    return del(path.clean);

    cb();
}

function watchFiles() {
    gulp.watch([path.watch.css], cssWatch);
    gulp.watch([path.watch.js], jsWatch);
    gulp.watch([path.watch.images], images);
    gulp.watch([path.watch.fonts], fonts);
}

const build = gulp.series(clean, gulp.parallel(css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles);



/* Exports Tasks */
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;