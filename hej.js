function openBrowser(url){
	//var url = 'https://cordova.apache.org';
	var target = '_blank';
	var options = "location = yes"
	var ref = cordova.InAppBrowser.open(url, target, options);
}