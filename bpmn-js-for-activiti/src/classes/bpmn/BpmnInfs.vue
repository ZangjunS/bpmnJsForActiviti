<script>
class Model {
  constructor(id, key, name, des, initBpmnXml, modelSvg) {
    this.id = id;
    this.name = name;
    this.key = key;
    this.des = des;
    this.modelXml = initBpmnXml;
    this.modelSvg = modelSvg;
  }
  getName() {
    if (this.name != null && this.name != "") {
      return this.name;
    }
    if (this.id != null && this.id != "") {
      return this.id;
    }
    if (this.key != null && this.key != "") {
      return this.key;
    }
    return "diagram";
  }
}
function fixModel(model) {
  if (model == null) {
    return new Model();
  }
  return new Model(
    model.id,
    model.key,
    model.name,
    model.des,
    model.modelXml,
    model.modelSvg
  );
}
export default {
  Model,
  fixModel
};
</script>
 

 