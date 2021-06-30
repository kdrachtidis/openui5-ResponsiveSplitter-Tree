sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.Pane1", {
        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("DemoUXapp/content") + "/Tree.json");
            this.getView().setModel(oModel);
            //this.byId("Tree").expandToLevel(1);
        }
    });

    return Controller;
});