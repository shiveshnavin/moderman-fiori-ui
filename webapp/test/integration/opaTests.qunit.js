sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'moderman/modermanadmin/test/integration/FirstJourney',
		'moderman/modermanadmin/test/integration/pages/ContentItemList',
		'moderman/modermanadmin/test/integration/pages/ContentItemObjectPage',
		'moderman/modermanadmin/test/integration/pages/ContentItemActionObjectPage'
    ],
    function(JourneyRunner, opaJourney, ContentItemList, ContentItemObjectPage, ContentItemActionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('moderman/modermanadmin') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheContentItemList: ContentItemList,
					onTheContentItemObjectPage: ContentItemObjectPage,
					onTheContentItemActionObjectPage: ContentItemActionObjectPage
                }
            },
            opaJourney.run
        );
    }
);