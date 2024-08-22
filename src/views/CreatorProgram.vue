<template>
  <div class="bg-#CEE7FF w-full h-full relative top-0 left-0 text-#0F0F0F">
    <img src="/creatorProgram/backgroundImg.png" alt="" class="w-full h-407" />
    <div
      class="bg-#fff w-full h-full rounded-20 absolute top-202 left-0 pt-27 pl-20"
    >
      <div class="pr-20 pr-20">
        <div class="flex items-center justify-left gap-6">
          <div class="w-4 h-19 bg-#0A7AFF"></div>
          <div class="font-500 text-18">热度提升与奖励机制</div>
        </div>
        <div class="mt-24" v-for="(item, index) in unlockList" :key="index">
          <div class="flex items-center justify-left gap-4 mt-14">
            <img :src="item.img" alt="" class="w-20 h-20" />
            <div>{{ item.title }}</div>
          </div>
          <div class="mt-10">
            <ul class="" v-for="(sonItem, index) in item.value" :key="index">
              <li class="text-12 text-#8A8A8A">
                {{ sonItem }}
              </li>
            </ul>
          </div>
          <div
            class="mt-14 flex justify-start items-center gap-4 w-full rounded-10 px-8 py-10"
            :class="item.color"
          >
            <img src="/creatorProgram/corrent.png" alt="" class="w-14 h-14" />
            <span class="text-12 font-500">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <div class="mt-38 pr-20">
        <div class="flex items-center justify-left gap-6">
          <div class="w-4 h-19 bg-#0A7AFF"></div>
          <div class="font-500 text-18">计划亮点</div>
        </div>
        <div class="text-12 text-#8A8A8A mt-10">
          在您的累计奖励未达到5000元之前，您将享受作品奖励的全部收益！我们不收取任何费用，全力支持您的创作之旅，让您尽享创作成果。
        </div>
        <div class="mt-10 rounded-12 overflow-hidden text-12">
          <table class="tableBorder">
            <tr>
              <th>累计奖励范围</th>
              <th>分成比例</th>
              <th>创作者所得</th>
              <th>平台所得</th>
            </tr>
            <tr>
              <td>{{ '<5000元' }}</td>
              <td>100%</td>
              <td class="text-#0A7AFF">100%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>{{ '≥5000元' }}</td>
              <td>95%</td>
              <td class="text-#0A7AFF">95%</td>
              <td>5%</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="mt-38 pr-20">
        <div class="flex items-center justify-left gap-6">
          <div class="w-4 h-19 bg-#0A7AFF"></div>
          <div class="font-500 text-18">首充奖励</div>
        </div>
        <div class="mt-10 text-12 text-#8A8A8A">
          <span>首次充值的用户将为您带来充值金额的</span>
          <span class="font-600 text-#FF9500">10%额外奖励</span>
          <span>
            。我们推出这一机制是为了感谢您在推广中的付出。您不仅能享受推广的成果，还能获得额外的回报，让您的努力得到更多认可。
          </span>
        </div>
        <div class="mt-10 w-full bg-#F6F7F9 py-8 px-10 rounded-10">
          <div class="text-12">
            <span class="font-500">
              机制说明: 当您推广的用户首次充值时，您将获得额外的10%奖励。
            </span>
            <span class="text-#8A8A8A">
              例如，如果用户充值100元，您将获得10元的额外奖励。
            </span>
          </div>
          <div class="text-12 mt-10">
            <span class="font-500">适用范围: 适用于所有首次充值的用户</span>
            <span class="text-#8A8A8A">
              ，无论充值金额大小，均按10%奖励比例计算。
            </span>
          </div>
        </div>
      </div>
      <div class="mt-38 pb-80">
        <div class="flex items-center justify-left gap-6">
          <div class="w-4 h-19 bg-#0A7AFF"></div>
          <div class="font-500 text-18">常见问题</div>
        </div>
        <div
          class="flex overflow-x-scroll gap-10 mt-10 w-full scrollbar-hidden"
        >
          <div
            v-for="(item, index) in commonProblem"
            :key="index"
            class="bg-#F6F7F9 px-14 py-10 text-12 rounded-10 w-258 h-127"
          >
            <div class="w-258 whitespace-nowrap">
              {{ item.title }}
            </div>
            <div class="mt-5 text-#8A8A8A">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed bottom-0 left-0 z-999 py-14.5 px-20 bg-#fff w-full flex justify-between"
    >
      <div class="flex items-center gap-8">
        <img
          src="/creatorProgram/avatar.webp"
          alt=""
          class="w-40 h-40 rounded-50%"
        />
        <div class="flex flex-col">
          <div class="text-15 font-500">过期奶茶</div>
          <div class="flex items-center text-#FF9500">
            <img src="/creatorProgram/flame2.png" alt="" class="w-9 h-12" />
            <span class="text-12">总热度值: 203</span>
          </div>
        </div>
      </div>

      <div
        class="bg-#0A7AFF text-#fff rounded-35 flex items-center justify-center px-12 py-10"
      >
        <div>已加入创作者计划</div>
        <img src="/creatorProgram/right_arrow2.png" alt="" class="w-16 h-16" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAdvertisement = ref(true);
const isFlame = ref(false);
const advertisementHeatNum = ref(323);
const flameHeatNum = ref(199);
const flamePeopleNum = ref(788);
const unlockList = ref([
  {
    img: '/creatorProgram/unlock1.png',
    title: '观看广告解锁',
    value: [
      '用户通过观看广告解锁您的作品，为您增加热度。广告价值的火苗是动态的，会根据广告平台的 CPM 报价实时调整，让您的奖励更具潜力。',
    ],
    text: isAdvertisement.value
      ? '已达成: 热度值2000'
      : `加入条件：热度值2000（还差${advertisementHeatNum.value}）`,
    color: isAdvertisement.value ? 'bg-#10D0401A' : 'bg-#FF95001A',
  },
  {
    img: '/images/flame.png',
    title: '火苗解锁',
    value: [
      '用户使用火苗解锁您的作品，为您增加热度。每100火苗=1.00人民币。',
      '假设作品获得 10000 热度，您将直接获得100元奖励。',
    ],
    text: isFlame.value
      ? '已达成: 热度值5000，助燃人数300'
      : `加入条件：热度值5000（还差${flameHeatNum.value}），助燃人数300（还差${flamePeopleNum.value}人）`,
    color: isFlame.value ? 'bg-#10D0401A' : 'bg-#FF95001A',
  },
]);

const commonProblem = [
  {
    title: '如何计算热度值？',
    value:
      '通过用户使用火苗解锁和观看广告解锁作品所产生的数值累计计算。每 100 热度值等价于 1.00 元人民币的收益潜力（火苗解锁），观看广告解锁的热度值价值会根据广告平台的 CPM 实时报价动态变化。',
  },
  {
    title: '为什么要在收益达到 5000 元后进行抽成？',
    value:
      '当您的创作取得一定成果，平台也需要投入更多资源来持续优化服务和推广，以支持您获得更大的成功。',
  },
];
</script>

<style scoped lang="scss">
.tableBorder {
  border-collapse: collapse;
  width: 100%;
  height: 102;
  border-radius: 12;
  th {
    border: 0.7px solid #0a7aff24;
    padding: 8px 8px 8px 12px;
    text-align: left;
    background-color: #0a7aff1a;
  }
  td {
    border: 0.7px solid #0a7aff24;
    padding: 8px 8px 8px 12px;
    text-align: left;
  }
}
</style>
