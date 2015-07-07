/* Author: Enrico Murru (http://enree.co) 
 *	Source: https://github.com/enreeco/lightning-progressbar
 */
({
    onInit : function(component, event, helper) {
        $("[id='"+component.getGlobalId()+"_progbar']")
        .progressbar({
            display_text: 'center',
            transition_delay: component.get('v.transitionDelay'),
            refresh_speed: component.get('v.refreshSpeed'),
            display_text: component.get('v.displayText'),
            use_percentage: component.get('v.usePercentage'),
            done : function(cmp){
                $A.run(function(){
                    if(component.get("v.value") >= component.get("v.valueMax")){
                        var evt = $A.get("e.c:ProgressBarMessageEvt");
                        evt.setParams({
                            name: component.get("v.name"),
                            message: "MaximumReached",
                            value: component.get("v.value")
                        });
                        evt.fire();
                    }
                    if(component.get("v.value") <= component.get("v.valueMin")){
                        var evt = $A.get("e.c:ProgressBarMessageEvt");
                        evt.setParams({
                            name: component.get("v.name"),
                            message: "MinimumReached",
                            value: component.get("v.value")
                        });
                        evt.fire();
                    }
                });
            }
        });
    },
    /*
     * Handles action events
     */
    handleEvent : function(component, event, helper){
        var targetName = event.getParam("name");
        if(targetName !== component.get("v.name")) return;
        var targetIncrement = event.getParam("value");
        var action = event.getParam("action");
        var value = component.get("v.value");
        if(action === 'Decrement') value -= targetIncrement;
        else if(action === 'Increment') value += targetIncrement;
        else if(action === 'FullFill') value = component.get("v.valueMax");
        else if(action === 'Reset') value = component.get("v.valueMin");
        else if(action === 'SetValue') value = targetIncrement;

        var pb = $("[id='"+component.getGlobalId()+"_progbar']");

        if(value < component.get("v.valueMin")){
            value = component.get("v.valueMin");
        }
        else if(value >= component.get("v.valueMax")){
            value = component.get("v.valueMax");
        }
        component.set("v.value",value);
        pb.attr("data-transitiongoal",value).progressbar();
        
    },
})