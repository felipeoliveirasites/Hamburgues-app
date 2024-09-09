<template>
    <div id="main-banner">
        <h1 id="makeyou">Make Your Burger</h1>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style lang="sass" scoped>
    #main-banner 
        background-image: url("/img/burger.jpg")
        background-position: 0 -250px
        background-size: cover
        background-attachment: fixed
        background-repeat: no-repeat


        max-width: 1200px
        height: 500px  

        display: flex
        align-items: center
        
        
        
        margin: auto

        h1
            color: white
            
            text-align: center
            /*  width: 500px */
            background-color: #222
            font-size: 60px
            padding: 20px 40px

    h1#makeyou 
        position: sticky
        top: calc(50% - 96px + 20px + 20px)
        left: 0
</style>