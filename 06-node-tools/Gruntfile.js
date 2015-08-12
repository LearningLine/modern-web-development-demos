module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.initConfig({
        jshint: {
            options: {
                eqeqeq: true,
                undef: true,
                node: true
            },
            server: {
                files: {
                    src: 'server.js'
                }
            },
            test: {
                options: {
                    globals: {
                        describe: false,
                        it: false
                    }
                },
                files: {
                    src: 'test/*.js'
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            files: {
                src: 'public/*.js',
                dest: 'build/app.js'
            }
        },

        watch: {
            app: {
                files: '**.js',
                tasks: [ 'jshint' ]
            }
        }
    });

    grunt.registerTask('release', [
        'jshint',
        'uglify'
    ]);
};
