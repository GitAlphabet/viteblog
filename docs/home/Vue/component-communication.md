### 组件间通讯

#### 父组件给子组件传参

```html
/*父组件*/
<template>
  <div>
    <son :father="msg"></son> //在子组件绑定所需要传的参数
  </div>
</template>

<script>
import son from "../components/son ";
export default {
  data() {
    return {
      msg: "父组件hellow数据！"
    };
  },
  components: { son }
};
</script>

/*子组件*/
<template>
  <div>
    <p>{{father}}</p>
  </div>
</template>

<script>
export default {
  props: ["father"]      //props监听父组件传来的参数，需要和绑定在子组件上面的一致
  }
</script>
```

#### 子组件给父组件传参

```html
/*子组件*/
<template>
  <div>
    <p @click="sonClick">我是子组件组件</p>
  </div>
</template>

<script>
  export default {
   data() {
      return {
        msg: "我是子组件！",
      };
    },
   methods: {
      sonClick() {
        this.$emit("aaa", this.msg); // 触发 aaa 事件，附加参数都会传给监听器回调。
      }
    },
</script>
```

```html
/*父件*/
<template>
  <div>
    <son @aaa="change"></son> //监听子组件 $emit 里面的事件参数 aaa
  </div>
</template>

<script>
  import son from '../components/son '
  export default {
    data() {
      return {
        sonData: ''
      }
    },
    methods: {
      change(data) {
        // change 是  @aaa = "change" 的 change
        this.sonData = data
      }
    },
    components: { son }
  }
</script>

子组件： this.$emit("eventName"，[args]) eventName:事件名 [args]：参数 父组件：
在父组件里面的子组件身上绑定 @eventName = "c" methods: { getSonData(data) {
this.sonData= data; } }
```

#### 非父子组件传参数(也可以使用 vuex)

```html
新建 bus.js 文件，实例全局的 vue 实例 ，文件内容如下：
import Vue from 'vue';
export default new Vue();
两个组件都要导入 bus.js

父组件：
<template>
  <div>
    <son1><son1>
    <son2><son2>
  </div>
</template>

组件son1发出事件：
<template>
  <div @click="toSon2"></div>
</template>

<script>
import bus from '../js/bus'              //引入bus.js
export default {
  data() {
    return {};
  },
  methods: {
      toSon2(){
        bus.$emit("toSon2Data",this.brother)
      }
  }
};
</script>

组件son2监听组件1发出的事件：
<template>
  <div @click="toSon2"></div>
</template>

<script>
import bus from '../js/bus'
export default {
  data() {
    return {
      brother :""
    }
  },
  created() {
    bus.$on("toSon2Data",(val)=>{
      this.brother = val;
    });
  }
};
</script>
```
