var timers  = new Array;
var images  = new Array;
function changeThumb( id, url )
{
document.getElementById(id).src = url;
}
function thumb_path( path ) {
var path = 'http://localhost:2100/' + path;
return path;
}
$(document).ready(function() {
$("body").on('mouseover', "img[id*='rotate_']", function(event) {
var image_id    = $(this).attr("id");
var id_split    = image_id.split('_');
var video_path    = id_split[1];
if (typeof thumbs == "undefined") {
thumbs = 10;
}
for ( var i=1; i<=thumbs; i++ ) {
var image_url = thumb_path(video_path) + '/' + i + '.jpg';
images[i]     = new Image();
images[i].src = image_url;
}
for ( var i=1; i<=thumbs; i++ ) {
timers[i] = setTimeout("changeThumb('" + image_id + "','" + thumb_path(video_path) + '/' + i + '.jpg' + "')", i*50*10);
}
}).on('mouseout', "img[id*='rotate_']", function(event) {
var image_id    = $(this).attr("id");
var id_split    = image_id.split('_');
var video_path    = id_split[1];
var thumbs		= id_split[2];
var def_thumb = id_split[3];		
if (typeof thumbs == "undefined") {
thumbs = 10;
}
for ( var i=1; i<=thumbs; i++ ) {
if ( typeof timers[i] == "number" ) {
clearTimeout(timers[i]);
}
}
if ( $.isNumeric(def_thumb) )
$(this).attr('src', thumb_path(video_path) + '/' + def_thumb + '.jpg');
else
$(this).attr('src', thumb_path(video_path) + '/1.jpg');
});
});