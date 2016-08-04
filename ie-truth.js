function IeVersion() {
    //Set defaults
    var value = {
		IsIE: false,
		IsEdge: false,
		EdgeHtmlVersion: 0,
		TrueVersion: 0,
		ActingVersion: 0,
		CompatibilityMode: false
	};

	//Try to find the Trident version number
	var trident = navigator.userAgent.match(/Trident\/(\d+)/);
	if (trident) {
		value.IsIE = true;
		//Convert from the Trident version number to the IE version number
		value.TrueVersion = parseInt(trident[1], 10) + 4;
	}

	//Try to find the MSIE number
	var msie = navigator.userAgent.match(/MSIE (\d+)/);
	if (msie) {
	    value.IsIE = true;
        	//Find the IE version number from the user agent string
		value.ActingVersion = parseInt(msie[1]);
	} else {
		//Must be IE 11 in "edge" mode
		value.ActingVersion = value.TrueVersion;
	}

	//If we have both a Trident and MSIE version number, see if they're different
	if (value.IsIE && value.TrueVersion > 0 && value.ActingVersion > 0) {
		//In compatibility mode if the trident number doesn't match up with the MSIE number
		value.CompatibilityMode = value.TrueVersion != value.ActingVersion;
	}
	
	//Try to find Edge and the EdgeHTML vesion number
	var edge = navigator.userAgent.match(/Edge\/(\d+\.\d+)$/);
	if (edge)
	{
		value.IsEdge = true;
		value.EdgeHtmlVersion = edge[1];
	}
	return value;
}
