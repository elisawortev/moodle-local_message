module.exports = function(grunt) {
    grunt.initConfig({
       
        eslint: {
          amd: ['amd/src/**/*.js'] // Configuración de la tarea ESLint
        },
        uglify: {
          options: {
            sourceMap: true,
            sourceMapName: 'amd/build/confirm.min.map',
          },
          build: {
            src: 'amd/src/*.js', // Ruta de los archivos de entrada
            dest: 'amd/build/confirm.min.js',    // Carpeta de salida
          },
        } 
      });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('amd', ['eslint:amd', 'uglify']);
    // Agrega esto para depurar
    grunt.registerTask('debug', function() {
      console.log(grunt.config.get());
    });
  };