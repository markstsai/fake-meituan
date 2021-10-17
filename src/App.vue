<template>
  <div id="app">

    <!-- 頭部 -->
    <MyHeader></MyHeader>

    <!-- 導航 -->
    <MyNav></MyNav>

    <!-- 主體內容 -->
    <!-- <div class="content">
      content
    </div> -->

    <!-- 路由出口 -->
    <!-- 路由匹配到的組件將渲染在這裡 -->
    <router-view></router-view>


  </div>
</template>

<script>
// 1. 導入
import MyHeader from "./components/header/Header";
import MyNav from "./components/nav/Nav";

export default {
  name: "App",
  components: { MyHeader, MyNav },
  data() {
    return {
      poiInfo: {}
    };
  },
  created() {
    //發起異步請求

    // 因為
    // 將App.vue對象指派到that
    var that = this;
    console.log(that.name);

    this.$axios
      .get("api/goods")
      .then(function(response) {
        let dataSource = response.data;
        if (dataSource.code == 0) {
          that.poiInfo = dataSource.data.poi_info;
          console.log(that.poiInfo);
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>

<style>
</style>
