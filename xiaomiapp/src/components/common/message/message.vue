<template>
  <transition name="fade">
    <!--这个是动画的过渡效果-->
    <div class="message" :class="type" v-if="visible">
      <div class="content">
        <i class="icon-type iconfont" :class="'icon-' + type"></i>
        {{ content }}
        <i
          v-if="hasClose"
          class="btn-close iconfont icon-close"
          @click="visible = false"
        ></i>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  name: "Message.vue",
  data() {
    return {
      content: "",
      time: 3000,
      visible: false,
      type: "info", // 'info','warning','error','success'
      hasClose: false,
    };
  },
  mounted() {
    this.close();
  },
  methods: {
    close() {
      window.setTimeout(() => {
        this.visible = false;
      }, this.time);
    },
  },
};
</script>
 
<style scoped>
/* 动画效果 淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* 不同的提示语的样式 */
.info,
.icon-info {
  background-color: #dddddd; /*#f0f9eb*/
  color: #909399;
}
.success,
.icon-success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.warning,
.icon-warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}
.error,
.icon-error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.message {
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
}

.content {
  width: 100%;
  height: 100%;
  text-align: center;
}
.icon-type {
  margin: 0 10px 0 30px;
}
.btn-close {
  font-size: 20px;
  margin: 0 0 0 70px;
  color: #ccc;
}
</style>