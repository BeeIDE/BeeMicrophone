function check_if_top_block_has_hat(block){
   if (block.getRootBlock().hat === 'cap') return true;
   else return false;
}

Blockly.Python['noise_sensor'] = function (block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeMic_import_BeeMic'] = 'from BeeMic import BeeMic';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['micSensor_BeeMic'] = `micSensor = BeeMic(bee.${port})`;
   var code = `micSensor.read()`;
   return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['noise_threshold'] = function (block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeMic_import_BeeMic'] = 'from BeeMic import BeeMic';

   var port = block.getFieldValue('port');
   var threshold = Blockly.Python.valueToCode(block, 'threshold', Blockly.Python.ORDER_ATOMIC);
   Blockly.Python.definitions_['micSensor_BeeMic'] = `micSensor = BeeMic(bee.${port})`;
   var code = `micSensor.threshold(${threshold})`;
   return [code, Blockly.Python.ORDER_NONE];
};