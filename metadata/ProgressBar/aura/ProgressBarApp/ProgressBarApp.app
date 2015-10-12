<!-- Author: Enrico Murru (http://enree.co) 
    Source: https://github.com/enreeco/lightning-progressbar
-->
<aura:application>
    <aura:handler event="c:ProgressBarMessageEvt" 
                  action="{!c.handleProgressBarEvent}" />
    <ltng:require styles="/resource/BootstrapSF1/bootstrap320/css/bootstrap.min.css"/>
    <aura:attribute name="message" type="String" />

    <div class="page-header">
        <h1>Lightning Progress Bar <small>AWESOME INC.</small>  </h1>
    </div>
    
    <div class="content well">
        <c:ProgressBar barContainerClass="progress-striped active" 
                                 barClass="progress-bar-success" name="pb1" value="25" transitionDelay="10" displayText="center" usePercentage="false" valueMin="20" valueMax="110"/>
        
        <ui:button label="Reset" press="{!c.reset_p1}" />
        <ui:button label="Increment -10" press="{!c.increment_10_p1}" />
        <ui:button label="Increment +10" press="{!c.increment10_p1}" />
        <ui:button label="Full fill" press="{!c.fullfill_p1}" />
    </div>
    <div class="content well">
        <c:ProgressBar barContainerClass="" barClass="progress-bar-danger" name="pb2" value="70"
                       transitionDelay="500" displayText="fill" usePercentage="true"/>

        <ui:button label="Reset" press="{!c.reset_p2}" />
        <ui:button label="Increment -10" press="{!c.increment_10_p2}" />
        <ui:button label="Increment +10" press="{!c.increment10_p2}" />
        <ui:button label="Full fill" press="{!c.fullfill_p2}" />
    </div>
    
    <div aura:id="msg">{!v.message}</div>

</aura:application>