sap.ui.define([
	"sap/ui/core/mvc/Controller","sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("ui.controller.detail_view", {
			onInit: function(){
			
        	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           	oRouter.getRoute("detail_view").attachPatternMatched(this._onObjectMatched, this);
			},
			
				_onObjectMatched: function (oEvent) {
	           var oModel = new sap.ui.model.odata.ODataModel("/test.xsodata", true);
	           var oTileContainer = this.getView().byId("tileContainer"); 
				oTileContainer.setModel(oModel);
var oRouter1 = sap.ui.core.UIComponent.getRouterFor(this);

var oTileTemplate = new sap.m.StandardTile({
  title:"{paint_name}",
     icon: "{image}",
    
     press: function(oEvent1){
     	          var selectedPage = oEvent1.getSource().getBindingContext().getProperty("p_id");
     	          oRouter1.navTo("paint",{				
		   invoicePath: selectedPage});

     }
});
oTileContainer.bindAggregation("tiles", "/view_InputParams"+ oEvent.getParameter("arguments").path +"/Execute", oTileTemplate);

			    //	path:"/view_InputParams(IP_1=4,IP_2=4,IP_3=4,IP_4=4)/Execute"
			//	path: "/view_InputParams("+oEvent.getParameter("arguments").path+"/Execute)"  
 
			
			
				},

          onPressDetailBack: function(){
          	var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("detail");
			}
		}
		
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf App2.view.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf App2.view.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf App2.view.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});