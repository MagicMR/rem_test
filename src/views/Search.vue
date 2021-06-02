<template>
    <div style="background-color: #f5f6fa;height: 100%">
        <v-row class="mt-1 mx-2 pt-2" no-gutters>
            <v-col cols="9">
                <v-text-field
                        label="搜索"
                        solo
                        dense
                        class="rounded-xl"
                ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-btn text color="primary" large @click="$router.go(-1)">
                    取消
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters class="mx-2 my-2 pt-2" style="background-color: white">
            <v-col cols="2" class="font-gray ml-3">
                联系人
            </v-col>
            <v-spacer/>
            <v-col cols="2" class="font-gray">
                查看更多&nbsp;
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters class="mx-2 my-2 pt-2" style="background-color: white">
            <v-col cols="2" class="font-gray ml-3">
                群聊
            </v-col>
            <v-spacer/>
            <v-col cols="2" class="font-gray">
                查看更多&nbsp;
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="2" class="pa-2">
                        <v-img src="../assets/touxiang.png" max-height="50px" contain/>
                    </v-col>
                    <v-col cols="8" class="pt-2">
                        <div>2018级软工程</div>
                        <div class="font-gray">来自：xx</div>
                    </v-col>
                    <v-col cols="2" class="pt-2">
                        <v-btn icon fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row no-gutters class="justify-center text-center py-3 mx-2 my-2" style="background-color: white">
            <v-col cols="12" class="mb-3 font-gray">搜索指定内容</v-col>
            <v-col cols="3">
                <v-icon>mdi-account</v-icon>
                <div class="font-gray">找人</div>
            </v-col>
            <v-col cols="3">
                <v-icon>mdi-account</v-icon>
                <div class="font-gray">找群</div>
            </v-col>
            <v-col cols="3">
                <v-icon>mdi-account</v-icon>
                <div class="font-gray">找人</div>
            </v-col>
            <v-col cols="3">
                <v-icon>mdi-account</v-icon>
                <div class="font-gray">找人</div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    .font-gray{
        color: #979fb4;
        font-size: 12px;
    }
</style>
