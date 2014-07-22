This project is being managed separately from Login2Contact java web cruncher e.g. using Web Storm and gulp.
"dist" folder created by "gulp build" gets becomes part of Login2Contact snapshot for Tomcat through manual copy.
Separately managed near disk root e.g. E:\ on account of deep hierarchical nature of node_modules parent directory and its dependencies,
enabling "clean" pre-build operation to have more chance of success.