<template>
    <div style="background-color: #01baff">
        <v-row no-gutters class="mt-3 mx-3">
            <v-col cols="2">
                <v-img src="../assets/touxiang.png" max-height="40px" contain></v-img>
            </v-col>
            <v-col cols="4">
                <div id="name">万能的魔术菇</div>
                <div id="status">手机在线-WIFI</div>
            </v-col>
            <v-spacer/>
            <v-col cols="1" class="pt-1">
                <v-icon>mdi-camera-wireless-outline</v-icon>
            </v-col>
            <v-col cols="1" class="pt-1">
                <v-icon>mdi-plus</v-icon>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "HeadBar",
        props:{
            avatar:'',
            name:'万能的魔术菇',
            status:true,

        }
    }
</script>

<style scoped>

     #name{

    }
     #status{
        font-size: 10px;
    }
</style>
