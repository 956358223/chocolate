<template>
  <el-row :gutter="36">
    <el-col :span="8">
      <el-card shadow="never" :body-style="bodyStyle">

        <el-col :span="24">
          <div class="avatar">
            <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </div>
          <div style="text-align: center;">
            Super Admin<br><br>
            <span>
               <el-tag>ROLE_ADMIN</el-tag>&nbsp;&nbsp;
               <el-tag>ROLE_SUPER</el-tag>
            </span>
          </div>
        </el-col>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card shadow="never" :body-style="bodyStyle">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的账号" name="first">
            <el-form ref="form">
              <el-form-item label="姓名">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      bodyStyle: {
        'height': '750px'
      },
      size: 120,
      activeName: 'first',
      circleUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.avatar {
  padding: 20px;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
}

/deep/ .el-tabs__item {
  font-size: 16px;
}

/deep/ .el-form-item__label {
  font-size: 16px;
  font-weight: bold;
}
</style>