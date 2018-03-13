jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Paint_View in the list

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
		"paint/test/integration/MasterJourney",
		"paint/test/integration/NavigationJourney",
		"paint/test/integration/NotFoundJourney",
		"paint/test/integration/BusyJourney",
		"paint/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});