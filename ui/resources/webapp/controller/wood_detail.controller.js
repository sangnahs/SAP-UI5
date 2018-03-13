sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("ui.controller.wood_detail", {


		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf App2.view.view.Master
		 */
			onInit: function() {
        var oModel = new sap.ui.model.odata.ODataModel("/test.xsodata", true);  
       // var oTableNamedModel = this.byId("tableNamedModel");
       // oTableNamedModel.setModel(oModel, "model");
        var oTile = this.byId("container");
        oTile.setModel(oModel,"model2");
			},
          onpress: function(oEvent){
	    var selectedPage = oEvent.getSource().getBindingContext("model2").getProperty("p_id");
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		   oRouter.navTo("paint",{				
		   invoicePath: selectedPage});
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