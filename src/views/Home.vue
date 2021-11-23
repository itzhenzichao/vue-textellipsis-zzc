<template>
  <div class="home">
    <div style="width: 200px">
      <text-ellipsis
        :text="text"
        :height="50"
        :textStyle="textStyle"
        :textClass="textClass"
        :isLimitHeight="isLimitHeight"
        @click="textClick"
      >
        <template slot="before"><button>标签</button></template>
        <template slot="more"
          ><span>...</span
          ><span class="link" @click.stop="isLimitHeight = false"
            >查看更多</span
          ></template
        >
        <span
          slot="after"
          class="link"
          v-if="!isLimitHeight"
          @click="isLimitHeight = true"
          >收起</span
        >
      </text-ellipsis>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isLimitHeight: true,
      textStyle: "color:skyblue;",
      textClass: "yourClass",
      text: "测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本",
    };
  },
  methods: {
    textClick() {},
  },
};
</script>
<style>
.yourClass {
}
</style>
