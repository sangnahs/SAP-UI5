sap.ui.define([
		"paint/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("surface_id").length, 1, "The sorting by surface_id returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("surface_type").length, 1, "The sorting by surface_type returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("surface_id").length, 1, "The group by surface_id returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to surface_id if the user groupes by surface_id", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("surface_id");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "surface_id", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by surface_type and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "surface_id");

		this.oGroupSortState.sort("surface_type");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});