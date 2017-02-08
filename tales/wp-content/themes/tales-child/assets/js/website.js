/*!
 *
 *  Copyright (c) David Bushell | @dbushell | http://dbushell.com/
 *
 */
(function(window, document, undefined)
{

$(document).ready(function()
{
    var doc = $(document.documentElement);

    var grid = false;

    var addGrid = function()
    {
        grid = true;

        doc.append($(" \
<style type='text/css'>\
.js--grid .main { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAE0lEQVR4AWMYNmAU/GdgMEPCDAAvZgSfS9S3ewAAAABJRU5ErkJggg=='); }\
.grid { display: none; pointer-events: none; position: absolute; position: fixed; top: 0; left: 5%; right: 5%; margin: 0 auto; max-width: 70em; }\
.js--grid .grid { z-index: 99999; display: block; bottom: 0; }\
@media screen and (max-width: 39.9375em) { .grid { left: 1.75em; right: 1.75em; } }\
.grid__s { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }\
.grid__c { position: absolute; top: 0; left: 0; bottom: 0; background: rgba(255, 255, 0, 0.2); width: 14.2361111111%; }\
.grid__s--6 .grid__c--2 { left: 17.1527777778%; }\
.grid__s--6 .grid__c--3 { left: 34.3055555556%; }\
.grid__s--6 .grid__c--4 { left: 51.4583333333%; }\
.grid__s--6 .grid__c--5 { left: 68.6111111111%; }\
.grid__s--6 .grid__c--6 { left: 85.7638888889%; }\
.grid__s--9 .grid__c { width: 8.5185185185%; background: none; border-left: 1px dashed #e54545; border-right: 1px dashed #e54545; }\
.grid__s--9 .grid__c--2 { left: 11.4351851852%; }\
.grid__s--9 .grid__c--3 { left: 22.8703703704%; }\
.grid__s--9 .grid__c--4 { left: 34.3055555556%; }\
.grid__s--9 .grid__c--5 { left: 45.7407407407%; }\
.grid__s--9 .grid__c--6 { left: 57.1759259259%; }\
.grid__s--9 .grid__c--7 { left: 68.6111111111%; }\
.grid__s--9 .grid__c--8 { left: 80.0462962963%; }\
.grid__s--9 .grid__c--9 { left: 91.4814814815%; }\
</style>\
<div class='grid'> \
    <div class='grid__s grid__s--6'> \
        <div class='grid__c grid__c--1'></div> \
        <div class='grid__c grid__c--2'></div> \
        <div class='grid__c grid__c--3'></div> \
        <div class='grid__c grid__c--4'></div> \
        <div class='grid__c grid__c--5'></div> \
        <div class='grid__c grid__c--6'></div> \
    </div> \
</div> \
<div class='grid'> \
    <div class='grid__s grid__s--9'> \
        <div class='grid__c grid__c--1'></div> \
        <div class='grid__c grid__c--2'></div> \
        <div class='grid__c grid__c--3'></div> \
        <div class='grid__c grid__c--4'></div> \
        <div class='grid__c grid__c--5'></div> \
        <div class='grid__c grid__c--6'></div> \
        <div class='grid__c grid__c--7'></div> \
        <div class='grid__c grid__c--8'></div> \
        <div class='grid__c grid__c--9'></div> \
    </div> \
</div>"));

    };

    $(window).on('keypress', function(e)
    {
        // if ((e.which || e.keyCode) === 103) {
        //     if (!grid) {
        //         addGrid();
        //     }
        //     doc.toggleClass('js--grid');
        // }
    });

});

})(window, window.document);

