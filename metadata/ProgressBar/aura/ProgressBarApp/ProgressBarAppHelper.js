({
	sendMessage : function(message,name,value) {
		$A.get("e.c:ProgressBarActionEvt").setParams({
            name: name,
            value: value,
            action: message
        }).fire();
	}
})