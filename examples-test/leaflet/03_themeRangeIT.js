var commonTools = require('../base/commonTools');
module.exports = {
    'leaflet_03_themeRange': function (browser) {
        var type = 'leaflet';
        var exampleName = '03_themeRange';
        commonTools.openExampleAndLoadMap(browser, type, exampleName);
        //commonTools.getStdTile(browser, type, exampleName, 0, 0, 128, 128);
        //测试过程中截取地图瓦片, 和已有的标准瓦片进行对比
        commonTools.cmpTestTileWithStdTile(browser, type, exampleName, 0, 0, 128, 128);
        browser.end();
    }
};