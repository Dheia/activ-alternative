'use strict';

const { series, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const webpackStream = require('webpack-stream');
const del = require('del');

// Путь к формируемой сборщиком папке с готовыми файлами
const dist = './assets';

// Пути для работы такс раннера
const path = {
    src: {
        css: [
            './src/less/style.less'
        ],
        js: {
            all: './src/js/**/*.js',
            entry: {
                common: './src/js/common.js',
                index: './src/js/index.js',
                object: './src/js/object.js',
            }
        },
        fonts: './src/fonts/**/*',
        images: './src/images/**/*'
    },
    dist: {
        css: dist + '/css',
        js: dist + '/js',
        fonts: dist + '/fonts',
        images: dist + '/images'
    },
    watch: {
        css: './src/less/**/*.less',
        js: './src/js/**/*.js',
        fonts: './src/fonts/**/*',
        images: './src/images/**/*'
    },
    clean: {
        all: dist + '/**/*'
    }
}

function buildLess() {
    return src(path.src.css)
        .pipe(less())
        .pipe(dest(path.dist.css));
}

function buildJs() {
    return src(path.src.js.all)
        .pipe(webpackStream({
            mode: 'development',
            entry: path.src.js.entry,
            output: {
                filename: '[name].bundle.js'
            },
            // devtool: "source-map"
        }))
        .pipe(dest(path.dist.js));
}

function copyFonts() {
    return src(path.src.fonts)
        .pipe(dest(path.dist.fonts));
}

function copyImages() {
    return src(path.src.images)
        .pipe(dest(path.dist.images));
}

function watching() {
    watch(path.watch.css, buildLess);
    watch(path.watch.js, buildJs);
    watch(path.watch.fonts, copyFonts);
    watch(path.watch.images, copyImages);
}

function clean() {
    return del(path.clean.all);
}

exports.default = series(clean, buildLess, buildJs, copyFonts, copyImages, watching);