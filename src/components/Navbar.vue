<template>
    
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img :src="logo" :alt="alt" id="logo">
            </router-link>

            <div id="links">
                <RouterLink to="/">Home</RouterLink> |
                <RouterLink to="/pedidos" >Pedidos</RouterLink>
            </div>
      </nav>
    
</template>

<script>
    export default {
        name:"Navbar",
        props: ["logo","alt"]
    }
</script>

<style lang="sass" scoped>
    nav#nav
        display: flex
        flex-flow: row wrap
        flex-shrink: 1
        justify-content: flex-end
        align-items: center
        background-color: #222
        border-bottom: 4px solid #111
        padding: 15px 50px
        flex-basis: 400px
        max-width: 1200px
        /* flex-grow: 1 */
        margin: auto
        border-radius: 7px 7px 0px 0px
        
    nav#nav #logo-url
        margin-right: auto 
        // Move o #logo-url para o início (flex-start) enquanto outros itens estão no flex-end
        /* margin: auto
            margin-left: 0 */
        
        /* margin-right: 0 */
    
        //div#links
        //height: 50px
        //margin: auto
        //margin-left: 0

    #logo 
        width: 40px
        height: 40px     

    nav#nav #links a
        color: #f0a034
        text-decoration: none
        margin: 12px
        transition: .4s

    nav#nav #links a:hover
        color: white

    nav#nav #links 
        color: #555
        

        
        
        
    

</style>