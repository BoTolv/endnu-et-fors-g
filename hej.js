function openBrowser(url){
	//var url = 'https://cordova.apache.org';
	var target = '_blank';
	var options = "location = yes"
	var ref = cordova.InAppBrowser.open(url, target, options);
}
function Hej(){
	window.open('https://affald.000webhostapp.com/index.html');
}