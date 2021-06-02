<template>
    <div style="min-height: 100%">
        <div id="headbar">
            <head-bar></head-bar>
        </div>
        <div style="position: absolute;top: 9%;width: 100%">
            <v-row class="justify-center" no-gutters>
                <v-col cols="10" class="mx-2 mt-2">
                    <v-btn block class="rounded-xl elevation-0"
                           color="white"
                           id="searchBtn"
                           @click="handleJump('/search')"
                    >
                        <v-icon>mdi-magnify</v-icon>
                        搜索
                    </v-btn>
                </v-col>
                <v-btn block class="elevation-0"
                       color="#faf6fa"
                >
                    <v-col cols="12" style="background-color: #f4f6fa">
                        <v-row>
                            <v-col cols="1">
                                <v-icon>mdi-laptop</v-icon>
                            </v-col>
                            <v-col cols="1"></v-col>
                            <v-col cols="5">
                                windows&nbsp;QQ&nbsp;已登录
                            </v-col>
                            <v-spacer/>
                            <v-col cols="1">
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-btn>
            </v-row>
            <v-divider class="mt-2"/>
            <v-row no-gutters @click="handleJump('chat')">
                <v-col cols="2" class="pa-2">
                    <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                </v-col>
                <v-col cols="8" class="pt-2">
                    <div>2018级软工程</div>
                    <div class="messageDate">xx-学习委员：[文件]。。。。</div>
                </v-col>
                <v-col cols="2" class="pt-2">
                    <div class="messageDate">上午&nbsp;11:39</div>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2" class="pa-2">
                    <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                </v-col>
                <v-col cols="8" class="pt-2">
                    <div>2018级软工程</div>
                    <div class="messageDate">xx-学习委员：[文件]。。。。</div>
                </v-col>
                <v-col cols="2" class="pt-2">
                    <div class="messageDate">上午&nbsp;11:39</div>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2" class="pa-2">
                    <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                </v-col>
                <v-col cols="8" class="pt-2">
                    <div>2018级软工程</div>
                    <div class="messageDate">xx-学习委员：[文件]。。。。</div>
                </v-col>
                <v-col cols="2" class="pt-2">
                    <div class="messageDate">上午&nbsp;11:39</div>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="2" class="pa-2">
                    <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                </v-col>
                <v-col cols="8" class="pt-2">
                    <div>2018级软工程</div>
                    <div class="messageDate">xx-学习委员：[文件]。。。。</div>
                </v-col>
                <v-col cols="2" class="pt-2">
                    <div class="messageDate">上午&nbsp;11:39</div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import HeadBar from "../components/HeadBar";
    export default {
        name: "ShowMessage",
        components: {HeadBar},
        methods:{
            handleJump(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    #headbar{
        height: 8%;
        /*max-height: 100px;*/
        width: 100%;
        background: #01baff;
        position: fixed;
    }
    #searchBtn{
        height: 25px;
        color: gray;
    }
    .messageDate{
        font-size: 10px;
        color: gray;
    }
</style>
