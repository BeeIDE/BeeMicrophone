Blockly.defineBlocksWithJsonArray([
  // -> ColorSensor
  {
    "type": "noise_sensor",
    "message0": "%2 %1 get sound",
    "args0": [
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["", ""],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/mic.png",
        "width": 45,
        "height": 45,
        "alt": "mic"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#0050a1",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "noise_threshold",
    "message0": "%3 %2 if sound > %1 %?",
    "args0": [
      {
        "type": "input_value",
        "name": "threshold",
        "check": "Number",
      },
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["", ""],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/mic.png",
        "width": 45,
        "height": 45,
        "alt": "mic"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "#0050a1",
    "tooltip": "",
    "helpUrl": ""
  },
]);