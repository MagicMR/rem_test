<template>
    <div style="min-height: 93%">
        <div id="headbar">
            <head-bar></head-bar>
        </div>
    </div>
</template>

<script>
    import HeadBar from "../components/HeadBar";
    export default {
        name: "ContactPerson",
        components: {HeadBar}
    }
</script>

<style scoped>
    #headbar{
        height: 8%;
        width: 100%;
        background: #01baff;
        position: fixed;
    }
</style>
