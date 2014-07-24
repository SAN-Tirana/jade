// to save ajax bandwith, preload the shared libraries

new jade.model.Library('analog',{
    "capacitor":{"properties":{"tool_tip":{"edit":"no","type":"string","value":"Capacitor","label":"Tool tip"},"c":{"edit":"yes","type":"string","value":"1","label":"Capacitance (F)"},"name":{"edit":"yes","type":"string","value":"","label":"Name"}},"icon":[["terminal",[0,0,1],{"name":"n1"}],["terminal",[0,48,3],{"name":"n2"}],["line",[0,8,0,0,14]],["line",[-8,22,0,16,0]],["line",[-8,26,0,16,0]],["line",[0,26,0,0,14]],["property",[9,24,0],{"format":"{c}F"}],["property",[-9,24,0],{"align":"center-right","format":"{name}"}]]},
    "diode":{"properties":{"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"Diode","label":"Tool tip"},"type":{"edit":"yes","choices":["normal","ideal"],"type":"menu","value":"normal","label":"Type"},"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"},"area":{"edit":"yes","choices":[""],"type":"string","value":"1","label":"Area"}},"icon":[["terminal",[0,0,1],{"name":"anode"}],["terminal",[0,48,5],{"name":"cathode"}],["line",[0,8,1,8,0]],["line",[-8,16,0,16,0]],["line",[8,16,0,-8,16]],["line",[0,32,0,-8,-16]],["line",[-8,32,0,16,0]],["line",[0,40,0,0,-8]],["property",[8,24,0],{"format":"{area}"}],["property",[-8,24,0],{"align":"center-right","format":"{name}"}]]},
    "i_probe":{"properties":{"color":{"edit":"yes","choices":["red","green","blue","cyan","magenta","yellow","black"],"type":"menu","value":"red","label":"Plot color"},"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"Current probe","label":"Tool tip"},"offset":{"edit":"yes","choices":[""],"type":"string","value":"0","label":"Offset"}},"icon":[["terminal",[0,0,0],{"name":"nplus"}],["terminal",[16,0,4],{"name":"nminus"}],["line",[10,0,0,-4,-4]],["line",[10,0,6,-4,-4]]]},
    "i_source":{"properties":{"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"Current source","label":"Tool tip"},"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"},"value":{"edit":"yes","choices":[""],"type":"string","value":"dc(1)","label":"Value"}},"icon":[["terminal",[0,0,1],{"name":"nplus"}],["terminal",[0,48,3],{"name":"nminus"}],["line",[0,8,0,0,4]],["circle",[0,24,0,12,0]],["line",[0,36,0,0,4]],["property",[14,24,0],{"format":"{value}"}],["property",[-14,24,0],{"align":"center-right","format":"{name}"}],["line",[0,16,0,0,16]],["line",[0,32,0,3,-6]],["line",[0,32,0,-3,-6]]]},
    "inductor":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"},"l":{"edit":"yes","choices":[""],"type":"string","value":"1","label":"Inductance (H)"},"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"Inductor","label":"Tool tip"}},"icon":[["terminal",[0,0,7],{"name":"n1"}],["terminal",[0,48,3],{"name":"n2"}],["line",[0,14,0,0,-6]],["line",[0,34,0,0,6]],["arc",[-3,28,0,3,6,3,-2]],["arc",[0,14,0,-3,6,0,8]],["property",[8,24,0],{"format":"{l}H"}],["property",[-6,24,0],{"align":"center-right","format":"{name}"}],["arc",[-3,20,0,0,8,7,2]]]},
    "initial_voltage":{"properties":{"tool_tip":{"edit":"yes","choices":[""],"type":"string","value":"Initial voltage","label":"Tool tip"},"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"},"IV":{"edit":"yes","choices":[""],"type":"string","value":"0","label":"Initial voltage"}},"test":[["test",""]],"icon":[["terminal",[0,0,3],{"name":"node"}],["property",[0,-16,0],{"align":"center","format":"IV={IV}"}],["line",[-16,-8,0,32,0]],["line",[16,-8,0,0,-16]],["line",[16,-24,0,-32,0]],["line",[-16,-24,0,0,16]],["property",[0,-26,0],{"align":"bottom-center","format":"{name}"}]]},
    "nfet":{"properties":{"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"N-Channel mosfet","label":"Tool tip"},"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"},"W":{"edit":"yes","choices":[""],"type":"string","value":"2","label":"Scaled width"},"L":{"edit":"yes","choices":[""],"type":"string","value":"1","label":"Scaled length"}},"icon":[["terminal",[0,0,1],{"name":"D"}],["terminal",[0,32,3],{"name":"S"}],["terminal",[-24,16,0],{"name":"G"}],["line",[0,8,0,-8,0]],["line",[-8,8,0,0,16]],["line",[-8,24,0,8,0]],["line",[-11,8,0,0,16]],["property",[0,16,0],{"format":"{W}/{L}"}],["line",[-16,16,0,5,0]]]},
    "opamp":{"properties":{"A":{"edit":"yes","choices":[""],"type":"string","value":"30000","label":"Gain"},"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"Op Amp","label":"Tool tip"},"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"icon":[["terminal",[0,0,0],{"name":"nplus"}],["terminal",[0,16,0],{"name":"nminus"}],["terminal",[48,8,4],{"name":"output"}],["terminal",[24,24,3],{"name":"gnd"}],["line",[8,-8,0,0,32]],["line",[8,24,0,32,-16]],["line",[40,8,0,-32,-16]],["line",[10,0,0,6,0]],["line",[13,-3,0,0,6]],["line",[10,16,0,6,0]],["text",[27,16,0],{"text":"gnd","align":"top-left","font":"5pt sans-serif"}],["property",[27,0,0],{"align":"bottom-left","format":"{name}"}]]},
    "pfet":{"properties":{"tool_tip":{"edit":"no","choices":[""],"type":"string","value":"P-Channel mosfet","label":"Tool tip"},"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"},"W":{"edit":"yes","choices":[""],"type":"string","value":"2","label":"Scaled width"},"L":{"edit":"yes","choices":[""],"type":"string","value":"1","label":"Scaled length"}},"icon":[["terminal",[0,0,1],{"name":"D"}],["terminal",[0,32,3],{"name":"S"}],["terminal",[-24,16,0],{"name":"G"}],["line",[0,8,0,-8,0]],["line",[-8,8,0,0,16]],["line",[-8,24,0,8,0]],["line",[-11,8,0,0,16]],["property",[0,16,0],{"format":"{W}/{L}"}],["circle",[-14,16,0,2]]]},
    "resistor":{"properties":{"tool_tip":{"edit":"no","type":"string","value":"Resistor","label":"Tool tip"},"r":{"edit":"yes","type":"string","value":"1","label":"Resistance (Ω)"},"name":{"edit":"yes","type":"string","value":"","label":"Name"}},"icon":[["terminal",[0,0,1],{"name":"n1"}],["terminal",[0,48,3],{"name":"n2"}],["line",[0,8,0,0,4]],["line",[0,12,0,4,2]],["line",[4,14,0,-8,4]],["line",[-4,18,0,8,4]],["line",[4,22,0,-8,4]],["line",[-4,26,0,8,4]],["line",[4,30,0,-8,4]],["line",[-4,34,0,4,2]],["line",[0,36,0,0,4]],["property",[5,24,0],{"format":"{r}Ω"}],["property",[-5,24,0],{"align":"center-right","format":"{name}"}]]},
    "v_probe":{"properties":{"color":{"edit":"yes","choices":["red","green","blue","cyan","magenta","yellow","black","x-axis"],"type":"menu","value":"red","label":"Plot color"},"tool_tip":{"edit":"no","type":"string","value":"Voltage probe","label":"Tool tip"},"offset":{"edit":"yes","type":"string","value":"0","label":"Plot offset"}},"icon":[["terminal",[0,0,0],{"line":"no","name":"probe"}],["line",[0,0,0,4,-4]],["line",[2,-6,0,4,4]],["line",[2,-6,0,15,-15]],["line",[6,-2,0,15,-15]],["line",[17,-21,0,4,4]],["arc",[19,-19,0,11,-2,5,-3]]]},
    "v_source":{"properties":{"tool_tip":{"edit":"no","type":"string","value":"Voltage source","label":"Tool tip"},"name":{"edit":"yes","type":"string","value":"","label":"Name"},"value":{"edit":"yes","type":"string","value":"dc(1)","label":"Value"}},"icon":[["terminal",[0,0,1],{"name":"nplus"}],["terminal",[0,48,3],{"name":"nminus"}],["line",[0,8,0,0,4]],["circle",[0,24,0,12,0]],["line",[0,36,0,0,4]],["line",[0,15,0,0,6]],["line",[-3,18,0,6,0]],["line",[-3,30,0,6,0]],["property",[14,24,0],{"format":"{value}"}],["property",[-14,24,0],{"align":"center-right","format":"{name}"}]]}
});
jade.model.libraries.analog.read_only = true;

new jade.model.Library('gates',{"xor2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 L\n01 H\n10 H\n11 L\n\n.plot A B\n.plot Z\n"]],"schematic":[["analog:pfet",[0,-32,0],{"W":"16"}],["analog:pfet",[0,-64,0],{"W":"16"}],["analog:nfet",[0,0,0],{"W":"4"}],["analog:nfet",[0,32,0],{"W":"4"}],["ground",[24,64,0]],["analog:pfet",[48,-64,0],{"W":"16"}],["gates:nor2",[-96,24,0]],["port",[-96,24,0],{"signal":"A"}],["port",[-96,40,0],{"signal":"B"}],["wire",[-96,40,0,0,8]],["wire",[-96,48,0,72,0]],["wire",[24,48,0,0,-96]],["wire",[-96,24,0,0,-8]],["wire",[-96,16,0,72,0]],["wire",[-96,16,0,0,-64]],["wire",[-96,-48,0,72,0]],["wire",[-48,32,0,0,-48]],["wire",[-48,-16,0,24,0]],["vdd",[24,-64,0]],["wire",[0,-64,0,24,0]],["wire",[-24,48,0,48,0]],["wire",[0,-32,0,48,0]],["wire",[24,-64,0,24,0]],["wire",[64,64,0,0,-32]],["wire",[0,64,0,24,0]],["wire",[0,0,0,64,0]],["wire",[24,64,0,40,0]],["port",[64,0,4],{"signal":"Z"}],["wire",[-48,32,0,0,56]],["wire",[-48,88,0,88,0]],["wire",[40,88,0,0,-72]],["analog:nfet",[64,0,0],{"W":"4"}]],"icon":[["terminal",[0,0,0],{"line":"no","name":"A"}],["terminal",[0,16,0],{"line":"no","name":"B"}],["terminal",[48,8,4],{"name":"Z"}],["line",[8,20,0,8,0]],["line",[8,-4,0,8,0]],["arc",[16,-4,0,20,12,18,9]],["arc",[16,20,6,20,12,18,9]],["arc",[8,-4,0,0,24,3,12]],["property",[32,14,0],{"align":"top-left","format":"{name}"}],["arc",[5,-4,0,0,24,3,12]],["line",[0,0,0,7,0]],["line",[0,16,0,7,0]],["line",[40,8,0,-4,0]]]},"nor2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 H\n01 L\n10 L\n11 L\n\n.plot A B\n.plot Z\n"]],"schematic":[["analog:pfet",[8,-32,0],{"W":"16"}],["analog:pfet",[8,-64,0],{"W":"16"}],["port",[-16,-16,0],{"signal":"A"}],["port",[-16,-48,0],{"signal":"B"}],["port",[56,0,4],{"signal":"Z"}],["analog:nfet",[8,0,0],{"W":"4"}],["wire",[-16,-16,0,0,32]],["vdd",[8,-64,0]],["ground",[32,32,0]],["analog:nfet",[56,0,0],{"W":"4"}],["wire",[8,32,0,24,0]],["wire",[56,32,0,-24,0]],["wire",[32,16,0,0,-64]],["wire",[32,-48,0,-48,0]],["wire",[8,0,0,48,0]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,8,4],{"name":"Z"}],["line",[8,20,0,8,0]],["line",[8,-4,0,8,0]],["arc",[16,-4,0,20,12,18,9]],["arc",[16,20,6,20,12,18,9]],["circle",[38,8,0,2.23606797749979]],["arc",[8,-4,0,0,24,3,12]],["line",[8,0,0,2,0]],["line",[8,16,0,2,0]],["property",[32,14,0],{"align":"top-left","format":"{name}"}]]},"nand4":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C D\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n0000 H\n0001 H\n0010 H\n0011 H\n0100 H\n0101 H\n0110 H\n0111 H\n1000 H\n1001 H\n1010 H\n1011 H\n1100 H\n1101 H\n1110 H\n1111 L\n\n.plot A B C D\n.plot Z\n"]],"schematic":[["analog:nfet",[-32,-32,0],{"W":"4"}],["analog:nfet",[-32,0,0],{"W":"4"}],["analog:pfet",[-32,-64,0],{"W":"16"}],["analog:pfet",[16,-64,0],{"W":"16"}],["port",[-56,-16,0],{"signal":"A"}],["port",[-56,16,0],{"signal":"B"}],["port",[112,-32,4],{"signal":"Z"}],["wire",[-56,-48,0,0,32]],["ground",[-32,96,0]],["wire",[-56,16,0,48,0]],["wire",[-8,-48,0,0,64]],["wire",[-32,-32,0,48,0]],["vdd",[40,-64,0]],["analog:pfet",[64,-64,0],{"W":"16"}],["wire",[16,-32,0,48,0]],["analog:nfet",[-32,32,0],{"W":"4"}],["port",[-56,48,0],{"signal":"C"}],["wire",[-32,-64,0,48,0]],["wire",[-56,48,0,96,0]],["wire",[40,48,0,0,-96]],["analog:pfet",[112,-64,0],{"W":"16"}],["wire",[64,-32,0,48,0]],["wire",[64,-64,0,48,0]],["wire",[16,-64,0,24,0]],["wire",[64,-64,0,-24,0]],["analog:nfet",[-32,64,0],{"W":"4"}],["port",[-56,80,0],{"signal":"D"}],["wire",[-56,80,0,144,0]],["wire",[88,80,0,0,-128]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,24,4],{"name":"Z"}],["arc",[20,12,0,16,12,15,9]],["arc",[20,36,6,16,12,15,9]],["line",[8,12,0,12,0]],["line",[8,36,0,12,0]],["circle",[38,24,0,2]],["property",[33,31,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["terminal",[0,48,0],{"name":"D"}],["line",[8,-4,0,0,57]]]},"or2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 L\n01 H\n10 H\n11 H\n\n.plot A B\n.plot Z\n"]],"schematic":[["gates:nor2",[-48,-8,0]],["gates:inverter",[0,0,0]],["port",[-48,-8,0],{"signal":"A"}],["port",[-48,8,0],{"signal":"B"}],["port",[32,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,8,4],{"name":"Z"}],["line",[8,20,0,8,0]],["line",[8,-4,0,8,0]],["arc",[16,-4,0,20,12,18,9]],["arc",[16,20,6,20,12,18,9]],["arc",[8,-4,0,0,24,3,12]],["line",[8,0,0,2,0]],["line",[8,16,0,2,0]],["property",[32,14,0],{"align":"top-left","format":"{name}"}],["line",[40,8,0,-4,0]]]},"inverter":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n0 H\n1 L\n\n\n.plot A\n.plot Z\n"]],"schematic":[["analog:pfet",[0,-32,0],{"W":"16"}],["analog:nfet",[0,0,0],{"W":"4"}],["vdd",[0,-32,0]],["ground",[0,32,0]],["port",[-24,0,0],{"signal":"A"}],["wire",[-24,-16,0,0,16]],["wire",[-24,16,0,0,-16]],["port",[0,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[32,0,4],{"line":"no","name":"Z"}],["line",[8,-8,0,0,16]],["line",[8,8,0,16,-8]],["line",[24,0,0,-16,-8]],["property",[16,4,0],{"align":"top-left","format":"{name}"}],["circle",[26,0,0,2]],["line",[32,0,0,-4,0]]]},"nand3":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n000 H\n001 H\n010 H\n011 H\n100 H\n101 H\n110 H\n111 L\n\n.plot A B C\n.plot Z\n"]],"schematic":[["analog:nfet",[-8,-24,0],{"W":"4"}],["analog:nfet",[-8,8,0],{"W":"4"}],["analog:pfet",[-8,-56,0],{"W":"16"}],["analog:pfet",[40,-56,0],{"W":"16"}],["port",[-32,-8,0],{"signal":"A"}],["port",[-32,24,0],{"signal":"B"}],["port",[88,-24,4],{"signal":"Z"}],["wire",[-32,-40,0,0,32]],["ground",[-8,72,0]],["wire",[-32,24,0,48,0]],["wire",[16,-40,0,0,64]],["wire",[-8,-24,0,48,0]],["vdd",[40,-56,0]],["analog:pfet",[88,-56,0],{"W":"16"}],["wire",[40,-56,0,48,0]],["wire",[40,-24,0,48,0]],["analog:nfet",[-8,40,0],{"W":"4"}],["port",[-32,56,0],{"signal":"C"}],["wire",[-8,-56,0,48,0]],["wire",[-32,56,0,96,0]],["wire",[64,56,0,0,-96]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,16,4],{"name":"Z"}],["arc",[20,4,0,16,12,15,9]],["arc",[20,28,6,16,12,15,9]],["line",[8,4,0,12,0]],["line",[8,28,0,12,0]],["circle",[38,16,0,2]],["property",[33,23,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["line",[8,-4,0,0,40]]]},"dlatch":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs D G\n.group outputs Q\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 -\n\n\n.plot D G\n.plot Q\n"]],"schematic":[["gates:nand2",[-16,-72,0]],["gates:nand2",[-16,-8,0]],["gates:inverter",[-16,32,0]],["port",[-16,-8,0],{"signal":"D"}],["port",[-16,32,0],{"signal":"G"}],["port",[80,-32,4],{"signal":"Q"}],["wire",[-16,8,0,-8,0],{"signal":"G"}],["wire",[-16,-56,0,-8,0],{"signal":"GN"}],["wire",[24,32,0,-8,0],{"signal":"GN"}],["gates:nand2",[-16,-40,0]],["gates:nand3",[32,-48,0]],["wire",[-16,-40,0,-24,0]],["wire",[80,-96,0,-120,0]],["wire",[-40,-40,0,0,-32]],["wire",[-40,-96,0,0,24]],["wire",[-16,-72,0,-24,0]],["wire",[-16,-24,0,0,16]],["wire",[80,-96,0,0,64]],["wire",[32,-64,0,0,16],{"signal":"mem"}],["wire",[32,-16,0,0,16]],["wire",[32,-64,0,8,0]],["analog:initial_voltage",[40,-64,0],{"IV":"1"}],["text",[-40,-110,0],{"text":"Set initial voltage of feedback loop to be consistent with nodes","font":"4pt sans-serif"}],["text",[-40,-104,0],{"text":"being initialized to 0V -- prevents convergence problems.","font":"4pt sans-serif"}]],"icon":[["terminal",[0,0,0],{"name":"D"}],["terminal",[0,16,0],{"name":"G"}],["terminal",[40,0,4],{"name":"Q"}],["text",[10,0,0],{"text":"D"}],["text",[10,16,0],{"text":"G"}],["text",[30,0,0],{"text":"Q","align":"center-right"}],["line",[8,-8,0,24,0]],["line",[32,-8,0,0,32]],["line",[32,24,0,-24,0]],["line",[8,24,0,0,-32]],["property",[20,-8,0],{"align":"bottom-center","format":"{name}"}]]},"nand2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 H\n01 H\n10 H\n11 L\n\n.plot A B\n.plot Z\n"]],"schematic":[["analog:nfet",[0,0,0],{"W":"4"}],["analog:nfet",[0,32,0],{"W":"4"}],["analog:pfet",[0,-32,0],{"W":"16"}],["analog:pfet",[48,-32,0],{"W":"16"}],["port",[-24,16,0],{"signal":"A"}],["port",[-24,48,0],{"signal":"B"}],["port",[48,0,4],{"signal":"Z"}],["wire",[-24,-16,0,0,32]],["ground",[0,64,0]],["wire",[-24,48,0,48,0]],["wire",[24,-16,0,0,64]],["wire",[0,0,0,48,0]],["vdd",[24,-32,0]],["wire",[0,-32,0,24,0]],["wire",[48,-32,0,-24,0]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,8,4],{"name":"Z"}],["line",[8,-4,0,0,24]],["arc",[20,-4,0,16,12,15,9]],["arc",[20,20,6,16,12,15,9]],["line",[8,-4,0,12,0]],["line",[8,20,0,12,0]],["circle",[38,8,0,2]],["property",[33,15,0],{"align":"top-left","format":"{name}"}]]},"tristate":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A E\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 -\n01 L\n10 -\n11 H\n\n\n.plot A E\n.plot Z\n"]],"schematic":[["analog:pfet",[0,-32,0],{"W":"16"}],["analog:nfet",[0,0,0],{"W":"4"}],["vdd",[0,-32,0]],["ground",[0,32,0]],["gates:nand2",[-72,-24,0]],["gates:nor2",[-72,8,0]],["gates:inverter",[-96,56,0]],["port",[-96,-8,0],{"signal":"A"}],["wire",[-96,-8,0,24,0]],["wire",[-96,24,0,24,0]],["port",[-96,56,0],{"signal":"E"}],["wire",[-64,56,0,8,0],{"signal":"EN"}],["wire",[-72,-24,0,-8,0],{"signal":"E"}],["wire",[-72,8,0,-8,0],{"signal":"EN"}],["port",[0,0,4],{"signal":"Z"}],["wire",[-96,-8,0,0,32]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[32,0,4],{"name":"Z"}],["line",[8,-8,0,0,16]],["line",[8,8,0,16,-8]],["line",[24,0,0,-16,-8]],["property",[19,3,0],{"align":"top-left","format":"{name}"}],["terminal",[16,16,3],{"name":"E"}],["line",[16,8,0,0,-4]]]},"dlatchn":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",""]],"schematic":[["gates:nand2",[-24,-40,0]],["gates:nand2",[-24,24,0]],["gates:inverter",[-24,64,0]],["port",[-24,24,0],{"signal":"D"}],["port",[-24,64,0],{"signal":"GN"}],["port",[72,0,4],{"signal":"Q"}],["wire",[-24,40,0,-8,0],{"signal":"G"}],["wire",[-24,-24,0,-8,0],{"signal":"GN"}],["wire",[16,64,0,-8,0],{"signal":"G"}],["gates:nand2",[-24,-8,0]],["gates:nand3",[24,-16,0]],["wire",[-24,-8,0,-24,0]],["wire",[72,-64,0,-120,0]],["wire",[-48,-8,0,0,-32]],["wire",[-48,-64,0,0,24]],["wire",[-24,-40,0,-24,0]],["wire",[-24,8,0,0,16]],["wire",[72,-64,0,0,64]],["wire",[24,-32,0,0,16]],["wire",[24,16,0,0,16]],["wire",[32,-32,0,-8,0]],["analog:initial_voltage",[32,-32,0],{"IV":"1"}],["text",[-48,-78,0],{"text":"Set initial voltage of feedback loop to be consistent with nodes","font":"4pt sans-serif"}],["text",[-48,-72,0],{"text":"being initialized to 0V -- prevents convergence problems.","font":"4pt sans-serif"}]],"icon":[["terminal",[0,0,0],{"name":"D"}],["terminal",[0,16,0],{"line":"no","name":"GN"}],["terminal",[40,0,4],{"name":"Q"}],["text",[10,0,0],{"text":"D"}],["text",[10,16,0],{"text":"GN"}],["text",[30,0,0],{"text":"Q","align":"center-right"}],["line",[8,-8,0,24,0]],["line",[32,-8,0,0,32]],["line",[32,24,0,-24,0]],["line",[8,24,0,0,-32]],["circle",[6,16,0,2]],["line",[4,16,0,-4,0]],["property",[20,-8,0],{"align":"bottom-center","format":"{name}"}]]},"xnor2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 H\n01 L\n10 L\n11 H\n\n.plot A B\n.plot Z\n"]],"schematic":[["analog:pfet",[0,-32,0],{"W":"16"}],["analog:nfet",[0,0,0],{"W":"4"}],["analog:nfet",[0,32,0],{"W":"4"}],["gates:nand2",[-72,-8,0]],["wire",[-24,-16,0,0,16]],["wire",[-24,16,0,0,-16]],["ground",[32,64,0]],["port",[-72,-8,0],{"signal":"A"}],["port",[-72,8,0],{"signal":"B"}],["wire",[-72,8,0,0,40]],["analog:nfet",[64,32,0],{"W":"4"}],["wire",[0,64,0,32,0]],["wire",[64,64,0,-32,0]],["analog:pfet",[64,-32,0],{"W":"16"}],["analog:pfet",[64,-64,0],{"W":"16"}],["vdd",[32,-64,0]],["wire",[0,-32,0,0,-32]],["wire",[0,-64,0,32,0]],["wire",[64,-64,0,-32,0]],["wire",[0,0,0,64,0]],["port",[64,0,4],{"signal":"Z"}],["wire",[0,32,0,64,0]],["wire",[-72,48,0,48,0]],["wire",[-24,48,0,40,0]],["wire",[40,-16,0,-24,0]],["wire",[16,48,0,0,-64]],["wire",[-72,-8,0,0,-40]],["wire",[40,48,0,-8,0]],["wire",[32,48,0,0,-96]],["wire",[-72,-48,0,104,0]],["wire",[40,-48,0,-8,0]]],"icon":[["line",[8,20,0,8,0]],["line",[8,-4,0,8,0]],["arc",[16,-4,0,20,12,18,9]],["arc",[16,20,6,20,12,18,9]],["arc",[8,-4,0,0,24,3,12]],["property",[32,14,0],{"align":"top-left","format":"{name}"}],["arc",[5,-4,0,0,24,3,12]],["terminal",[0,0,0],{"line":"no","name":"A"}],["terminal",[0,16,0],{"line":"no","name":"B"}],["terminal",[48,8,4],{"name":"Z"}],["line",[0,0,0,7,0]],["line",[0,16,0,7,0]],["circle",[38,8,0,2]]]},"mux4":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs D0 D1 D2 D3 S[1] S[0]\n.group outputs Y\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n000000 L\n000001 L\n000010 L\n000011 L\n000100 L\n000101 L\n000110 L\n000111 H\n\n001000 L\n001001 L\n001010 H\n001011 L\n001100 L\n001101 L\n001110 H\n001111 H\n\n010000 L\n010001 H\n010010 L\n010011 L\n010100 L\n010101 H\n010110 L\n010111 H\n\n011000 L\n011001 H\n011010 H\n011011 L\n011100 L\n011101 H\n011110 H\n011111 H\n\n100000 H\n100001 L\n100010 L\n100011 L\n100100 H\n100101 L\n100110 L\n100111 H\n\n101000 H\n101001 L\n101010 H\n101011 L\n101100 H\n101101 L\n101110 H\n101111 H\n\n110000 H\n110001 H\n110010 L\n110011 L\n110100 H\n110101 H\n110110 L\n110111 H\n\n111000 H\n111001 H\n111010 H\n111011 L\n111100 H\n111101 H\n111110 H\n111111 H\n\n.plot D0 D1 D2 D3 S[1] S[0]\n.plot Y\n"]],"schematic":[["gates:nand3",[-48,-56,0]],["gates:nand3",[-48,-8,0]],["gates:nand3",[-48,40,0]],["gates:nand3",[-48,88,0]],["gates:nand4",[16,8,0]],["wire",[0,8,0,0,16]],["wire",[0,24,0,16,0]],["wire",[0,56,0,0,-16]],["wire",[0,40,0,16,0]],["wire",[16,8,0,0,-48]],["wire",[16,-40,0,-16,0]],["wire",[16,56,0,0,48]],["wire",[16,104,0,-16,0]],["gates:inverter",[-48,136,0]],["port",[-48,-56,0],{"signal":"D0"}],["port",[-48,-8,0],{"signal":"D1"}],["port",[-48,40,0],{"signal":"D2"}],["port",[-48,88,0],{"signal":"D3"}],["port",[-48,136,0],{"signal":"S[1:0]"}],["port",[64,32,4],{"signal":"Y"}],["wire",[-48,-40,0,-8,0],{"signal":"SN[0]"}],["wire",[-16,136,0,8,0],{"signal":"SN[1:0]"}],["wire",[-48,-24,0,-8,0],{"signal":"SN[1]"}],["wire",[-48,120,0,-8,0],{"signal":"S[1]"}],["wire",[-48,104,0,-8,0],{"signal":"S[0]"}],["wire",[-48,56,0,-8,0],{"signal":"SN[0]"}],["wire",[-48,72,0,-8,0],{"signal":"S[1]"}],["wire",[-48,24,0,-8,0],{"signal":"SN[1]"}],["wire",[-48,8,0,-8,0],{"signal":"S[0]"}]],"icon":[["terminal",[0,0,0],{"name":"D0"}],["terminal",[0,16,0],{"name":"D1"}],["terminal",[16,64,5],{"name":"S[1:0]"}],["line",[24,48,0,-16,8]],["line",[8,-8,0,16,8]],["terminal",[32,24,4],{"name":"Y"}],["line",[16,56,0,0,-4]],["text",[10,0,0],{"text":"0"}],["text",[10,16,0],{"text":"1"}],["terminal",[0,32,0],{"name":"D2"}],["terminal",[0,48,0],{"name":"D3"}],["line",[24,0,0,0,48]],["line",[8,-8,0,0,64]],["text",[10,32,0],{"text":"2"}],["text",[10,48,0],{"text":"3"}]]},"mux2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs D0 D1 S\n.group outputs Y\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n000 L\n001 L\n010 L\n011 H\n100 H\n101 L\n110 H\n111 H\n\n.plot D0 D1 S\n.plot Y\n"]],"schematic":[["gates:nand2",[-56,-32,0]],["gates:nand2",[-56,0,0]],["gates:nand2",[-8,-16,0]],["wire",[-8,-24,0,0,8]],["wire",[-8,0,0,0,8]],["gates:inverter",[-56,40,0]],["port",[-56,-32,0],{"signal":"D0"}],["port",[-56,0,0],{"signal":"D1"}],["port",[-56,40,0],{"signal":"S"}],["port",[40,-8,4],{"signal":"Y"}],["wire",[-56,16,0,-8,0],{"signal":"S"}],["wire",[-56,-16,0,-8,0],{"signal":"SN"}],["wire",[-16,40,0,-8,0],{"signal":"SN"}]],"icon":[["terminal",[0,0,0],{"name":"D0"}],["terminal",[0,16,0],{"name":"D1"}],["terminal",[16,32,5],{"name":"S"}],["line",[8,-8,0,0,32]],["line",[24,0,0,0,16]],["line",[24,16,0,-16,8]],["line",[8,-8,0,16,8]],["terminal",[32,8,4],{"name":"Y"}],["line",[16,24,0,0,-4]],["text",[10,0,0],{"text":"0"}],["text",[10,16,0],{"text":"1"}]]},"or4":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C D\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n0000 L\n0001 H\n0010 H\n0011 H\n0100 H\n0101 H\n0110 H\n0111 H\n1000 H\n1001 H\n1010 H\n1011 H\n1100 H\n1101 H\n1110 H\n1111 H\n\n.plot A B C D\n.plot Z\n"]],"schematic":[["gates:nor4",[-48,-24,0]],["gates:inverter",[0,0,0]],["port",[-48,-24,0],{"signal":"A"}],["port",[-48,-8,0],{"signal":"B"}],["port",[-48,8,0],{"signal":"C"}],["port",[32,0,4],{"signal":"Z"}],["port",[-48,24,0],{"signal":"D"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,24,4],{"name":"Z"}],["line",[8,36,0,8,0]],["line",[8,12,0,8,0]],["arc",[16,12,0,20,12,18,9]],["arc",[16,36,6,20,12,18,9]],["arc",[8,12,0,0,24,3,12]],["property",[32,30,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["terminal",[0,48,0],{"name":"C"}],["arc",[8,36,0,0,17,2,12]],["arc",[8,12,6,0,17,2,12]],["line",[8,0,0,2,0]],["line",[8,16,0,2,0]],["line",[8,32,0,2,0]],["line",[8,48,0,2,0]],["line",[40,24,0,-4,0]]]},"nor4":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C D\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n0000 H\n0001 L\n0010 L\n0011 L\n0100 L\n0101 L\n0110 L\n0111 L\n1000 L\n1001 L\n1010 L\n1011 L\n1100 L\n1101 L\n1110 L\n1111 L\n\n.plot A B C D\n.plot Z\n"]],"schematic":[["analog:pfet",[-24,-8,0],{"W":"16"}],["analog:pfet",[-24,-40,0],{"W":"16"}],["port",[-48,8,0],{"signal":"A"}],["port",[-48,-24,0],{"signal":"B"}],["port",[120,24,4],{"signal":"Z"}],["analog:nfet",[-24,24,0],{"W":"4"}],["wire",[-48,8,0,0,32]],["vdd",[-24,-104,0]],["ground",[48,56,0]],["analog:nfet",[24,24,0],{"W":"4"}],["wire",[0,40,0,0,-64]],["wire",[0,-24,0,-48,0]],["wire",[-24,24,0,48,0]],["analog:nfet",[72,24,0],{"W":"4"}],["wire",[24,24,0,48,0]],["wire",[24,56,0,-48,0]],["analog:pfet",[-24,-72,0],{"W":"16"}],["port",[-48,-56,0],{"signal":"C"}],["wire",[-48,-56,0,96,0]],["wire",[48,-56,0,0,96]],["analog:nfet",[120,24,0],{"W":"4"}],["wire",[24,56,0,24,0]],["wire",[72,56,0,-24,0]],["wire",[72,56,0,48,0]],["wire",[72,24,0,48,0]],["analog:pfet",[-24,-104,0],{"W":"16"}],["port",[-48,-88,0],{"signal":"D"}],["wire",[-48,-88,0,144,0]],["wire",[96,-88,0,0,128]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,24,4],{"name":"Z"}],["line",[8,36,0,8,0]],["line",[8,12,0,8,0]],["arc",[16,12,0,20,12,18,9]],["arc",[16,36,6,20,12,18,9]],["circle",[38,24,0,2.23606797749979]],["arc",[8,12,0,0,24,3,12]],["property",[32,30,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["terminal",[0,48,0],{"name":"D"}],["arc",[8,36,0,0,17,2,12]],["arc",[8,12,6,0,17,2,12]],["line",[8,0,0,2,0]],["line",[8,16,0,2,0]],["line",[8,32,0,2,0]],["line",[8,48,0,2,0]]]},"buffer":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n0 L\n1 H\n\n\n.plot A\n.plot Z\n"]],"schematic":[["gates:inverter",[-32,0,0]],["gates:inverter",[0,0,0]],["port",[-32,0,0],{"signal":"A"}],["port",[32,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[32,0,4],{"name":"Z"}],["line",[8,-8,0,0,16]],["line",[8,8,0,16,-8]],["line",[24,0,0,-16,-8]],["property",[16,4,0],{"align":"top-left","format":"{name}"}]]},"or3":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n000 L\n001 H\n010 H\n011 H\n100 H\n101 H\n110 H\n111 H\n\n.plot A B C\n.plot Z\n"]],"schematic":[["gates:nor3",[-48,-16,0]],["gates:inverter",[0,0,0]],["port",[-48,-16,0],{"signal":"A"}],["port",[-48,0,0],{"signal":"B"}],["port",[-48,16,0],{"signal":"C"}],["port",[32,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,16,4],{"name":"Z"}],["line",[8,28,0,8,0]],["line",[8,4,0,8,0]],["arc",[16,4,0,20,12,18,9]],["arc",[16,28,6,20,12,18,9]],["arc",[8,4,0,0,24,3,12]],["property",[32,22,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["arc",[8,-4,0,0,8,2,4]],["line",[8,0,0,2,0]],["line",[8,16,0,3,0]],["line",[8,32,0,2,0]],["arc",[8,28,0,0,8,2,5]],["line",[40,16,0,-4,0]]]},"nor3":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n000 H\n001 L\n010 L\n011 L\n100 L\n101 L\n110 L\n111 L\n\n.plot A B C\n.plot Z\n"]],"schematic":[["analog:pfet",[-8,-24,0],{"W":"16"}],["analog:pfet",[-8,-56,0],{"W":"16"}],["port",[-32,-8,0],{"signal":"A"}],["port",[-32,-40,0],{"signal":"B"}],["port",[88,8,4],{"signal":"Z"}],["analog:nfet",[-8,8,0],{"W":"4"}],["wire",[-32,-8,0,0,32]],["vdd",[-8,-88,0]],["ground",[40,40,0]],["analog:nfet",[40,8,0],{"W":"4"}],["wire",[16,24,0,0,-64]],["wire",[16,-40,0,-48,0]],["wire",[-8,8,0,48,0]],["analog:nfet",[88,8,0],{"W":"4"}],["wire",[40,40,0,48,0]],["wire",[40,8,0,48,0]],["wire",[40,40,0,-48,0]],["analog:pfet",[-8,-88,0],{"W":"16"}],["port",[-32,-72,0],{"signal":"C"}],["wire",[-32,-72,0,96,0]],["wire",[64,-72,0,0,96]]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,16,4],{"name":"Z"}],["line",[8,28,0,8,0]],["line",[8,4,0,8,0]],["arc",[16,4,0,20,12,18,9]],["arc",[16,28,6,20,12,18,9]],["circle",[38,16,0,2.23606797749979]],["arc",[8,4,0,0,24,3,12]],["property",[32,22,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["arc",[8,-4,0,0,8,2,4]],["line",[8,0,0,2,0]],["line",[8,16,0,3,0]],["line",[8,32,0,2,0]],["arc",[8,28,0,0,8,2,5]]]},"dreg":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",""]],"schematic":[["gates:dlatch",[-16,0,0],{"name":"slave"}],["gates:dlatchn",[-56,0,0],{"name":"master"}],["port",[-56,0,0],{"signal":"D"}],["port",[24,0,4],{"signal":"Q"}],["port",[-56,32,0],{"signal":"CLK"}],["wire",[-56,32,0,0,-16]],["wire",[-16,16,0,0,16]],["wire",[-16,32,0,-40,0]]],"icon":[["terminal",[0,0,0],{"name":"D"}],["terminal",[0,16,0],{"name":"CLK"}],["terminal",[40,0,4],{"name":"Q"}],["text",[10,0,0],{"text":"D"}],["text",[30,0,0],{"text":"Q","align":"center-right"}],["line",[8,-8,0,24,0]],["line",[32,-8,0,0,32]],["line",[32,24,0,-24,0]],["line",[8,24,0,0,-32]],["line",[14,16,0,-6,3]],["line",[14,16,6,-6,3]],["property",[20,-8,0],{"align":"bottom-center","format":"{name}"}]]},"and4":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C D\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n0000 L\n0001 L\n0010 L\n0011 L\n0100 L\n0101 L\n0110 L\n0111 L\n1000 L\n1001 L\n1010 L\n1011 L\n1100 L\n1101 L\n1110 L\n1111 H\n\n.plot A B C D\n.plot Z\n"]],"schematic":[["gates:nand4",[-48,-24,0]],["gates:inverter",[0,0,0]],["port",[-48,-24,0],{"signal":"A"}],["port",[-48,-8,0],{"signal":"B"}],["port",[-48,8,0],{"signal":"C"}],["port",[-48,24,0],{"signal":"D"}],["port",[32,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,24,4],{"name":"Z"}],["arc",[20,12,0,16,12,15,9]],["arc",[20,36,6,16,12,15,9]],["line",[8,12,0,12,0]],["line",[8,36,0,12,0]],["property",[33,31,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["terminal",[0,48,0],{"name":"D"}],["line",[8,-4,0,0,57]],["line",[40,24,0,-4,0]]]},"and3":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B C\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n000 L\n001 L\n010 L\n011 L\n100 L\n101 L\n110 L\n111 H\n\n.plot A B C\n.plot Z\n"]],"schematic":[["gates:nand3",[-48,-16,0]],["gates:inverter",[0,0,0]],["port",[-48,-16,0],{"signal":"A"}],["port",[-48,0,0],{"signal":"B"}],["port",[-48,16,0],{"signal":"C"}],["port",[32,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,16,4],{"name":"Z"}],["arc",[20,4,0,16,12,15,9]],["arc",[20,28,6,16,12,15,9]],["line",[8,4,0,12,0]],["line",[8,28,0,12,0]],["property",[33,23,0],{"align":"top-left","format":"{name}"}],["terminal",[0,32,0],{"name":"C"}],["line",[8,-4,0,0,40]],["line",[40,16,0,-4,0]]]},"and2":{"properties":{"name":{"edit":"yes","choices":[""],"type":"string","value":"","label":"Name"}},"test":[["test",".power Vdd=1\n.thresholds Vol=0 Vil=0.1 Vih=0.9 Voh=1\n\n.group inputs A B\n.group outputs Z\n\n.cycle assert inputs tran 9n sample outputs tran 1n\n00 L\n01 L\n10 L\n11 H\n\n.plot A B\n.plot Z\n"]],"schematic":[["gates:nand2",[-48,-8,0]],["gates:inverter",[0,0,0]],["port",[-48,-8,0],{"signal":"A"}],["port",[-48,8,0],{"signal":"B"}],["port",[32,0,4],{"signal":"Z"}]],"icon":[["terminal",[0,0,0],{"name":"A"}],["terminal",[0,16,0],{"name":"B"}],["terminal",[48,8,4],{"name":"Z"}],["line",[8,-4,0,0,24]],["arc",[20,-4,0,16,12,15,9]],["arc",[20,20,6,16,12,15,9]],["line",[8,-4,0,12,0]],["line",[8,20,0,12,0]],["property",[33,15,0],{"align":"top-left","format":"{name}"}],["line",[40,8,0,-4,0]]]}});
jade.model.libraries.gates.read_only = true;
