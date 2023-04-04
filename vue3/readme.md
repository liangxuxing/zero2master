# vue3笔记

## Vue3 简介和安装

- ### Vue3 与 Vue2 的区别

  1. 性能更好：Vue3 对虚拟 DOM 的处理和 diff 算法进行了优化，使得在大型应用中渲染和更新速度更快。
  2. 更小更快：Vue3 的体积比 Vue2 更小，而且在编译阶段进行了 Tree-shaking 和 codegen 优化，生成的代码更加高效。
  3. 更好的 TypeScript 支持：Vue3 对 TypeScript 的支持更加友好，提供了完整的声明文件，并且支持了更多的类型推断和类型检查。
  4. Composition API：Vue3 引入了 Composition API，提供了一种新的组件设计方式，可以更好地组织和复用逻辑，同时也能够提升代码的可读性和可维护性。
  5. 更好的响应式系统：Vue3 的响应式系统进行了优化，支持了 Proxy，可以更好地追踪数据的变化。
  6. Teleport：Vue3 引入了 Teleport 组件，可以更方便地实现组件在 DOM 树中的位置变化。
  7. 其他改进：Vue3 还对指令、插槽、渲染函数、动态组件等方面进行了改进和优化，提供了更好的开发体验和更多的功能。

- Vue3 的优点
- 安装 Vue3

## Vue3 的基本语法

### Vue3 实例和组件

- 在 Vue3 中，我们可以使用 `setup` 语法糖来创建 Vue 实例。`setup` 函数接收两个参数：`props` 和 `context`。

  下面是一个使用 `setup` 语法糖创建 Vue 实例的示例：

  ```typescript
  import { defineComponent ,createApp} from 'vue';
  
  interface Props {
    title: string;
  }
  
  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true
      }
    },
    setup(props: Props) {
      const handleClick = (): void => {
        console.log('Button clicked!');
      };
  
      return {
        handleClick
      };
    },
    template: `
      <div>
        <h1>{{ title }}</h1>
        <button @click="handleClick">Click me</button>
      </div>
    `
  });
  createApp({
    render() {
      return <App title="Hello, Vue3!" />;
    }
  }).mount('#app');
  ```

  上面的代码中，我们首先定义了一个 `App` 组件，使用 `props` 属性定义了一个属性 `title`，在 `setup` 函数中定义了一个 `handleClick` 方法，并将其返回。然后，在 `template` 中使用这些数据和方法来渲染组件。

  在 `createApp` 函数中，我们使用 `render` 函数来渲染组件，并将 `App` 组件作为参数传递，同时给 `title` 属性传递了一个值。最后，我们调用 `mount` 函数来将 Vue 实例挂载到 DOM 元素上。

  需要注意的是，在 `setup` 函数中，我们不能使用 `this`，而是需要通过参数来访问组件实例的属性和方法。

  

  ### 计算属性和监听器

  在 Vue3 中，计算属性和监听器的使用方式与 Vue2 中基本相同。

  计算属性是一个根据其他属性计算得出的属性，使用起来非常方便。在 Vue3 中，计算属性可以使用 `computed` 函数来创建，例如：

  ```typescript
  import { defineComponent, computed, watch } from 'vue';
  
  interface Props {
    firstName: string;
    lastName: string;
  }
  
  export default defineComponent({
    props: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      }
    },
    setup(props: Props) {
      const fullName = computed(() => {
        return `${props.firstName} ${props.lastName}`;
      });
  
      watch(fullName, (newVal: string, oldVal: string) => {
        console.log(`fullName changed from ${oldVal} to ${newVal}`);
      });
  
      return {
        fullName
      };
    },
    template: `
      <div>
        <h1>{{ fullName }}</h1>
      </div>
    `
  });
  ```

  

- 生命周期

## Vue3 的核心功能

- 响应式数据

  在 Vue3 中，响应式数据的底层实现采用了 Proxy 对象和 Reflect API。具体来说，每个响应式对象都会被包装成一个 Proxy 对象，然后使用 Reflect API 来代理对响应式对象的读写操作。当访问响应式对象的属性时，Proxy 对象会自动进行依赖收集，将访问该属性的代码存储起来，当该属性发生变化时，Proxy 对象会自动触发更新，通知所有依赖该属性的代码进行更新操作。

  具体来说，当我们在 `setup` 函数中定义一个响应式数据时，例如：

  ```typescript
  javascriptCopy codeimport { reactive } from 'vue';
  
  const state = reactive({
    count: 0
  });
  ```

  这里的 `state` 对象会被包装成一个 Proxy 对象，然后我们可以通过 `state.count` 来访问它的属性。当我们访问 `state.count` 时，Proxy 对象会自动进行依赖收集，将访问该属性的代码存储起来。当 `state.count` 发生变化时，Proxy 对象会自动触发更新，通知所有依赖该属性的代码进行更新操作。

  需要注意的是，在 Vue3 中，响应式数据的更新是异步的，会在下一个 tick 中进行。这意味着如果在同一个 tick 中多次修改同一个响应式数据的属性，只会触发一次更新操作，以提高性能。如果需要立即更新响应式数据，可以使用 `triggerRef` 函数来手动触发更新。

- 模板指令

- 组件通信

- 插槽

- 动态组件

## Vue3 的高级功能

- 自定义指令
- Teleport
- Suspense
- Fragments
- Composables

## Vue3 的工具和生态系统

- Vue CLI
- Vue Router
- Vuex
- Vue Test Utils
- 第三方库和插件

## Vue3 的性能优化

- 编译器的优化
- 响应式系统的优化
- 组件的优化
- 代码分离

1. Vue3 的部署和发布

- 生产环境配置
- 打包和优化
- 部署和发布