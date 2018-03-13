sap.ui.jsview("ui.view.paint_view", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.App
	 */
	getControllerName: function() {
		return "ui.controller.paint_view";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.App
	 */
	
createContent: function(oController) {
 var oModel = new sap.ui.model.odata.ODataModel("/test.xsodata", true);
 var oTable = new sap.ui.table.Table({ title: "{paint_name}"});
 oTable.addColumn(new sap.ui.table.Column());
 oTable.addColumn(new sap.ui.table.Column());

 //oTable.addColumn(new sap.ui.table.Column({ label: "NAME", template: "surface_type" })); 
 oTable.setModel(oModel);
 oTable.bindElement("/paint_desc(2)");


//myTable.bindItems({

//path: "/Paint_View",

///parameters: {

//select: "surface_id,surface_type"

//},

//template: tableTemplate

//});

       

   var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [oTable]
		});
		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});