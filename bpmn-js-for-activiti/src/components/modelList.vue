<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="success">新流程模型</el-button>
      <el-button type="primary" icon="el-icon-upload el-icon--right">打开文件</el-button>
      <el-input placeholder="请输入内容" v-model="modelInputUrl" style="width:200px">
        <template slot="prepend">Http://</template>
      </el-input>
      <el-button type="primary" @click="openModelEdtor()">来自网络</el-button>
    </div>
    <div class id="modelList">
      <el-row>
        <el-col>
          <el-card v-for="model in modelList" :key="model.id" :body-style="{ padding: '0px' }">
            <img
              v-bind:src="model.src"
              onerror="this.src= '/static/logo.png'; this.onerror = null;"
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
</template>
<script>
import SysLinks from "@/classes/z-server-vue/core/FrontLinkSysParamInf";
export default {
  mounted() {
    SysLinks.getSysLinkFromVue(this);
  },
  data() {
    return {
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
        },
        {
          src: "images/3.jpg",
          des: "这是第三个描述",
          id: 211
        },
        {
          src: "images/1.jpg",
          des: "这是第一个描述",
          id: 199
        },
        {
          src: "images/3.jpg",
          des: "这是第二个描述",
          id: 112
        },
        {
          src: "images/3.jpg",
          des: "这是第三个描述",
          id: 423
        }
      ]
    };
  },
  methods: {
    openModelEdtor() {
      console.log(SysLinks.getSysLink().sysFlag);
    }
  }
};
</script>
<style>
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
  position: relative;
  width: 100px;
  /* height: 0; */
  /* padding-bottom: 100%; */
}
</style> 