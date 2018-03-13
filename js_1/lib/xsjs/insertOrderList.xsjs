function orderList(order) {
   var conn = $.hdb.getConnection();
   var output = JSON.stringify(order);
   var fnCreateOrderList = conn.loadProcedure("App.db.procedure::orderList");
   var result = fnCreateOrderList({PID: order.pid, 
   PAINT_NAME: order.paintname, 
   BRAND_NAME: order.brandname, 
   P_TYPE:order.ptype, 
   AVAILABLE:order.available, 
   DURABILITY:order.durability,
   PRICE:order.price, 
   IMAGE:order.image});
   
   conn.commit();
   conn.close();
   if (result && result.EX_ERROR != null) { 
   	return {body : result,
      status: $.net.http.BAD_REQUEST};

   } else {
      return {body : output,
      status: $.net.http.CREATED};
}
}
var order = {
   pid: $.request.parameters.get("pid"),
   paintname: $.request.parameters.get("paintname"),
   brandname: $.request.parameters.get("brandname"),
   ptype: $.request.parameters.get("ptype"),
   availabel: $.request.parameters.get("availabel"),
   durability: $.request.parameters.get("durability"),
   price: $.request.parameters.get("price"),
   image: $.request.parameters.get("image")

};
var body = $.request.body.asString();
var order = JSON.parse(body);
// validate the inputs here!

var output = orderList(order);

$.response.contentType = "application/json";
$.response.setBody(output.body);
$.response.status = output.status;