const { series, parallel } = require('gulp');
const gulp = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { depsCSS, depsFonts } = require('./gulpTasks/deps');
const { monitorArquivos, servidor } = require('./gulpTasks/servidor');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorArquivos
);