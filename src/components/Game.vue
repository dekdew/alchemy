<template>
	<div>
		<board :multiple="multiple[next]"/>

		<mirror :coin="coin"/>

		<bottle1 v-if="bottle[1]" :class="{'pointer-none': end}" @click.native="selectBottle(1)"/>

		<bottle2 v-if="bottle[2]" :class="{'pointer-none': end}" @click.native="selectBottle(2)"/>

		<bottle3 v-if="bottle[3]" :class="{'pointer-none': end}" @click.native="selectBottle(3)"/>

		<bottle4 v-if="bottle[4]" :class="{'pointer-none': end}" @click.native="selectBottle(4)"/>

		<shelf/>
	</div>
</template>

<script>
import Bottle1 from './shelf/Bottle1'
import Bottle2 from './shelf/Bottle2'
import Bottle3 from './shelf/Bottle3'
import Bottle4 from './shelf/Bottle4'
import Shelf from './shelf/Shelf'
import Shelf1 from './shelf/Shelf1'
import Board from './Board'
import Modal from './Modal'
import Mirror from './Mirror'

export default {
	name: 'game',
	components: {
		Bottle1,
		Bottle2,
		Bottle3,
		Bottle4,
		Shelf,
		Shelf1,
		Board,
		Modal,
		Mirror
	},
	data() {
    return {
			multiple: [0, 2, 3, 5],
			next: 1,
			coin: 1,
			fakeBottle: null,
			bottle: {
				1: true,
				2: true,
				3: true,
				4: true
			},
			end: false
		}
	},
	mounted() {
		let min=1
    let max=4
		this.fakeBottle = Math.floor(Math.random() * (+max - +min) + +min)
	},
	methods: {
		selectBottle: function (e) {
			let audio = document.getElementById('clicked')
			audio.currentTime=0
			audio.play()
		
			let min=0
      let max=5
			let rnd = Math.floor(Math.random() * (+max - +min) + +min)

			this.$emit('clicked', [rnd, this.next])

			this.bottle[e] = false

			if (e == this.fakeBottle) {
				this.end = true
				this.coin = 0
				this.next = 0
				this.$emit('clicked', [7, this.next])
				// location.reload()
			} else {
				if (this.next == 3) {
					this.end = true
					this.$emit('clicked', [6, this.next])
					this.coin++
					// location.reload()
				} else{
					this.next++
					this.coin++
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
