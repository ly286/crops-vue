<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>

  <div style="font-size: 20px">
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要直接提供它们 -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>

  <el-icon><DeleteFilled /></el-icon>
  
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #111111;
  color: #8a3030;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #0b77e4;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
