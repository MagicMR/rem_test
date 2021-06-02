<template>
  <div style="height: 100%;width: 100%">
    <v-main id="main">
      <router-view/>
    </v-main>
    <v-card id="footbar" class="rounded-0">
      <v-row class="text-center">
        <v-col cols="3" @click="handleJump('showMessage')">
          <v-icon>mdi-message-processing-outline</v-icon>
          <div class="footer-subtitle">消息</div>
        </v-col>
        <v-col cols="3" @click="handleJump('contactPerson')">
          <v-icon>mdi-account-circle-outline</v-icon>
          <div class="footer-subtitle">联系人</div>
        </v-col>
        <v-col cols="3">
          <v-icon>mdi-eye-settings-outline</v-icon>
          <div class="footer-subtitle">看点</div>
        </v-col>
        <v-col cols="3">
          <v-icon>mdi-star-plus-outline</v-icon>
          <div class="footer-subtitle">动态</div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>

  import HeadBar from "../components/HeadBar";
  export default {
    name: 'Home',
    components: {HeadBar},
    data:()=>({

    }),
    methods:{
      handleJump(path){
        this.$router.push(path);
      }
    }
  }
</script>
<style>
  #main{
    width: 100%;
    height: 94%;
    background: #f4f6fa;
    position: absolute;
    top: -1%;
  }
  #footbar{
    height: 7%;
    width: 100%;
    background: #f4f6fa;
    position: fixed;
    bottom: 0;
  }
  #footbar .footer-subtitle{
    font-family: "等线 Light",serif;
    font-size: 10px;
  }
</style>
