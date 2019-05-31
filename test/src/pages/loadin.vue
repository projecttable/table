<template>
    <el-container class="loadin" >
        <el-col class="conent" :span='12'>
            <el-form ref="form" :model="form" label-width="80px">
                <div class="input-box">
                    <el-input class="user"></el-input>
                </div>
                <div class="input-box">
                    <el-input class="pass"></el-input>
                </div>
                <div class="check-box">
                    <el-checkbox label="记住密码"></el-checkbox>
                </div>
                <el-button type='primary' class="btn">登录</el-button>
            </el-form>
        </el-col>
    </el-container>
</template>
<script>
import { Form } from 'element-ui'
export default {
  name: 'loadin',
  component: {
    Form
  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$refs.form)
    }
  }
}
</script>
<style lang="stylus" scoped>
.loadin{
    margin: 0;
    .conent{
        padding: 35px;
        box-shadow: 0 0 10px #000;
        transform: translate3d(-50%,-50%,0);
        position: absolute;
        left: 50%;
        top: 50%;
        .input-box,.check-box{
            height: 35px;
            margin-bottom: 23px;
        }
        .btn{
            width: 100%;
        }
    }
}
</style>
