sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'moderman.modermanadmin',
            componentId: 'ContentItemActionObjectPage',
            entitySet: 'ContentItemAction'
        },
        CustomPageDefinitions
    );
});