function openBrowser(url){
	//var url = 'https://cordova.apache.org';
	var target = '_blank';
	var options = "location = yes"
	var ref = cordova.InAppBrowser.open(url, target, options);
}
if (“Notification” in window) {
  Notification.requestPermission(function (permission) {
    
    if (permission === ‘granted’) {
      var notification = new Notification(“Første notifikation”, {
           tag: ‘message1’, 
           body: “My body” 
      }); 
      notification.onshow  = function() { console.log(‘show’); };
      notification.onclose = function() { console.log(‘close’); };
      notification.onclick = function() { console.log(‘click’); };
    }
  });
}