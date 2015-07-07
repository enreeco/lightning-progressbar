/* Author: Enrico Murru (http://enree.co) 
 *	Source: https://github.com/enreeco/lightning-progressbar
 */
({
	sendMessage : function(message,name,value) {
		var incrementEvt = $A.get("e.c:ProgressBarActionEvt");
        incrementEvt.setParams({
            name: name,
            value: value,
            action: message
        });
        incrementEvt.fire();
	}
})