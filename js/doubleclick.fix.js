//--------------------------------------------------------------------------------------------------------------
//
//  Doubleclick fix for Androids 4.2x where a single tap results 
//  in a double tap
//  Solution found here:
//  http://stackoverflow.com/questions/14982864/phonegap-2-4-0-with-android-4-2-strange-double-click-behaviour
//
//--------------------------------------------------------------------------------------------------------------
/*
var last_click_time = new Date().getTime();
$("a").live("click", function(ev) {
     var click_time = ev["timeStamp"];
     if (click_time && (click_time - last_click_time) < 1000) {
          ev.stopImmediatePropagation();
          return false;
     }    
     last_click_x = click_x;
     last_click_y = click_y;
     last_click_time = click_time;
});
*/

last_click_time = new Date().getTime();
document.addEventListener('click', function (e) {
    click_time = e['timeStamp'];
    if (click_time && (click_time - last_click_time) < 500) {
        e.stopImmediatePropagation();
        e.preventDefault();
        return false;
    }
    last_click_time = click_time;
}, true);