//Adding support for swipe gestures
(function(){
var swipejs = function(){
  var maxTime = 1000,
      maxDistance = 80,  
      target = $(document),
      startX = 0,
      startTime = 0,
      touch = "ontouchend" in document,
      startEvent = (touch) ? 'touchstart' : 'mousedown',
      moveEvent = (touch) ? 'touchmove' : 'mousemove',
      endEvent = (touch) ? 'touchend' : 'mouseup';

  target.bind(startEvent, function(e){
    startTime = e.timeStamp;
    startX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
  }).bind(endEvent, function(){
    startTime = 0;
    startX = 0;
  }).bind(moveEvent, function(e){
     var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
         currentDistance = (startX === 0) ? 0 : Math.abs(currentX - startX),
         // allow if movement < 1 sec
         currentTime = e.timeStamp;
     if (startTime !== 0 && currentTime - startTime < maxTime && currentDistance > maxDistance) {
       if (currentX < startX) {
       // swipe left code here
         return "swipeLeft";
       }
       if (currentX > startX) {
         // swipe right code here
         return "swipeRight";
       }
       startTime = 0;
       startX = 0;
    }
  });
};
swipejs();
})();
