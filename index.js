var self = require('sdk/self');
var tabs = require('sdk/tabs');
// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js

//function dummy(text, callback) {
//  callback(text);
//}

//exports.dummy = dummy;

var tabList = [];

require("sdk/ui/button/action").ActionButton({
  id: "list-tabs",
  label: "List Tabs",
  icon: "./icon-16.png",
  onClick: listTabs
});

function listTabs() {
  var tabs = require("sdk/tabs");
  for (let tab of tabs)
    console.log(tab.url);
}
