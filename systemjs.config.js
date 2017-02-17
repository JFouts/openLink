/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  var packages = {
    app: {
      main: '../main.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  };

  var map = {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      
      'marked': 'npm:marked/lib/marked.js',

      '/app/question': 'app/question/index.js',
      '/app/services': 'app/services/index.js',
      '/app/user': 'app/user/index.js',
      '/app/models': 'app/models/index.js',
      '/app/comments': 'app/comments/index.js',
      '/app/question.js': 'app/question/index.js',
      '/app/services.js': 'app/services/index.js',
      '/app/user.js': 'app/user/index.js',
      '/app/models.js': 'app/models/index.js',
      '/app/comments.js': 'app/comments/index.js'
    };

  var barrels = [
    'app/question',
    'app/services',
    'app/user',
    'app/models',
    'app/comments'
  ];

  barrels.forEach(function(pkgName) {
      packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
      paths: {
        // paths serve as alias
        'npm:': 'node_modules/'
      },
      map: map,
      packages: packages
  };

  System.config(config);
})(this);
