<template>
    <div class="message-container">
       <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            msg:String
        },
        /* methods: {
            mensagem(){
            const secao = document.getElementById("minha-secao");
            
                secao.scrollIntoView({ behavior: "smooth" });
                console.log("foi")
            
        }
    }, */
   /*  mounted() {
        this.mensagem()
    } */
    }
</script>

<style lang="sass" scoped>

    .message-container
        color: #004085
        background-color: #cce5ff
        border:  2px solid #b8daff
        border-radius: 5px
        padding: 10px
        max-width: 400px
        margin: 30px auto
        position: fixed
        top: 75%
        left: 50%
</style>