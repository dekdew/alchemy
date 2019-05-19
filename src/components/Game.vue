<template>
	<div>
		<board :multiple="multiple[next]"/>

		<mirror @clicked="onClickMirror" :coin="coin"/>

		<bottle1 v-if="bottle[1]" :class="{'pointer-none': end}" @click.native="selectBottle(1)"/>

		<bottle2 v-if="bottle[2]" :class="{'pointer-none': end}" @click.native="selectBottle(2)"/>

		<bottle3 v-if="bottle[3]" :class="{'pointer-none': end}" @click.native="selectBottle(3)"/>

		<bottle4 v-if="bottle[4]" :class="{'pointer-none': end}" @click.native="selectBottle(4)"/>

		<shelf/>

		<paper v-if="end" :msg="msg"/>

	</div>
</template>

<script>
import Bottle1 from './shelf/Bottle1'
import Bottle2 from './shelf/Bottle2'
import Bottle3 from './shelf/Bottle3'
import Bottle4 from './shelf/Bottle4'
import Shelf from './shelf/Shelf'
import Board from './Board'
import Paper from './Paper'
import Mirror from './Mirror'

export default {
	name: 'game',
	components: {
		Bottle1,
		Bottle2,
		Bottle3,
		Bottle4,
		Shelf,
		Board,
		Paper,
		Mirror
	},
	data() {
    return {
			multiple: [0, 1, 2, 3, 5],
			next: 1,
			coin: 1,
			fakeBottle: null,
			bottle: {
				1: true,
				2: true,
				3: true,
				4: true
			},
			end: false,
			msg: {
				title: "WIN!!!",
				multiple: 0,
				delay: 1500
			}
		}
	},
	mounted() {
		let min=1
    let max=4
		this.fakeBottle = Math.floor(Math.random() * (+max - +min) + +min)
	},
	methods: {
		onClickMirror () {
			this.end = true
			this.msg.multiple = this.multiple[this.next]
			this.msg.delay = 0
    },
		selectBottle: function (e) {
			let audioClicked = document.getElementById('clicked')
			audioClicked.currentTime=0
			audioClicked.play()
		
			let min=0
      let max=5
			let rnd = Math.floor(Math.random() * (+max - +min) + +min)

			this.$emit('clicked', [rnd, this.next])

			this.bottle[e] = false

			if (e == this.fakeBottle) {
				this.end = true
				this.msg.title = "LOSE!!!"
				this.coin = 0
				this.next = 0
				this.$emit('clicked', [7, this.next])

				setTimeout(function(){
					let audioMirror = document.getElementById('mirror-break')
					audioMirror.currentTime=0
					audioMirror.play()

					let audioLose = document.getElementById('lose')
					audioLose.currentTime=0
					audioLose.play()
				}, 1000);

				// location.reload()
			} else {

				setTimeout(function(){
					let audioCoin = document.getElementById('coin')
					audioCoin.currentTime=0
					audioCoin.play()
				}, 800);

				this.next++
				this.coin++
				if (this.next == 4) {
					this.end = true
					this.msg.multiple = 5
					this.$emit('clicked', [6, this.next])
					// location.reload()
				}
			}
		}
	}
}
</script>

<style scoped>
.pointer-none {
	pointer-events: none;
}
</style>
