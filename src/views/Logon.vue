<template>
  <div class="login_container">
    <div class="login_form">
      <el-col :span="22" :offset="1">
        <div class="login_title">Admin Template</div>
        <el-form :model="dataForm" :rules="rules" ref="rules">
          <el-form-item prop="username">
            <el-input placeholder="账号" v-model="dataForm.username" prefix-icon="third-nickname">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="dataForm.password" type="password"
                      prefix-icon="third-locking"></el-input>
          </el-form-item>
          <div class="form-item">
            <el-form-item prop="captcha">
              <el-input placeholder="验证码" v-model="dataForm.captcha"
                        prefix-icon="third-safety"></el-input>
            </el-form-item>
            <el-image :src="captchaUrl" class="image" id="code"
                      @click="handleCaptchaClick"
                      ref="captcha"></el-image>
          </div>
          <div class="form-item">
            <el-form-item>
              <el-checkbox v-model="dataForm.remember" style="color: white">Remember Me</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-link :underline="false" style="margin-top: -5px;color:white">
                Forget Password?
              </el-link>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="handleAccountSubmit">登录<i
                class="el-icon-right"></i>
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <vue-particles
        color="#FAFAFA"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#FAFAFA"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: "Logon",
  data() {
    return {
      dataForm: {
        username: '',
        password: '',
        captcha: '',
      },
      captchaUrl: 'data:image/jpg;base64,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',
      rules: {
        username: [{required: true, message: "账号不能为空！", trigger: 'blur'},],
        password: [{required: true, message: "密码不能为空！", trigger: 'blur'}],
        captcha: [{required: true, message: "验证不能为空！", trigger: 'blur'}],
      },

    }
  },
  methods: {
    handleCaptchaClick() {
    },
    handleAccountSubmit() {
      this.$refs['rules'].validate((valid) => {
        if (valid) {
          this.$alert(JSON.stringify(this.dataForm))
        }
      })
    },
  },
  created() {
    // 获取验证码
  }
}
</script>

<style scoped lang="scss">
.login_container {
  //background-image: url("../assets/img/logon.jpeg");
  background-image: url("../assets/img/ground.jpg");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;

  .login_form {
    width: 420px;
    height: 410px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12), 0 0 12px rgba(0, 0, 0, .04);
    border-radius: 4px;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0)
  }

  .login_title {
    margin: 30px 0;
    font-weight: 600;
    font-size: 21px;
    text-align: center;
  }

  .form-item {
    display: flex;
    justify-content: space-between;

    .image {
      opacity: 0.5;
      height: 40px;
      margin-left: 20px;
    }
  }
}

/deep/ .el-input__inner {
  background-color: rgba(255, 255, 255, 0);
}

/deep/ .el-checkbox__inner {
  background-color: rgba(255, 255, 255, 0);
}

/deep/ .el-button {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #DCDFE6;
}

/deep/ .el-button.is-disabled .el-button.is-disabled:focus .el-button.is-disabled:hover {
  background-color: rgba(255, 255, 255, 0);
}

/deep/ .el-button.is-disabled:focus {
  background-color: rgba(255, 255, 255, 0);
}

/deep/ .el-button.is-disabled:hover {
  background-color: rgba(255, 255, 255, 0);
}

</style>