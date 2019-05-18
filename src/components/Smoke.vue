<template>
    <canvas id="particles"></canvas>
</template>

<script>
export default {
    name: 'smoke',
    props: ['show'],
    watch: {
        show: function () {
            build()
        }
    }
}
</script>

<style scoped>
#particles {
    z-index: 99999 !important;
    width: 100vw;
    position: fixed;
    left: 24vw;
    top: -25vh;
    pointer-events: none;
}
</style>

