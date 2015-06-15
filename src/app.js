'use strict';

angular.module('app', [
  'app.templates',
  'w11k.slides',
  'w11k.slides.template',
  'ngSanitize'
]);

angular.module('app').config (function (slidesConfig) {
  slidesConfig.slides = [
    'title',

    'overview',
    'about-me',

    'overview/es5',
    'overview/es6',
    'overview/es7',
    'overview/problems',
    'overview/new-features',
    'overview/polyfill',
    'overview/transpiler',
    'overview/typescript',

    //'setup/package-manager',
    //'setup/module-loader',
    //'setup/transpiler',
    //'setup/build',
    'setup/demo',

    'features/promises/overview',
    'features/promises/q',
    'features/promises/es6',

    'features/classes/overview',
    'features/classes/angular-services',
    'features/classes/angular-services-with-classes',


    'features/modules',
    'features/arrow-functions',

    'further-reading',

    'end'
  ];

  slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
  slidesConfig.slideTemplateSuffix = '.html';

  slidesConfig.masters = {
    'regular': '@@cacheBustingDir/masters/regular.html',
    'section-title': '@@cacheBustingDir/masters/section-title.html',
    'section-overview': '@@cacheBustingDir/masters/section-overview.html'
  };
});
