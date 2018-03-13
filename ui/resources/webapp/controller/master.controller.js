sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("ui.controller.master", {
		onInit: function() {
   		window.Type_1 = [];
   		window.Type_1[0] = false;
   		window.Type_1[1] = false;
   		window.Type_1[2] = false;
   		window.Type_1[3] = false;
   		window.Type_1[4] = 0;
   		window.Type_1[5] = 1;
        
   		window.check = false;

		},
		handleInteriorSelect: function(oEvent){
			var checkInterior = this.byId("interior_check_id").getSelected();
			if(checkInterior==true){
			window.Type_1[0]= true;
			window.check= true;
            //var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		   //oRouter.navTo("interior_detail");
			}else{
					window.Type_1[0]= false;
			window.check= false;
			}
		
				//	this.getOwnerComponent().getRouter().navTo("detail1");
			
			
		},
		handleExteriorSelect: function(oEvent){
			var checkExterior = this.byId("exterior_check_id").getSelected();
             if(checkExterior==true){
             window.Type_1[1] = true;
             window.check= true;

		//	var oRouter= sap.ui.core.UIComponent.getRouterFor(this);
		//	oRouter.navTo("exterior_detail");
             }else{
					window.Type_1[1]= false;
			window.check= false;
			}
		},
			handleMetalSelect: function(oEvent){
			var checkMetal = this.byId("metal_check_id").getSelected();
			if(checkMetal==true){
			window.Type_1[2]= true;
			window.check= true;

			//var oRouter= sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.navTo("metal_detail");
			}else{
					window.Type_1[2]= false;
			window.check= false;
			}
		},
			handleWoodSelect: function(oEvent){
			var checkWood = this.byId("wood_check_id").getSelected();
			if(checkWood==true){
				window.Type_1[3]=true;
				window.check= true;

			//var oRouter= sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.navTo("wood_detail");
			}else{
					window.Type_1[3]= false;
			window.check= false;
			}
		},
		handleAsianSelect: function(oEvent){
			var checkAsian = this.byId("asian").getSelected();
			if(checkAsian==true){
			window.Type_1[4]=1;
			             window.check= true;

			}else{
				             window.check= false;

			}
		},
		handleBergerSelect: function(oEvent){
			var checkBerger = this.byId("berger").getSelected();
			if(checkBerger==true){
			window.Type_1[4]=2;
			 window.check= true;

			}else{
				             window.check= false;
			}
		},
		handleDuluxSelect: function(oEvent){
			var checkDulux = this.byId("dulux").getSelected();
			if(checkDulux==true){
			window.Type_1[4]=3;
			 window.check= true;

			}else{
				             window.check= false;
			}
		},
		handleNerolacSelect: function(oEvent){
			var checkNerolac = this.byId("nerolac").getSelected();
			if(checkNerolac==true){
			window.Type_1[4]=4;
			 window.check= true;

			}else{
               window.check= false;
			}
		},
         price: function(){
         	var returnedPrice = this.getView().byId("slider").getValue();
         	window.Type_1[5]=returnedPrice;
         },
			onsubmit: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		if(window.check=== true){

        	if(window.Type_1[0]=== true &&  window.Type_1[1]===true && window.Type_1[2]===true && window.Type_1[3]===true){
        
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=2,IP_3=3,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        
        	}
        	 if(window.Type_1[0]===true && window.Type_1[1]===false && window.Type_1[2]===false && window.Type_1[3]===false ){

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=1,IP_3=1,IP_4=1,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	}
        	 if(window.Type_1[0]===false && window.Type_1[1]===true && window.Type_1[2]===false && window.Type_1[3]===false ){
        	

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=2,IP_2=2,IP_3=2,IP_4=2,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        		
        	} if(window.Type_1[0]===false && window.Type_1[1]===false && window.Type_1[2]===true && window.Type_1[3]===false ){
        

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=3,IP_2=3,IP_3=3,IP_4=3,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	} if(window.Type_1[0]===false && window.Type_1[1]===false && window.Type_1[2]===false && window.Type_1[3]===true ){
        		
				oRouter.navTo("detail_view",{
					path:"(IP_1=4,IP_2=4,IP_3=4,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"
				});
        	} if(window.Type_1[0]===true && window.Type_1[1]===true && window.Type_1[2]===false && window.Type_1[3]===false ){
        	
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=2,IP_3=1,IP_4=2,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	} if(window.Type_1[0]===true && window.Type_1[1]===false && window.Type_1[2]===true && window.Type_1[3]===false ){
        		

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=3,IP_3=3,IP_4=1,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	} if(window.Type_1[0]===true && window.Type_1[1]===false && window.Type_1[2]===false && window.Type_1[3]===true ){
        

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=4,IP_3=1,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	} if(window.Type_1[0]===false && window.Type_1[1]===true && window.Type_1[2]===true && window.Type_1[3]===false ){
        

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=3,IP_2=2,IP_3=3,IP_4=2,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	} if(window.Type_1[0]===false && window.Type_1[1]===true && window.Type_1[2]===false && window.Type_1[3]===true ){
        	

        		oRouter.navTo("detail_view",{
        		path:"(IP_1=2,IP_2=4,IP_3=2,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	} if(window.Type_1[0]===false && window.Type_1[1]===false && window.Type_1[2]===true && window.Type_1[3]===true ){
        	
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=3,IP_2=4,IP_3=3,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	}if(window.Type_1[0]===true && window.Type_1[1]===true && window.Type_1[2]===true && window.Type_1[3]===false ){
        	
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=2,IP_3=3,IP_4=2,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	}if(window.Type_1[0]===true && window.Type_1[1]=== true && window.Type_1[2]===false && window.Type_1[3]===true ){
        	
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=2,IP_3=4,IP_4=2,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	}if(window.Type_1[0]===true && window.Type_1[1]===false && window.Type_1[2]===true && window.Type_1[3]===true ){
        	
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=1,IP_2=4,IP_3=3,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	}if(window.Type_1[0]===false && window.Type_1[1]===true && window.Type_1[2]===true && window.Type_1[3]===true ){
        	
        		oRouter.navTo("detail_view",{
        		path:"(IP_1=3,IP_2=4,IP_3=2,IP_4=4,IP_5="+window.Type_1[4]+",IP_6="+window.Type_1[5]+")"	
        		});
        	}
			}
			}	
	});
});
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf App2.view.view.Master
		 */
		//	onInit: function() {
			

			
				//paint type checkid
			//	var interior_chck = this.getView().byId("interior_check_id").getSelected();
			//	var exterior_chck = this.getView().byId("exterior_check_id").getSelected();
			//	var metal_chck = this.getView().byId("metal_check_id").getSelected();
			//	var wood_chck = this.getView().byId("wood_check_id").getSelected();
                //paint company
              //  var asian_chck = this.getView().byId("asian_check_id").getSelected();
               // var bereger_chck = this.getView().byId("exterior_check_id").getSelected();
               // var dulux_chck = this.getView().byId("dulux_check_id").getSelected();

		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf App2.view.view.Master
		 */
	

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf App2.view.view.Master
		 */
		

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf App2.view.view.Master
		 */
		//	onExit: function() {
		//
		//	}

