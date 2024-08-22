<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <!-- 遮罩层 -->
    <div
      v-if="props.visible"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black/60 transition-opacity duration-200 ease-in"
    ></div>
  </transition>

  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.visible"
      class="w-100vw fixed flex items-center justify-center flex-col left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[calc(50%-20px)] transition-opacity duration-300 ease-in"
    >
      <div
        class="bg-#fff mx-47 px-20 py-20 rounded-20 flex flex-col justify-center items-center"
      >
        <div class="text-18 font-500">已加入创作者激励计划</div>
        <div class="text-13 text-#5C5C5C mt-7">
          点击「管理」进行组件解锁设置
        </div>
        <div class="bg-#F2F2F2 px-11 py-11.37 rounded-11.37 mt-18 min-w-258">
          <div class="flex justify-between items-center">
            <span class="text-10.66">我的作品</span>
            <img src="/images/right_arrow.png" alt="" class="w-11.37 h-11.37" />
          </div>
          <div class="flex flex items-center justify-around gap-8.5 mr-7">
            <div
              class="mt-6 flex flex-col items-center"
              v-for="(item, index) in myWorksList"
              :key="index"
            >
              <div>
                <div
                  class="bg-#F6F7F9 p-3 rounded-t-10 w-70 h-80 flex justify-center items-center relative"
                >
                  <img
                    :src="item.avatar"
                    alt=""
                    class="rounded-5"
                    :style="getImageStyle(item.level)"
                  />
                  <div
                    class="p-1 bg-#EAEBED text-#B3B3B3B3 text-4.45 font-600 absolute right-3 top-3 rounded-1.6"
                  >
                    {{ item.level }}
                  </div>
                </div>
                <div
                  class="bg-#fff rounded-b-10 text-8.5 font-500 pl-4.5 pb-2.6 pt-1"
                >
                  {{ item.name }}
                </div>
              </div>
              <div
                class="px-8 pt-4 w-1/2 bg-#0A7AFF/5% text-#0A7AFF rounded-15 mt-4.7 font-500 text-7.5 text-center"
              >
                管理
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full bg-#0A7AFF py-11 mt-20 font-600 text-16 text-#fff rounded-46 text-center"
          @click="linkUrl"
        >
          前往设置
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{ (e: 'linkUrl', visible: boolean): void }>();

const myWorksList = [
  {
    avatar: '/creatorProgram/avatar.webp',
    name: '步数',
    level: '小',
    width: '40px',
    height: '40px',
  },
  {
    avatar: '/creatorProgram/avatar.webp',
    name: 'TodoList',
    level: '中',
    width: '53px',
    height: '40px',
  },
  {
    avatar: '/creatorProgram/avatar.webp',
    name: '天气',
    level: '大',
    width: '53px',
    height: '53px',
  },
];

const getImageStyle = (level: string) => {
  switch (level) {
    case '小':
      return { width: '40px', height: '40px' };
    case '中':
      return { width: '53px', height: '40px' };
    case '大':
      return { width: '53px', height: '53px' };
    default:
      return { width: '40px', height: '40px' };
  }
};

const linkUrl = () => {
  emit('linkUrl', false);
};
</script>

<style scoped lang="scss"></style>
