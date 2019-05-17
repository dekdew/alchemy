<template>
	<div>
		<board :multiple="multiple"/>

		<bottle1 @click.native="selectBottle(1)"/>

		<bottle2 @click.native="selectBottle(2)"/>

		<bottle3 @click.native="selectBottle(3)"/>

		<bottle4 @click.native="selectBottle(4)"/>

		<shelf/>
	</div>
</template>

<script>
import Bottle1 from './shelf/Bottle1'
import Bottle2 from './shelf/Bottle2'
import Bottle3 from './shelf/Bottle3'
import Bottle4 from './shelf/Bottle4'
import Shelf from './shelf/Shelf'
import Board from './Board'

export default {
	name: 'game',
	components: {
		Bottle1,
		Bottle2,
		Bottle3,
		Bottle4,
		Shelf,
		Board
	},
	data() {
    return {
			multiple: 1
		}
	},
	mounted() {
		let min=1
    let max=4
		let random = Math.floor(Math.random() * (+max - +min) + +min)
	},
	methods: {
		selectBottle: (e) => {
			alert(e)
		}
	}
}
</script>

<style scoped>

</style>
