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
      <van-field name="uploader" label="头像上传">
        <template #input>
          <van-uploader />
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
        name="体重"
        label="体重"
        placeholder="体重"
        :rules="[{ required: true, message: '请填写体重' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        name="身高"
        label="身高"
        placeholder="身高"
        :rules="[{ required: true, message: '请填写身高' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        name="血压"
        label="血压"
        placeholder="血压"
        :rules="[{ required: true, message: '请填写血压' }]"
      />
      <van-field
        v-model="old_password"
        type="password"
        name="血压"
        label="血压"
        placeholder="血压"
        :rules="[{ required: true, message: '请填写心率' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </view>
</template>

<script>

export default {

  data() {
    return {
      username: "",
      old_password: "",
      new_password: "",
    };
  },
  computed: {
  },
  methods: {

  },
}
</script>

<style scoped>
@import "style/login.scss";
</style>
