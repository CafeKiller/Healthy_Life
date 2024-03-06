<template>
  <view class="content" style='padding: 0'>
    <van-divider>账户信息</van-divider>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        name="原密码"
        label="原密码"
        placeholder="原密码"
        :rules="[{ required: true, message: '请填写原密码' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写原密码' }]"
      />
      <van-field name="uploader" label="头像上传" @tap='uploadUserImage'>
        <template #input>
          <van-uploader :max-size="500 * 1024" disabled @oversize="onOversize" />
        </template>
      </van-field>

      <van-divider>个人信息</van-divider>

      <van-field
        v-model="username"
        name="性别"
        label="性别"
        placeholder="性别"
        :rules="[{ required: true, message: '请填写性别' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        name="年龄"
        label="年龄"
        placeholder="年龄"
        :rules="[{ required: true, message: '请填写年龄' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        ref="iWeight"
        name="体重"
        label="体重"
        placeholder="体重"
        :rules="[{ required: true, message: '请填写体重' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        ref="iHeight"
        name="身高"
        label="身高"
        placeholder="身高"
        :rules="[{ required: true, message: '请填写身高' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        ref="iCholesterol"
        name="血压"
        label="血压"
        placeholder="血压"
        :rules="[{ required: true, message: '请填写血压' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        ref="iHeartRate"
        name="心率"
        label="心率"
        placeholder="心率"
        :rules="[{ required: true, message: '请填写心率' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </view>
</template>

<script>

import { Toast } from 'vant'
import { mapMutations, mapState } from 'vuex'

export default {

  data() {
    return {
      queryID: "iWeight",
      username: "",
      old_password: "",
      new_password: "",
      age:"",
      sex:"",
      weight:"",
      height:"",
      cholesterol:"",
      heartRate:"",
      newImage:""
    };
  },
  computed: {
    ...mapState(['user']),

  },
  methods: {

    // 用户头像文件上传
    uploadUserImage() {
      let that = this
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function (chooseResult) {
          const tempFilePaths = chooseResult.tempFilePaths;
          uni.uploadFile({
            url: '/api/upload',
            filePath: tempFilePaths[0], // 要上传的文件路径
            name: 'file', // 上传文件对应的 key，后端会根据这个 key 来获取文件
            success: function (result) {
              Toast("上传成功")
              that.newImage = JSON.parse(result.data).data.path
            },
            fail: function (error) {
              console.log('上传失败', error);
            }
          });
        }
      });
    },
    // 文件上传限制
    onOversize(file) {
      Toast("当前图片过大, 请不要超过 500KB")
    },
    // 将base64格式的图片转换为文件对象
    base64ToFile(base64Data, fileName) {
      const arr = base64Data.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], fileName, { type: mime });
    },
    // 获取文件扩展名
    getFileExtension(filename) {
      return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    }

},
  mounted() {
    // 进入页面后自动锁定一个参数, 锁定参数由传入 queryID 决定.
    this.$refs[this.queryID].focus()
  },
  onLoad(query) {
    // 获取 URL 携带参数
    this.queryID = query.id
  }
}
</script>

<style scoped>
@import "style/login.scss";
</style>
