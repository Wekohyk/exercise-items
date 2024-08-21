<template>
  <!-- 上方区域 -->
  <div class="px-16 pb-18 text-#0F0F0F">
    <!-- 上方火苗 -->
    <div class="flex items-center relative top-0 left-0 mt-10">
      <img src="/images/left_arrow.png" alt="" class="w-18 h-18" />
      <div class="absolute top-0 left-50% -translate-x-50%">我的火苗</div>
    </div>

    <!-- 火苗余额 -->
    <div
      class="flameBackground mt-25 flex flex-col justify-between px-16 pt-12 pb-18"
    >
      <div class="flex justify-between items-center">
        <span class="text-14 font-500 text-#fff">火苗余额</span>
        <div class="flex items-center gap-4">
          <span class="text-12 font-500 text-#FFE7D6">火苗用途</span>
          <img src="/images/query_img.png" alt="" class="w-12 h-12" />
        </div>
      </div>
      <div class="text-34 font-700 text-#fff">4712</div>
    </div>

    <!-- 火苗充值 -->
    <div class="mt-18 flex justify-center items-center gap-9 flex-wrap">
      <div
        class="buyBox min-w-113 max-w-123 h-72 bg-#F6F7F9 rounded-10 flex items-center justify-center flex-col relative top-0 left-0 b-2 b-solid b-#FF9500/0"
        :class="{
          ' b-#FF9500/100 bg-#FF9500/5%': isSelectFlame === index,
        }"
        @click="selectFlame(index)"
        v-for="(item, index) in flameList"
        :key="index"
      >
        <div class="flex items-center justify-center gap-0.45">
          <img src="/images/flame.png" alt="" class="w-20 h-20" />
          <span class="text-18 font-700 text-center">{{ item.number }}</span>
        </div>
        <div class="text-14 font-500 text-#8A8A8A">{{ item.money }}</div>

        <div
          class="recommended rounded-tl-8 rounded-br-10 text-9 font-500 text-#fff pr-10 pl-8 pt-3 pb-4 absolute top-0 left-0"
          v-if="index === 2"
        >
          推荐
        </div>
      </div>
    </div>

    <div class="mt-10">
      <span class="text-12 text-#8A8A8A">购买火苗即代表同意</span>
      <span class="text-12 font-600 text-#FF9500">《火苗服务协议》</span>
    </div>

    <div class="mt-30">
      <div
        class="buyButton px-8 h-44 w-full rounded-22 flex justify-center items-center text-#fff text-16 font-500"
        @click="buyFlame"
      >
        <span>购买</span>
        <span>{{ showMoney }}</span>
      </div>
    </div>

    <div class="mt-15 flex justify-center items-center text-12">
      <span class="text-#8A8A8A">购买遇到问题？点击</span>
      <span class="font-600 text-#FF9500">联系在线客服</span>
    </div>
  </div>

  <!-- 中间横线 -->
  <div class="w-full h-6 bg-#F2F2F7"></div>

  <!-- 下方区域 -->
  <div class="px-16 pt-18">
    <div class="text-16 font-500">其他功能</div>
    <div class="mt-18 flex gap-10 flex-col">
      <div
        v-for="(item, index) in featureList"
        :key="index"
        class="w-full h-58 bg-#F6F7F9 rounded-16 flex justify-between items-center px-10"
      >
        <div class="flex justify-left items-center gap-8">
          <img :src="item.img" alt="" class="w-28 h-28" />
          <span>{{ item.value }}</span>
        </div>
        <img src="/images/right_arrow.png" alt="" class="w-16 h-16" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const flameList = [
  {
    id: 0,
    number: 420,
    money: '¥6.00',
  },
  {
    id: 1,
    number: 70,
    money: '¥1.00',
  },
  {
    id: 2,
    number: 1260,
    money: '¥6.00',
  },
  {
    id: 3,
    number: 4200,
    money: '¥60.00',
  },
  {
    id: 4,
    number: 7560,
    money: '¥108.00',
  },
  {
    id: 5,
    number: 20860,
    money: '¥298.00',
  },
];

const isSelectFlame = ref(0);
const showMoney = ref('¥6.00');
const selectFlame = (id: number) => {
  isSelectFlame.value = id;
  for (let i = 0; i <= flameList.length; i++) {
    if (i === id) {
      showMoney.value = flameList[i].money;
    }
  }
};

const buyFlame = () => {
  console.log('购买火苗');
};

const featureList = [
  {
    img: '/images/feature1.png',
    value: '已解锁组件',
  },
  {
    img: '/images/feature2.png',
    value: '在线客服',
  },
];
</script>

<style scoped lang="scss">
.flameBackground {
  width: 100%;
  height: 126px;
  border-radius: 16px;
  background-image: url('/images/flame_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.recommended {
  background: linear-gradient(96.58deg, #ff7658 12.81%, #ff544a 97.67%);
}

.buyButton {
  background: linear-gradient(271.27deg, #ff6429 2.49%, #ffa64d 153.15%);
}

.buyBox {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333%);
}
</style>
