<template>
  <div>
    <div class="model-controller">
      <div class="open-fold-data" v-show="isComOpen">
        <div id="model-origin-buttons">
          <div>
            <el-input placeholder="搜索框" style="width:150px"></el-input>
            <el-button type="primary">搜索模型</el-button>
          </div>
          <div>
            <el-input placeholder="请输入内容" v-model="modelInputUrl" style="width:150px">
              <template slot="prepend" style="width:20px">Http://</template>
            </el-input>
            <el-button type="primary" @click="openModelEdtor()">来自网络</el-button>
          </div>
          <div>
            <el-button type="success">新流程模型</el-button>

            <el-button type="primary" icon="el-icon-upload" @click="openFileWin()"></el-button>
            <input type="file" @change="pushModelByFile()" ref="fileinput" />
          </div>
        </div>
        <div class id="modelList">
          <div class="vertical-list">
            <el-row v-for="model in modelList" :key="model.id">
              <el-col>
                <el-card :body-style="{ padding: '0px',display:'block' }">
                  <img
                    v-bind:src="model.src"
                    onerror="this.src= './static/logo.png'; this.onerror = null;"
                  />
                  <div style="padding: 14px;">
                    <span>{{model.id}}</span>
                    <span>{{model.key}}</span>
                    <span>{{model.des}}</span>
                    <div class="bottom clearfix">
                      <el-button type="text" class="button">修改</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <i class="com-fold el-icon-s-fold" @click="openFold()" style=" font-size: 20px;"></i>
    </div>
  </div>
</template>
<script>
import SysLinks from "@/classes/z-server-vue/core/FrontLinkSysParamInf";
export default {
  mounted() {
    SysLinks.getSysLinkFromVue(this);
  },
  data() {
    return {
      isComOpen: true,
      modelInputUrl: "",
      modelList: [
        {
          src: "https://tb1.bdstatic.com/tb/%E5%A4%A7%E5%AD%A6.jpg",
          des: "这是第一个描述",
          id: 197
        },
        {
          src: "images/2.jpg",
          des: "这是第二个描述",
          id: 198
        }
      ]
    };
  },
  methods: {
    openFold() {
      this.isComOpen = !this.isComOpen;
    },
    readFileFromInputPro(input) {
      var file = input.files[0];
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
          resolve(this.result);
        };
      });
    },

    openFileWin() {
      this.$refs.fileinput.dispatchEvent(new MouseEvent("click"));
    },
    emitModel(model) {
      console.log("emit ");
      console.log(model);
      this.$emit("emitmodel", model);
    },
    async pushModelByFile() {
      var input = this.$refs.fileinput;
      var fileName = input.files[0].name.substring(
        input.files[0].name.lastIndexOf("."),
        -1
      );
      var fileXml = await this.readFileFromInputPro(this.$refs.fileinput);
      this.emitModel({
        name: fileName + "_new",
        id: Math.random(),
        modelXml: fileXml
      });
    }
  }
};
</script>
<style>
.model-controller {
 
  display: flex;
}
.open-fold-data{
  flex: auto;
}
.vertical-list {
  overflow-y: scroll;
  height: 600px;
}

#modelList .el-col {
  display: flex;
  flex-wrap: wrap;
}
#modelList .el-card {
  padding: 3px;
  list-style: none;
  margin-right: 15px;
  border: 1px solid #eee;
}
#modelList img {
  vertical-align: top/middle;
  /* width: 100%; */
  /* height: 0; */
  /* padding-bottom: 100%; */
}
</style> 