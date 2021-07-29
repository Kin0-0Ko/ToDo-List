<template>
  <div class="home">

	  <div class="add">
		  <input class="add_item title" type="text" placeholder="Title">
		  <textarea class="add_item about" name="About" id="" cols="10" rows="10" placeholder="About Tasks"></textarea>
		  <div class="btns">
			  <button  class="glow-on-hover" type="button">Add</button>
		  </div>
	  </div>



  </div>
</template>

<script>

</script>

<style lang="sass">
@import '@/assets/main.sass'

.home
	display: flex
	flex-direction: column
	align-items: center
	justify-content: flex-start
	width: 75%

.add
	display: flex
	flex-direction: column
	background-color: $secColor
	height: 170px
	width: 90%
	padding: 15px
	border-radius: 20px
	box-shadow: 0px 0px 20px 10px $trdColor

.add_item
	border-radius: 10px
	margin: 5px
	outline: none
	border: none
	padding: 5px


.glow-on-hover 
    width: 220px
    height: 50px
    border: none
    outline: none
    color: #fff
    background: $trdColor
    cursor: pointer
    position: relative
    z-index: 0
    border-radius: 10px
	
.btns
	display: flex
	justify-content: flex-end
	padding: 5px

.glow-on-hover:before 
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;

.glow-on-hover:active 
    color: #000


.glow-on-hover:active:after 
    background: transparent;


.glow-on-hover:hover:before 
    opacity: 1;


.glow-on-hover:after 
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: $trdColor;
    left: 0;
    top: 0;
    border-radius: 10px;


@keyframes glowing 
		0% { background-position: 0 0; }
		50% { background-position: 400% 0; }
		100% { background-position: 0 0; }







</style>