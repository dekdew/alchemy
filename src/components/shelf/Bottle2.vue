<template>
	<div>
		<!-- 2 -->
		<svg class="bottle" x="0px" y="0px" viewBox="0 0 60 70">
			<g>
				<path class="st0" d="M38.01,32.41c-0.06-0.63-0.18-1.24-0.36-1.83c-0.51-1.71-1.51-3.25-2.89-4.43l-2.32-1.98l0,0l0.03-0.53
		l0.02-0.31l0.07-1.05l0.38-5.99h0.01v-0.01l0.01-0.16l0.06-0.96v-0.08l0.11-1.54l0.01-0.21l0.03-0.55h-3.12l0,0h-3.12l0.71,11.39
		l-2.34,1.98c-0.01,0-0.02,0.01-0.02,0.01c-2.22,1.88-3.45,4.67-3.33,7.57l0.09,2.1l0,0l0.47,11.23v0.01l0.9,21.55
		c0.03,0.75,0.66,1.36,1.41,1.36l5.15,0.01l0,0h0.92L34.87,70c0.75,0,1.37-0.59,1.41-1.35l0.02-0.38l0.45-8.83v-0.01l0.29-5.76
		l0.86-17.1l0.1-2.03l0.04-0.77C38.06,33.32,38.06,32.87,38.01,32.41z M29.98,66.93l-0.01,3l0.01-8.91v1.44V66.93z M29.99,56.51
		v-0.59V56.51L29.99,56.51z M30,46.93V46.5l0,0V46.93z" />
				<polygon class="st1" points="33.63,13.33 33.17,16.28 26.73,16.27 26.34,13.32 	" />
				<path class="st2" d="M25.14,33.82c0,0,1.18-7.06,5.87-7.82s6.41,5.53,6.41,7.84s-0.53,9.31-0.53,9.31s0.3-9.4-0.82-10.53
		c-1.12-1.12-2.93-0.79-6.11-0.67C26.87,32.06,25.14,33.82,25.14,33.82z" />
				<path class="st3"
					d="M29.21,33.06h4.4L32.9,57.31h-0.95c0,0-0.36-21.75-0.36-22.78C31.58,33.51,29.21,33.06,29.21,33.06z" />
				<polygon class="st3" points="36.3,68.28 36.03,68.36 36.2,61.58 36.83,36.59 36.84,36.58 37.36,35.66 37.44,35.52 38,34.56 
		38.01,34.54 37.91,36.6 37.04,53.68 36.75,59.44 36.75,59.45 	" />
				<path class="st4" d="M32.94,16.28l-5.8-0.01l0.06,0.93l0.66,0.13l0.29,6.83c0,0-3.6,1.91-4.8,7.02c-0.98,4.15,1.48,38.8,1.48,38.8
		h3.55c0,0-0.9-35.27-0.39-38.47c0.52-3.21,1.55-7.35,1.55-7.35l-0.18-5.69L32.94,16.28z" />
				<polygon class="st2" points="30.98,18.04 32.56,16.79 31.76,23.91 30.95,23.79 	" />
				<polygon class="st2" points="31.76,13.53 33.17,13.54 32.94,15.91 31.6,15.75 	" />
				<polygon class="st4" points="27.12,15.9 26.92,13.53 29.49,13.53 29.23,15.9 	" />
				<polygon class="st5"
					points="32.94,16.28 32.43,24.17 31.94,24.08 32.5,16.83 32.53,16.53 32.56,16.28 	" />
				<polygon class="st5"
					points="33.63,13.33 33.17,16.28 32.94,16.28 32.95,16.12 33.08,14.38 33.12,13.54 33.17,12.78 	" />
				<path class="st6" d="M27.51,32.42l0.87,37.57h2.52l0.39-38.11C31.28,31.88,28.57,31.35,27.51,32.42z" />
			</g>
		</svg>
	</div>
</template>

<script>
  export default {
    name: 'bottle2'
  }
</script>

<style scoped>
.bottle {
	position: fixed;
	height: 20vh;
	top: 40vh;
	left: 28vw;
	animation: text-shadow 1.5s ease-in-out infinite;
	animation-delay: .3s;
}

@keyframes text-shadow {
    0% {  
        transform: translateY(0);
		filter: drop-shadow(0 0 9px #333);
    }

    25% {  
        transform: translateY(-0.5em);
		filter: drop-shadow(0 0 9px #333);
    }

    50% {  
        transform: translateY(0.5em);
		filter: drop-shadow(0 0 18px #2395A6);
    }
    
   75% {
        transform: translateY(-0.25em);
		filter: drop-shadow(0 0 9px #333);
    }

    100% {  
        transform: translateY(0);
		filter: drop-shadow(0 0 9px #333);
    }
}

.st0{fill:#2395A6;}
	.st1{fill:#571123;}
	.st2{opacity:0.62;fill:#FFFFFF;enable-background:new    ;}
	.st3{opacity:0.55;fill:#FFF6D6;enable-background:new    ;}
	.st4{opacity:0.53;fill:#7A1D23;enable-background:new    ;}
	.st5{fill:#FFF6D6;}
	.st6{opacity:0.2;fill:#FFF6D6;enable-background:new    ;}
</style>
