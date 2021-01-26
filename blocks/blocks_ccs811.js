Blockly.Blocks["ccs_begin"] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("ccs1", null, ["Plugin.CCS811"], ["Plugin.CCS811"]), "instance")
          .appendField("begin address")
          .appendField(new Blockly.FieldTextInput("0x5A"), "ADDR")
          .appendField("(SDA")
          .appendField(new Blockly.FieldTextInput("21"), "SDA")
          .appendField(", SCL")
          .appendField(new Blockly.FieldTextInput("22"), "SCL")
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks['ccs_get_co2'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("ccs1", null, ["Plugin.CCS811"], ["Plugin.CCS811"]), "instance")
          .appendField("read Co2");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks['ccs_read_data'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("ccs1", null, ["Plugin.CCS811"], ["Plugin.CCS811"]), "instance")
          .appendField("read Data");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks["ccs_read_data"] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("ccs1", null, ["Plugin.CCS811"], ["Plugin.CCS811"]), "instance")
          .appendField("Read Data")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
