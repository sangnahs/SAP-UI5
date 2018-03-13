sap.ui.jsview("ui.view.detail3", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.App
	 */
	getControllerName: function() {
		return "ui.controller.detail3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.App
	 */
	
	createContent: function(oController) {
		

 var oModel = new sap.ui.model.odata.ODataModel("/test.xsodata", true);
 var oTable = new sap.ui.table.Table({ title: "MY TABLE" });
 //oTable.addColumn(new sap.ui.table.Column({ label: "ID", template: "surface_id" }));
 //oTable.addColumn(new sap.ui.table.Column({ label: "NAME", template: "surface_type" })); 
 oTable.setModel(oModel);     
// oTable.bindRows("/Paint_View"); 


//myTable.bindItems({

//path: "/Paint_View",

///parameters: {

//select: "surface_id,surface_type"

//},

//template: tableTemplate

//});

       

   var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: []
		});
		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});