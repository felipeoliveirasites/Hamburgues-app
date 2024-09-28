<template>
    <div>
        <p>Componente de Mensagem</p>
        <div id="burger-form-container">
            <form id="burger-form" >
                <div class="input-container">
                    <label for="iname">Nome do cliente: </label>
                    <input type="text" name="name" id="iname" v-model="name" placeholder="Digite o seu nome">
                </div>
                <div class="input-container">
                    <label for="ipao">Escolha o pão: </label>
                    <select name="pao" id="ipao" v-model="pao" >
                        <option value="" disabled>Selecione o seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                            {{ pao.tipo }}
                        </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="icarne">Escolha a carne do seu Burger: </label>
                    <select name="carne" id="icarne" v-model="carne" >
                        <option value="" disabled>Selecione o tipo de carne</option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                            {{ carne.tipo }}
                        </option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="iopcionais">Selecione os opcionais: </label>
                    <div class="checkbox-container" v-for="(opcional, index) in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" :id="'iopcionais-' + index" v-model="opcionais" :value="opcional.tipo">
                        <label :for="'iopcionais-' + index" class="nul"> {{ opcional.tipo}}</label>
                    </div>
                    
                </div>
                <div class="input-container">
                        <input type="submit" class="submit-btn" value="Criar meu Burger!">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
/* document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o elemento <select>
  var selectElement = document.getElementById('ipao');
  
  // Define o valor selecionado. Pode ser alterado para outro valor conforme necessário.
  selectElement.value = ''; // Define o valor padrão como "integral"
}); */
/* window.onload =  function() {
  // Seleciona o elemento <select>
  var selectElement = document.getElementById('ipao');
  
  // Define o valor selecionado. Pode ser alterado para outro valor conforme necessário.
  selectElement.value = ''; // Define o valor padrão como "integral"
}; */

    export default {
        name: "BurgerForm",
        data() {
            return {
                paes: null,
                carnes: null,
                opcionaisdata: null,
                nome: null,
                pao: "",
                carne: "",
                opcionais: [],
                status: 'Solicitado',
                msg: null
            }
        },
        methods: {
            async getIngredientes() {
                const req = await fetch("http://localhost:3000/ingredientes")
                const data = await req.json()

                this.paes = data.paes
                this.carnes = data.carnes
                this.opcionaisdata = data.opcionais

                console.log(data)
            }
        },
        mounted() { 
            this.getIngredientes()

        }
        
    }
</script>

<style lang="sass" scoped>
    //#burger-form-container
       
    #burger-form
        max-width: 400px
        margin: 0 auto
    .input-container
        display: flex
        flex-flow: column wrap

        margin-bottom: 20px 

    label
            
            font-weight: bold
            margin-bottom: 15px
            color: #222
            padding: 5px 10px
            border-left: 4px solid #f0a034ee

    label.nul 
            font-weight: bold
            margin-bottom: 0px
            color: #222
            padding: 0px 0px
            border-left: 0px

        
    input,select
            padding: 5px 10px
            width: 300px
           
    #opcionais-container
        display: flex
        flex-flow: row wrap

    .checkbox-container
        display: flex
        flex-flow: row wrap
        align-items: flex-start
        width: 50%
        margin-bottom: 20px
       
        input, span
            width: auto 
        label.nul
            margin-left: 6px
            align-self: flex-start
            line-height: 1rem
            font-weight: bold
            color: #222
    
    .submit-btn 
        background-color: #222
        color: #f09f34
        font-weight: bold
        border: 2px solid #222
        padding: 10px
        font-size: 16px
        margin: 0 auto
        cursor: pointer
        transition: .5s

        &:hover
            background-color: transparent
            color: #222
    
    #opcionais-title 
        width: 100%

</style>