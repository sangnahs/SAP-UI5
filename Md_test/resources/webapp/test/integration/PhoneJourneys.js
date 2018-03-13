jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"paint/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"paint/test/integration/pages/App",
	"paint/test/integration/pages/Browser",
	"paint/test/integration/pages/Master",
	"paint/test/integration/pages/Detail",
	"paint/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "paint.view."
	});

	sap.ui.require([
		"paint/test/integration/NavigationJourneyPhone",
		"paint/test/integration/NotFoundJourneyPhone",
		"paint/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});