$(window).load(function() {
	//function for text based reporting
	$(".monitor").each(function(){
		var elem = this
		var pv = $(this).data("pv");
		//var ws = new WebSocket("ws://localhost:8888/monitor");
		var ws = new WebSocket("ws://10.6.100.199:8888/monitor");
		ws.onopen = function() {
			ws.send(pv);
		};
		ws.onmessage = function(evt) {
			var data = JSON.parse(evt.data);
			if (data.msg_type === "monitor") {
			$(elem).text(data.value);

 				//Pass along severity in color form
				if (data.severity === 0){
					$(elem).css("color","#4cff4c");
				}else if  (data.severity === 1){
					$(elem).css("color","yellow");
				}else if (data.severity === 2){
					$(elem).css("color","red");
				}
			}
			if (data.msg_type === "connection") {
				//If communication is lost overwrite color of pv to white (as is the way of EPICs)
				if (data.conn===false){
					$(elem).css("color", "white");
				}
			}
		};
	});
	$(".statusMon").each(function(){
		var elem = this
		var pv = $(this).data("pv");
		//var ws = new WebSocket("ws://localhost:8888/monitor");
		var ws = new WebSocket("ws://10.6.100.199:8888/monitor");
		ws.onopen = function() {
			ws.send(pv);
		};
		ws.onmessage = function(evt) {
			var data = JSON.parse(evt.data);
			if (data.msg_type === "monitor") {
				var data = JSON.parse(evt.data);
				if (data.severity === 0){
					$(elem).css("background-color","#4cff4c");
					$(elem).css("color","black");
				}else if  (data.severity === 1){
					$(elem).css("background-color","yellow");
					$(elem).css("color","black");
				}else if (data.severity === 2){
					$(elem).css("background-color","red");
					$(elem).css("color","black");
				}
				//Overwrite this if the PV is unique and doesn't follow the usual color conventions
				if (data.pvname == "SR02IR01MIR01:POSITION_STATUS"){
					if (data.severity === 0){
						$(elem).css("background-color","red");
						$(elem).css("color","black");
					}
				}
			}else if (data.msg_type === "connection"){		
				//If communication is lost overwrite color of pv to white (as is the way of EPICs)
				if (data.conn===false){
					$(elem).css("color", "white");
				}
			}
		};
	});
});
