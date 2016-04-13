module.exports = function (grunt) {
    var buildTasks = [
        'concat:distScss',
        'sass',
        'ngtemplates',
        'concat:distTemplates',
        'concat:distJavascript',
        'uglify'
     ];

    grunt.registerTask('build', buildTasks);

    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
            dist: {
                src: ['dist/index.html'],
                dest: 'dist/css/main.min.css',
                options: {
                    report: 'min'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/main.min.css': 'src/build/main.scss'
                }
            },
            options: {
                sourcemap: 'none',
                style: 'compressed'
            }
        },
        ngtemplates: {
            app: {
                options: {
                    module: '',
                },
                src: 'src/app/**/*.html',
                dest: 'src/build/templates.js'
            }
        },
        concat: {
            options: {
                mangle: false
            },
            distJavascript: {
                src: ['src/app/app.module.js', 'src/app/app.config.js', 'src/app/app.run.js', 'src/app/**/*.js'],
                dest: 'src/build/main.js'
            },
            distTemplates: {
                src: ['src/build/templates.js'],
                dest: 'src/build/templates.js'
            },
            distScss: {
                src: ['src/css/general.scss', 'src/css/**/*.scss'],
                dest: 'src/build/main.scss'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/main.min.js': ['src/build/main.js'],
                    'dist/js/templates.min.js': ['src/build/templates.js']
                }
            }
        },
        watch: {
            templates: {
                files: 'src/app/**/*.html',
                tasks: ['ngtemplates', 'concat:distTemplates', 'uglify']
            },
            scripts: {
                files: 'src/app/**/*.js',
                tasks: ['concat:distJavascript', 'uglify']
            },
            styles: {
                files: 'src/css/**/*.scss',
                tasks: ['concat:distScss', 'sass']
            }
        },
        connect: {
          server: {
            options: {
              target: 'http://localhost:8000',
              keepalive: true
            },
          },
        }
    });

};