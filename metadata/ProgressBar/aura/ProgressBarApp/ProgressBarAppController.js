({
	increment10_p1 : function(component, event, helper) {
        helper.sendMessage("Increment","pb1",10);
	},
    increment_10_p1 : function(component, event, helper) {
        helper.sendMessage("Decrement","pb1",10);
	},
    reset_p1 : function(component, event, helper) {
        helper.sendMessage("Reset","pb1");
	},
    fullfill_p1 : function(component, event, helper) {
        helper.sendMessage("FullFill","pb1");
	},
    increment10_p2 : function(component, event, helper) {
        helper.sendMessage("Increment","pb2",10);
	},
    increment_10_p2 : function(component, event, helper) {
        helper.sendMessage("Decrement","pb2",10);
	},
    reset_p2 : function(component, event, helper) {
        helper.sendMessage("Reset","pb2");
	},
    fullfill_p2 : function(component, event, helper) {
        helper.sendMessage("FullFill","pb2");
	},
    handleProgressBarEvent  : function(component, event, helper){
        var originName = event.getParam("name");
        var message =  event.getParam("message");
        component.set("v.message", message + " event for progress bar named '" + originName + "' at " + (new Date()).toLocaleString());
    },
})