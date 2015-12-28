var path = require("path");
var gulp = require("gulp");
var ts = require("gulp-typescript");
var nodemon = require("gulp-nodemon");

//Compile Application (Server) Typescript Files
gulp.task('buildApp', function(){
   var tsProject = ts.createProject(path.resolve("./dev/app/tsconfig.json"));
   return gulp.src(path.resolve("./dev/app/**/*.ts"))
   .pipe(ts(tsProject))
   .js
   .pipe(gulp.dest(path.resolve("./app/"))) 
});

//Compile Public (Client) Typescript Files
gulp.task('buildPublic', function(){
   var tsProject = ts.createProject(path.resolve("./dev/public/tsconfig.json"));
   return gulp.src(path.resolve("./dev/public/**/*.ts"))
   .pipe(ts(tsProject))
   .js
   .pipe(gulp.dest(path.resolve("./public/"))) 
});

// Copy all html files and assets
gulp.task("copy", function() {
    gulp.src("dev/public/**/*.html").pipe(gulp.dest("public"));
    gulp.src("dev/public/assets/**/*.*").pipe(gulp.dest("public/assets"));
});

// Watch Typescript and Html file change
gulp.task("watch", function(){
    gulp.watch("dev/app/**/*.ts", ['buildApp']);
    gulp.watch("dev/public/**/*.ts", ['buildPublic']);
    gulp.watch("dev/public/**/*.html", ['copy']);
})

// Restart Server on file change
gulp.task('start', function () {
  nodemon({
    script: './app/server.js'
  , tasks: ['watch']
  })
})

gulp.task('default', ['watch', 'start']);