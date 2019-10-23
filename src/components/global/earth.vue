<template>
    <div class="earth">
        <div id="quake-info"><div><span></span></div></div>
        <canvas id="globekit-canvas" width="1024" height="1024"></canvas>
    </div>

</template>
<script>
export default {
  name: 'earth',
  mounted () {
    TheGlobe.init()
    TheGlobe.fontsDidActivate()
  }
}
</script>

<style scoped lang="scss">
    .earth{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
