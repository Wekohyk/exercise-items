<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-#F2F2F7 w-100vw h-100vh -z-1"
  ></div>

  <div
    class="text-center text-18 font-500 h-44 text-#0F0F0F fixed top-0 left-0 right-0 bottom-0 bg-#F2F2F7 pt-8"
  >
    已解锁组件
  </div>

  <div class="mt-52 mb-43 w-100vw h-full px-16 flex flex-col gap-16">
    <div
      class="py-11 px-14 bg-#fff rounded-16"
      v-for="(item, index) in widgetImgList"
      :key="index"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-13">
          <div
            class="w-58 h-58 bg-#F6F7F9 flex items-center justify-center rounded-8"
          >
            <img
              :src="item.img"
              alt=""
              class="rounded-5"
              :style="getImageStyle(item.level[0])"
            />
          </div>
          <div class="flex flex-col gap-7">
            <div class="flex items-center gap-8">
              <span>{{ item.name }}</span>
              <div class="flex gap-4 items-center">
                <span
                  class="bg-#F2F2F7 text-11 text-#B3B3B3 font-600 p-3 rounded-4"
                  v-for="(itemSon, index) in item.level"
                  :key="index"
                >
                  {{ itemSon }}
                </span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <img
                src="/creatorProgram/avatar.webp"
                class="w-18 h-18 rounded-50%"
              />
              <div class="text-10 text-#8A8A8A">{{ item.author }}</div>
            </div>
          </div>
        </div>
        <div
          class="bg-#0A7AFF1A rounded-15 h-30 w-79 text-12 font-500 text-#0A7AFF flex items-center justify-center"
        >
          使用组件
        </div>
      </div>

      <div class="h-1 bg-#F2F2F7 w-full mb-13 mt-11"></div>

      <div class="flex items-center justify-between">
        <div class="text-#B3B3B3 text-13">{{ stringDate }}</div>
        <div class="flex items-center">
          <img src="/images/flame.png" alt="" class="w-18 h-18" />
          <div class="text-#0F0F0F text-14">{{ item.flame }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const getNowTime = now.toLocaleTimeString();
const stringDate = `${year}-${month}-${day} ${getNowTime}`;

const widgetImgList = [
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['小'],
    name: '天气',
    author: '白开水',
    flame: 888,
  },
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['小', '中', '大'],
    name: '时钟',
    author: '王五',
    flame: 12321,
  },
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['大'],
    name: 'TodoList',
    author: '奥利给',
    flame: 92143,
  },
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['中', '大'],
    name: '倒数纪念日',
    author: '亚比囧囧囧',
    flame: 120,
  },
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['小', '中'],
    name: '下班倒计时',
    author: 'QAQ',
    flame: 8776,
  },
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['大'],
    name: '照片',
    author: '张三',
    flame: 344,
  },
  {
    img: '/creatorProgram/widgetImg.webp',
    level: ['小', '中', '大'],
    name: '电子立牌',
    author: '李四',
    flame: 555,
  },
];

const getImageStyle = (level: string) => {
  switch (level) {
    case '小':
      return { width: '40px', height: '40px' };
    case '中':
      return { width: '51px', height: '23px' };
    case '大':
      return { width: '42px', height: '44px' };
    default:
      return { width: '40px', height: '40px' };
  }
};
</script>

<style scoped lang="scss"></style>
