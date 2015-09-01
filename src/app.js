'use strict';

angular.module('app', [
  'app.templates',
  'w11k.slides',
  'w11k.slides.template'
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
    'overview/typescript-migration',

    'setup/title',
    'setup/package-manager',
    'setup/module-loader',
    'setup/transpiler',
    'setup/demo',

    'features/title',

    'features/promises/overview',
    'features/promises/q',
    'features/promises/es6',

    'features/modules/es5',
    'features/modules/es6',
    'features/modules/es6-named-export',
    'features/modules/es6-default-export',
    'features/modules/es6-angular',
    'features/modules/es6-angular-on-top',
    'features/modules/es6-angular-instead-of',

    'features/classes/overview',
    'features/classes/angular-services',
    'features/classes/angular-services-with-classes',

    'features/arrow-functions/overview',
    'features/arrow-functions/usecases',

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
