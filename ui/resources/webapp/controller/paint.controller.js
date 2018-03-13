sap.ui.define([
	"sap/ui/core/mvc/Controller",  "sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("ui.controller.paint", {


		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf App2.view.view.Master

		*/	
			onInit: function() {
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.getRoute("paint").attachPatternMatched(this._onObjectMatched, this);



       // var oTableNamedModel = this.byId("tableNamedModel");
       // oTableNamedModel.setModel(oModel, "model");
       // var oTable = this.byId("container");
        //oTable.setModel(oModel,"model2");
       
	//	var oList = this.byId("list");
	//	oList.setModel(oModel);
	//	 oList.bindElement("/paint_desc(2)");

			},
		_onObjectMatched: function (oEvent) {
	var oModel = new sap.ui.model.odata.ODataModel("/test.xsodata", true);  
this.getView().byId("list").setModel(oModel);
			this.getView().byId("list").bindElement({
				path: "/paint_desc("+oEvent.getParameter("arguments").invoicePath+")"  
 });

var oTileContainer = this.getView().byId("color"); 
oTileContainer.setModel(oModel);
var template = new sap.m.StandardTile({
	title:"{color_name}",
	press: function(){
	}
}).addStyleClass("tilesize");
oTileContainer.bindAggregation( "tiles","/view_color(IP_1="+oEvent.getParameter("arguments").invoicePath+")/Execute",template);
		},
		
		
			order: function() {
			var brandname = this.getView().byId("brandname").getValue();
			var type = this.getView().byId("type").getValue();
			var availability = this.getView().byId("availability").getValue();
			var durability = this.getView().byId("durability").getValue();
			var price = this.getView().byId("price").getValue();
			var image = this.getView().byId("image").getIcon();
			var pid = this.getView().byId("pid").getValue();
			var productname = this.getView().byId("pname").getValue();
            
            var payload = {};
            payload.pid =pid;
            payload.paintname = productname;
            payload.brandname = brandname;
            payload.type = type;
            payload.availability = availability;
            payload.durability = durability;
            payload.price = price;
            payload.image = image;
            var insertdata = JSON.stringify(payload);	
            $.ajax({
               type: "POST",
               url: "/xsjs/insertOrderList.xsjs",
               contentType: "application/json",
               data: insertdata,
               dataType: "json",
               crossDomain: true,
               success:function(){
               	alert("added to cart successfully");
               },
               error:function(){
				alert("ERROR");
               }
            });
		   
		   
		    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		   oRouter.navTo("order");
			},
			back: function(){
				var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("detail");
			}
			},
			cart: function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("order");
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