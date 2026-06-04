# vue-textellipsis-zzc

> 基于 DOM 高度测量的 Vue2 文本省略组件，支持多行截断与展开收起

[![npm version](https://img.shields.io/npm/v/vue-textellipsis-zzc.svg)](https://www.npmjs.com/package/vue-textellipsis-zzc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 详细使用文档 (必看)

<div align="center">
  <br />
  <a href="https://itzhenzichao.github.io/vue2-plugins/#/vue-textellipsis-zzc">
    <img src="https://img.shields.io/badge/查看在线文档与演示-1677ff?style=for-the-badge&logo=googledocs&logoColor=white" alt="Online Documentation" />
  </a>
  <br />
</div>

## 特性

- **多行省略** — 基于 DOM 实际渲染高度判断，比 CSS `-webkit-line-clamp` 更精准
- **展开收起** — 内置截断/展开状态切换，配合 `more` 和 `after` 插槽轻松实现交互
- **自适应更新** — 监听文本、高度、限制状态变化，自动重新计算截断位置
- **自定义样式** — 支持通过 props 传入样式和类名，灵活控制文本外观
- **零依赖** — 不依赖任何第三方库，轻量高效

## 安装

```bash
npm install vue-textellipsis-zzc

yarn add vue-textellipsis-zzc

pnpm add vue-textellipsis-zzc
```

## 快速开始

### 注册插件

```javascript
import Vue from 'vue'
import Textellipsis from 'vue-textellipsis-zzc'

Vue.use(Textellipsis)
```

### 基础使用

```vue
<template>
  <text-ellipsis
    :text="text"
    :height="50"
    :isLimitHeight="isLimitHeight"
    @click="textClick"
  >
    <template slot="more">
      <span>...</span>
      <span class="link" @click.stop="isLimitHeight = false">查看更多</span>
    </template>
  </text-ellipsis>
</template>

<script>
export default {
  data() {
    return {
      isLimitHeight: true,
      text: '这是一段很长的文本内容，超出限制高度后会自动截断并显示更多链接',
    }
  },
  methods: {
    textClick() {
      console.log('文本被点击')
    }
  }
}
</script>
```

## 配置选项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `String` | — | **必填**，需要进行省略处理的文本内容 |
| `height` | `Number` | — | **必填**，文本区域的限制高度（px），超出此高度时触发截断 |
| `isLimitHeight` | `Boolean` | `true` | 是否启用高度限制省略，`false` 时显示完整文本 |
| `textStyle` | `String \| Object \| Array` | — | 应用到内部文本元素的自定义样式 |
| `textClass` | `String \| Object \| Array` | — | 应用到内部文本元素的自定义 CSS 类 |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| `before` | 文本省略区域之前插入的自定义内容（如标签、图标） |
| `more` | 截断文本末尾的"更多"提示内容，文本被截断时显示，未截断时隐藏 |
| `after` | 文本省略区域之后插入的自定义内容（如"收起"按钮） |

## 使用场景

### 场景 1：展开收起交互

```vue
<template>
  <div style="width: 200px">
    <text-ellipsis
      :text="text"
      :height="50"
      :isLimitHeight="isLimitHeight"
    >
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
</template>

<script>
export default {
  data() {
    return {
      isLimitHeight: true,
      text: '很长很长的文本内容...',
    }
  }
}
</script>
```

### 场景 2：带前置标签的省略

```vue
<template>
  <text-ellipsis :text="text" :height="40">
    <template slot="before">
      <span class="tag">公告</span>
    </template>
    <template slot="more">
      <span>...</span>
      <a @click.stop="goDetail">查看详情</a>
    </template>
  </text-ellipsis>
</template>
```

### 场景 3：自定义文本样式

```vue
<template>
  <text-ellipsis
    :text="text"
    :height="60"
    :textStyle="{ color: '#1677ff', fontSize: '14px' }"
  >
    <template slot="more">
      <span style="color: #999">...</span>
    </template>
  </text-ellipsis>
</template>
```

## License

[MIT](LICENSE)