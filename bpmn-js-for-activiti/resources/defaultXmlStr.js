export var defaultXmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
      <outgoing>Flow_0hy9728</outgoing>
    </startEvent>
    <userTask id="task_1">
      <incoming>Flow_0hy9728</incoming>
      <outgoing>Flow_1bhw9oh</outgoing>
    </userTask>
    <sequenceFlow id="Flow_0hy9728" sourceRef="StartEvent_1y45yut" targetRef="task_1" />
    <sequenceFlow id="Flow_1bhw9oh" sourceRef="task_1" targetRef="Event_0gxcgi2" />
    <endEvent id="Event_0gxcgi2">
      <incoming>Flow_1bhw9oh</incoming>
      <terminateEventDefinition id="TerminateEventDefinition_0qwx7b5" />
    </endEvent>
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="Flow_0hy9728_di" bpmnElement="Flow_0hy9728">
        <di:waypoint x="236" y="218" />
        <di:waypoint x="280" y="218" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1bhw9oh_di" bpmnElement="Flow_1bhw9oh">
        <di:waypoint x="380" y="218" />
        <di:waypoint x="431" y="218" />
        <di:waypoint x="431" y="230" />
        <di:waypoint x="482" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="200" y="200" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="207" y="243" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0aduvib_di" bpmnElement="task_1">
        <omgdc:Bounds x="280" y="178" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0mio0eo_di" bpmnElement="Event_0gxcgi2">
        <omgdc:Bounds x="482" y="212" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>

`