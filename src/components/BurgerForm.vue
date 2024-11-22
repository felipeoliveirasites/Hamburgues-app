<template>
    <div>
        <section id="minha-secao">
            <Message :msg="msg" v-show="msg" ref="meuFilho" />
        </section>
      
        <div id="burger-form-container">
            <form id="burger-form" @submit="createBurguer" >
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
                    <label id="opcionais-title">Selecione os opcionais: </label>
                    <div class="checkbox-container" v-for="(opcional, index) in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" :id="'iopcionais' + index" v-model="opcionais" :value="opcional.tipo">
                        <label :for="'iopcionais' + index" class="nul"> {{ opcional.tipo}}</label>
                    </div>
                    <div class="input-container">
                        <input type="submit" class="submit-btn" value="Criar meu Burger!" href="#minha-secao" >
                    </div>    
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
   import Message from './Message.vue';

    export default {
        name: "BurgerForm",
        data() {
            return {
                paes: null,
                carnes: null,
                opcionaisdata: null,
                name: null,
                pao: "",
                carne: "",
                opcionais: [],
                msg: null,
            }
        },
        components: {
           Message
        },
        methods: {
            async getIngredientes() {
                const req = await fetch("http://localhost:3000/ingredientes")
                const data = await req.json()

                this.paes = data.paes
                this.carnes = data.carnes
                this.opcionaisdata = data.opcionais

                console.log(data)
            },

            async createBurguer(e) {
                
                e.preventDefault()

                 // Obtenha todos os burgers
                const response = await fetch("http://localhost:3000/burgers");
                const burgers = await response.json();

                // Encontre o maior ID
                const maxId = burgers.length > 0 ? Math.max(...burgers.map(b => b.id)) : 0;
                const newId = maxId + 1; // Incrementa para o novo ID
                const newIdString = String(newId)

                //console.log("Criou o hamburger")
                const data = {
                    id: newIdString,
                    name : this.name,
                    carne : this.carne,
                    pao: this.pao,
                    opcionais:Array.from(this.opcionais),
                    status: "Solicitado"
                }

                console.log(data)

                const dataJson = JSON.stringify(data) //texto com formato json

                const req = await fetch("http://localhost:3000/burgers", {
                    method: "POST",
                    headers: {"Content-Type":"application/json"}, //pra dize que estou me comunicando com json   
                    body: dataJson
                }) //fetch api javascript puro não estou utilizando pacotes de terceiros com axes
                //preciso prenncer algumas coisas se não ele pensa que é um get por padrão

                const res = await  req.json() //não ta fazendo tratamento de erros e nem validação pulando algumas coisas não ta dentro do curso aprender depois mas isto é importante e necessário nos projetos que vamos executar

                console.log(res)

                // colocar uma mensagem de sistema
                this.msg = `Pedido Nº ${res.id} realizado com sucesso!`

            // Rola até a seção com o ID especificado
           
                //this.$refs.meuFilho.mensagem()
                // limpar msg
                setTimeout(()=> this.msg = "", 5000)

                // limpar os campos
                this.name = ""
                this.carne = ""
                this.pao = ""
                this.opcionais = []
                
               
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
        display: flex
        flex-flow: column wrap
        align-items: center
        .input-container
            display: flex
            flex-flow: column wrap
            margin-bottom: 20px 
        #opcionais-container
            display: flex
            flex-flow: row wrap
           
            padding-left: 50px
            
            

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
           
   
    

    .checkbox-container
        display: flex
        flex-flow: row wrap
        align-items: flex-end
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