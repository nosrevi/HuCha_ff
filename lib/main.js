var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = ToggleButton({
  id: "hucha",
  label: "HuCha - Hupu Extension",
  icon: {
    "16": "./icon.png",
    "32": "./icon.png",
    "64": "./icon.png"
  },
  onClick: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
