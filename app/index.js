var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    // The name `constructor` is important here
    constructor: function () {
        generators.Base.apply(this, arguments);
        console.log('init here');
    },
    paths: function () {
        this.sourceRoot();
        // returns './templates'
    },
    writing: function () {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            { name: 'Name' }
        );
        this.fs.copyTpl(
            this.templatePath('bower.json'),
            this.destinationPath('bower.json'),
            { name: 'Name' }
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
        this.fs.copyTpl(
            this.templatePath('src/js/app.js'),
            this.destinationPath('src/js/app.js')
        );
        this.fs.copyTpl(
            this.templatePath('src/css/app.scss'),
            this.destinationPath('src/css/app.scss')
        );
        this.fs.copyTpl(
            this.templatePath('public/index.html'),
            this.destinationPath('public/index.html'),
            { name: 'Name' }
        );
        this.fs.copyTpl(
            this.templatePath('public/js/.gitkeep'),
            this.destinationPath('public/js/.gitkeep')
        );
        this.fs.copyTpl(
            this.templatePath('public/css/.gitkeep'),
            this.destinationPath('public/css/.gitkeep')
        );
        this.fs.copyTpl(
            this.templatePath('test/app.spec.js'),
            this.destinationPath('test/app.spec.js')
        );
        this.fs.copyTpl(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );
    },
    installBowerDep: function () {
        var bowerDependencies = [
            'marx'
        ];
        this.bowerInstall(bowerDependencies, { 'save': true });
        // this.bulkDirectory(
        //     this.destinationPath('bower_components/marx/scss'),
        //     this.destinationPath('src/css/marx')
        // );
    },
    installBuildTools: function () {
        var devDependencies = [
            'webpack',
            'node-libs-browser',
            'babel-loader',
            'css-loader',
            'style-loader',
            'node-sass',
            'serve',
            'uglifyjs',
            'livereload',
            'mocha',
            'sinon',
            'chai',
            'karma',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sinon',
            'karma-spec-reporter',
            'karma-webpack',
            'karma-sourcemap-loader'
        ];
        this.npmInstall(devDependencies, { 'saveDev': true });
    },
    end: function () {
        console.log('cleanup here');
    }

});
