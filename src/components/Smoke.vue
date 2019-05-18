<template>
    <div class="smoke">
        <div id="flash" class="flash"></div>
        <canvas id="particles"></canvas>
    </div>
</template>

<script>
let randomColor = require('randomcolor')

export default {
    name: 'smoke',
    props: ['show', 'rnd'],
    data() {
        return {
            hue: ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'yellow', 'monochrome']
        }
    },
    watch: {
        show: function () {
            build()

            let rnd = this.rnd
            let flash = document.getElementById("flash");
            flash.style.backgroundImage = 'radial-gradient(circle at right,' + randomColor({
                luminosity: 'light',
                hue: this.hue[rnd]
            }) + ', #0000)'
            flash.classList.remove("flash");
            void flash.offsetWidth;
            flash.classList.add("flash");


        }
    }
}
</script>

<style scoped>
.smoke {
    pointer-events: none;
}

#flash {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle at right, #fff, #0000);
    opacity: 0;
}

.flash {
    animation: flash ease-in .9s 1;
}

@keyframes flash {
    0% {  
        opacity: 0;
    }

    25% {  
        opacity: .8;
    }

    50% {  
        opacity: .25;
    }
    
   75% {
        opacity: .05;
    }

    100% {  
        opacity: 0;
    }
}

#particles {
    z-index: 99999 !important;
    width: 100vw;
    position: fixed;
    left: 24vw;
    top: -25vh;
}
</style>

