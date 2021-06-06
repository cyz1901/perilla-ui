<template>
    <el-container>
      <el-header>
        <el-row class="header_row">
          <el-col>
            <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>
<script>
export default {
  setup() {

  }
}
</script>
<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
  }

  .el-header{
    position:relative;
    background-color: #463c65;
    color: #333;
    text-align: center;
  }
  .header_row {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 150px;
  }
  .el-container {
    height: 100%;
  }

</style>