Blockly.JavaScript["ccs_begin"] = function (block) {
  var text_addr = block.getFieldValue('ADDR');
  var text_sda = block.getFieldValue('SDA');
  var text_scl = block.getFieldValue('SCL');
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =
`
#EXTINC
#include "Adafruit_CCS811.h" 
#END

#VARIABLE
Adafruit_CCS811 ${variable_instance};
#END

if (!${variable_instance}.begin()) {
  Serial.println("Could not find a valid CCS811 sensor, check wiring!");
  while (1);
}

\n
`;
  return code;
};



Blockly.JavaScript['ccs_get_co2'] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code=`${variable_instance}.geteCO2()\n`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript["ccs_read_data"] = function (block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code=`${variable_instance}.readData();\n`;
  return code;
};