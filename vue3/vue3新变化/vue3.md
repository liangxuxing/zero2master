
1. 同一个元素上面使用v-if和v-for的优先级已更改，不提倡同时写在同一级
2. 组件事件需要emit选项中声明
3. destoryed，beforedestoryed生命周期已更改为unmounted,beforeunmounted
4. 自定义指令的api已更改为于组件生命周期一致
5. 新增三个内置组件<Fragment>、<Suspendse>、<Teleport>.<Fragment>允许多个根节点，<Suspendse>可以在渲染等待时间内显示指定的内容(loading),<Teleport>可以传送包裹的内容到指定位置(遮罩)
6. 新增指令v-memo，允许缓存html模板，减少加载时间，代价是内存空间换时间
7. 用proxy来代替Object.defineProperties来劫持数据.可以监听到数组下标变化。因为坚持的是对象而不是对象属性，还可以拦截apply,has等13种方法
8. 重构了虚拟Dom,改进了Diff算法。在编译时会将事件缓存，将slot编译为lazy函数，保存静态节点直接复用(静态提升).以及添加静态标记,Diff算法使用最长递增子序列优化比对流程，使得虚拟Dom生成速度提升200%
9. 支持在<style>里使用v-bind，给CSS绑定JS变量
10. 新的Composition API可以有更好的逻辑复用和代码组织，同一功能的代码不至于像以前一样太分散，虽然VUE2也可以用mixin来复用代码，但是Mixin会带来属性名重名冲突，方法名重名冲突，以及代码来源不明等一系列问题
11. 全局函数set,delete以及实例方法$set、$delete已经删除，因为现在已经使用了proxy代理
12. vue3使用ts重新编写，对ts语法的兼容会更好，拥抱ts已经在所难免
13. vue3不再兼容ie11，因为proxy语法在ie11不兼容
14. $on,$off和$once实例方法已经删除，组件实例不再实现 事件触发接口

