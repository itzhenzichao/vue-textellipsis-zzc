<template>
  <div class="textellipsis-demo">
    <div class="demo-header">
      <h1 class="demo-title">TextEllipsis 文本省略</h1>
      <p class="demo-desc">vue-textellipsis-zzc</p>
    </div>

    <section class="panel">
      <h2 class="panel-title">预览效果</h2>
      <div class="preview-box">
        <text-ellipsis
          :text="text"
          :height="60"
          :textStyle="textStyle"
          :isLimitHeight="isLimitHeight"
          @click="textClick"
        >
          <template slot="before">
            <span class="tag">标签</span>
          </template>
          <template slot="more">
            <span>...</span>
            <span class="link" @click.stop="isLimitHeight = false">查看更多</span>
          </template>
          <span
            slot="after"
            class="link"
            v-if="!isLimitHeight"
            @click="isLimitHeight = true"
          >收起</span>
        </text-ellipsis>
      </div>
    </section>

    <section class="panel">
      <h2 class="panel-title">Props 说明</h2>
      <table class="props-table">
        <thead>
          <tr>
            <th>属性</th>
            <th>类型</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text</td>
            <td>String</td>
            <td>-</td>
            <td>需要显示的文本内容</td>
          </tr>
          <tr>
            <td>height</td>
            <td>Number</td>
            <td>-</td>
            <td>限制的最大高度（px），超出时截断并显示"更多"</td>
          </tr>
          <tr>
            <td>isLimitHeight</td>
            <td>Boolean</td>
            <td>true</td>
            <td>是否启用高度限制，false 时展开全部文本</td>
          </tr>
          <tr>
            <td>textStyle</td>
            <td>String / Object / Array</td>
            <td>-</td>
            <td>文本区域的样式</td>
          </tr>
          <tr>
            <td>textClass</td>
            <td>String / Object / Array</td>
            <td>-</td>
            <td>文本区域的类名</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2 class="panel-title">Slots 说明</h2>
      <table class="props-table">
        <thead>
          <tr>
            <th>Slot</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>before</td>
            <td>文本前置内容，如标签、图标</td>
          </tr>
          <tr>
            <td>more</td>
            <td>截断时显示的"更多"内容</td>
          </tr>
          <tr>
            <td>after</td>
            <td>文本后置内容，如"收起"按钮</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <h2 class="panel-title">使用示例</h2>
      <div class="block">
        <h3>1. 安装依赖</h3>
        <pre><code>npm install vue-textellipsis-zzc</code></pre>
      </div>

      <div class="block">
        <h3>2. 引入并注册</h3>
        <pre><code>import Vue from "vue";
import textellipsis from "vue-textellipsis-zzc";
Vue.use(textellipsis);</code></pre>
      </div>

      <div class="block">
        <h3>3. 组件使用</h3>
        <pre><code>&lt;template&gt;
  &lt;text-ellipsis
    :text="text"
    :height="60"
    :textStyle="textStyle"
    :isLimitHeight="isLimitHeight"
    @click="textClick"
  &gt;
    &lt;template slot="before"&gt;
      &lt;span class="tag"&gt;标签&lt;/span&gt;
    &lt;/template&gt;
    &lt;template slot="more"&gt;
      &lt;span&gt;...&lt;/span&gt;
      &lt;span class="link" @click.stop="isLimitHeight = false"&gt;查看更多&lt;/span&gt;
    &lt;/template&gt;
    &lt;span
      slot="after"
      class="link"
      v-if="!isLimitHeight"
      @click="isLimitHeight = true"
    &gt;收起&lt;/span&gt;
  &lt;/text-ellipsis&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isLimitHeight: true,
      textStyle: "color:#4e5969;font-size:14px;line-height:1.6;",
      text: "长文本内容...",
    };
  },
  methods: {
    textClick() {},
  },
};
&lt;/script&gt;

&lt;style&gt;
.tag {
  display: inline-block;
  background: #e6f7ff;
  color: #1677ff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #91d5ff;
  margin-right: 6px;
  vertical-align: middle;
}
.link {
  cursor: pointer;
  color: #1677ff;
  font-size: 14px;
}
&lt;/style&gt;</code></pre>
      </div>

      <div class="tips">
        <strong>提示</strong>：文本省略基于 DOM 高度测量实现，而非 CSS line-clamp。因此支持所有 CSS 样式（字体大小、行高、内边距等），在任意布局场景下都能准确截断。
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isLimitHeight: true,
      textStyle: "color:#4e5969;font-size:14px;line-height:1.6;",
      text: "晨光漫过山峦，薄雾还缠在苍翠的林间。山间溪流蜿蜒，清凌凌的泉水撞击卵石，漾开细碎涟漪。岸边草木繁茂，各色野花随风轻晃，偶有蝶雀起落。日头渐升，雾气缓缓消散，远山褪去朦胧，显出温润的青黛色。林下落满斑驳光影，清风裹挟草木与泥土的淡香。四下安宁，只余流水与鸟鸣，置身此间，心头浮躁尽数被山野温柔抚平。",
    };
  },
  methods: {
    textClick() {},
  },
};
</script>

<style>
.textellipsis-demo {
  color: #1f2329;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  max-width: 1000px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 32px;
}

.demo-title {
  font-size: 32px;
  margin: 0 0 8px 0;
  color: #1f2329;
}

.demo-desc {
  font-size: 14px;
  color: #4e5969;
  margin: 0;
}

.panel {
  border: 1px solid #e5e6eb;
  border-radius: 12px;
  background: #fff;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.panel-title {
  margin: 0 0 24px 0;
  font-size: 20px;
  font-weight: 600;
  color: #1d2129;
}

.preview-box {
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background: #fafafa;
  padding: 16px;
}

.tag {
  display: inline-block;
  background: #e6f7ff;
  color: #1677ff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #91d5ff;
  margin-right: 6px;
  vertical-align: middle;
}

.link {
  cursor: pointer;
  color: #1677ff;
  font-size: 14px;
}

.props-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.props-table th {
  background: #f7f8fa;
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #1d2129;
  border-bottom: 1px solid #e5e6eb;
}

.props-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f2;
  color: #4e5969;
}

.props-table code {
  background: #f2f3f5;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
  color: #c41d7f;
}

.block {
  margin-bottom: 24px;
}

.block h3 {
  font-size: 18px;
  margin-bottom: 12px;
  color: #1d2129;
}

pre {
  background: #f2f3f5;
  padding: 12px;
  border-radius: 8px;
  overflow: auto;
}

code {
  font-size: 13px;
}

.tips {
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: #003a8c;
}
</style>