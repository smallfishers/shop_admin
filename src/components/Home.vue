<template>
  <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <div class="title">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="logout">
        <span>欢迎光临</span>
        <a href="javascript:;">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    height: 60px;
    background-color: #b3c1cd;
    display: flex;
    .logo {
      width: 180px;
      background-image: url('~@//assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .logout {
      width: 180px;
      line-height: 60px;
      text-align: center;
      font-weight: 700;
      a {
        color: blueviolet;
      }
    }
    .title {
      flex: 1;
      font-size: 30px;
      font-weight: 700;
      line-height: 60px;
      text-align: center;
      color: #fff;
    }
  }
  .el-aside {
    background-color: #545c64;
  }

  .el-main {
    background-color: #eaeef1;
  }
}
</style>
