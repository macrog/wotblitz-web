wotblitzApp.factory("constFactory", function() {

	// Return public API.
    return({
        getWN8Desc: getWN8Desc,
        getAboutWebPage:getAboutWebPage
    });

    function getWN8Desc(){
        return `This website calculate World of Tanks players WN8 rating, 
                and assigns a different color according to the official WN8 
                specification at wnefficiency.net.
                You can see the table of expected tanks value used to calculate 
                your WN8 rating at this page. The current table version 
                WoTstats.org is now using is the v27.`;
    }
    function getAboutWebPage(){
        return `Welcome to World of Tanks - Blitz statistics web tracker. 
                You can track any player statistics and WN8 progress, 
                detailed tanks stats with changes over time.`;
    }
});