<template>
  <div class="home">
    <el-row>
      <el-button type="primary" @click="click()">Primary</el-button>
    </el-row>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  methods: {
    click() {
      alert("www");
    },
  },
})
export default class HomeView extends Vue {}
</script>
