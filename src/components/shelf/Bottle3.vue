<template>
	<div>
		<!-- 3 -->
		<svg class="bottle" x="0px" y="0px" viewBox="0 0 60 70">
			<g>
				<path class="st0" d="M49.04,50.89c0-8.89-6.1-16.33-14.34-18.43l3.36-19.72H21.93l2.24,20.03c-7.66,2.46-13.21,9.64-13.21,18.13
		c0,7.07,3.87,13.23,9.59,16.52h-0.03L18.76,70l20.56-0.05l-1.29-1.78H38C44.51,65.13,49.04,58.55,49.04,50.89z" />

				<polygon class="st1" points="23.19,19.47 22.09,8.64 37.62,9.9 36.49,19.47 	" />
				<polygon class="st2" points="37.47,11.16 25.26,12.34 25.26,19.47 23.19,19.47 22.09,8.64 37.62,9.9 	" />

				<polygon class="st3" points="20.3,5.9 21.43,10.49 38.35,10.49 39.47,5.93 	" />
				<polygon class="st4" points="20.83,6.13 38.68,6.45 37.62,10.23 32.9,10.23 32.83,7.12 	" />

				<path class="st5" d="M47.54,51.16c0,0.68-0.03,1.35-0.11,2c-0.65,6.69-4.6,12.31-10.06,15.02h0.03l1.19,1.76l-18.96,0.05l1.63-2.54
		c-4.74-2.95-8.11-8.17-8.69-14.29c-0.08-0.65-0.11-1.32-0.11-2c0-8.38,5.11-15.45,12.17-17.88l-2.06-19.75h14.86l-3.09,19.45
		C41.92,35.04,47.54,42.39,47.54,51.16z" />

				<path class="st6"
					d="M47.43,53.16c-0.65,6.69-4.6,12.31-10.06,15.02l-16.1-0.73c-4.74-2.95-8.11-8.17-8.69-14.29H47.43z" />
				<polygon class="st7" points="32.19,14.05 35.97,14.05 33.06,33.18 31.01,33.18 	" />
				<polygon class="st7" points="23.01,14.05 25.06,33.18 25.89,33.18 24.45,13.79 	" />
				<path class="st7"
					d="M30,35.78l7.62-0.47c0,0,13.86,12.68,1.85,30.61h-2.38C37.1,65.92,41.63,47.4,30,35.78z" />
				<path class="st7"
					d="M16.27,47.99h-2.95c0,0-0.42,13.65,8.77,18.93C22.09,66.91,14.85,61.14,16.27,47.99z" />
				<path class="st4" d="M31.04,59.46c0,1.42-1.15,2.58-2.58,2.58s-2.58-1.15-2.58-2.58c0-1.42,1.15-2.58,2.58-2.58
		S31.04,58.03,31.04,59.46z" />
				<path class="st4" d="M33.22,55.58c0,0.32-0.26,0.58-0.59,0.58c-0.32,0-0.59-0.26-0.59-0.58c0-0.32,0.26-0.59,0.59-0.59
		S33.22,55.26,33.22,55.58z" />
				<circle class="st4" cx="34.82" cy="63.63" r="1.59" />
			</g>
		</svg>
	</div>
</template>

<script>
  export default {
    name: 'bottle3'
  }
</script>

<style scoped>
.bottle {
	position: fixed;
	height: 20vh;
	top: 40vh;
	left: 36vw;
	animation: text-shadow 1.5s ease-in-out infinite;
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
		filter: drop-shadow(0 0 18px #FFD400);
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

.st0{opacity:0.1;fill:#313131;}
	.st1{fill:#E77231;}
	.st2{opacity:0.65;fill:#313131;}
	.st3{fill:#9C3536;}
	.st4{opacity:0.53;fill:#FFFFFF;}
	.st5{opacity:0.7;fill:#CFFFE8;}
	.st6{fill:#FFD400;}
	.st7{opacity:0.5;fill:#FFFFFF;}
</style>
