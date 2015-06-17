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

    'features/title',

    'features/promises/overview',
    'features/promises/q',
    'features/promises/es6',

    'features/classes/overview',
    'features/classes/angular-services',
    'features/classes/angular-services-with-classes',

    'features/arrow-functions/overview',
    'features/arrow-functions/usecases',

    'features/modules/overview',
    'features/modules/problems',
    'features/modules/es6-angular',
    'features/modules/es6-angular-on-top',
    'features/modules/es6-angular-instead-of',

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
