function openBrowser(url){
	//var url = 'https://cordova.apache.org';
	var target = '_blank';
	var options = "location = yes"
	var ref = cordova.InAppBrowser.open(url, target, options);
}
function App(){
	window.open('https://affald.000webhostapp.com/index.html');
}
function onDeviceReady(){
	app.receivedEvent('deviceready');
	if(PushbotsPlugin.isAndroid){
		PushbotsPlugin.initializeAndroid("5ced1fe70540a303df34e263", "119545800858")
}