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
                        <option value="integral">Integral</option>
                        <option value="francês">Francês</option>
                        <option value="ciabatta">Ciabatta</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="icarne">Escolha a carne do seu Burger: </label>
                    <select name="carne" id="icarne" v-model="carne" >
                        <option value="" disabled>Selecione o tipo de carne</option>
                        <option value="maminha">Maminha</option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="iopcionais">Selecione os opcionais: </label>
                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" id="iopcionais" v-model="opcionais" value="saleme">
                        <span> Salame</span>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" id="iopcionais" v-model="opcionais" value="saleme">
                        <span> Salame</span>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" id="iopcionais" v-model="opcionais" value="saleme">
                        <span> Salame</span>
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
                pao: '',
                carne: '',
                v:'ou'
            }
        }
        
    }
</script>

<style lang="sass" scoped>
    #burger-form-container
       
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
        span
            margin-left: 6px
            align-self: flex-start
            line-height: 1rem
            font-weight: bold
            color: #222
        
            

    
    #opcionais-title 
        width: 100%

</style>