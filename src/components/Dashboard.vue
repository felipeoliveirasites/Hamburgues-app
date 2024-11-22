<template>
    <div id="burger-table">
        <section id="minha-secao">
            <Message :msg="msg" v-show="msg" />
        </section>
       
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row" v-for="burger in burgers" :key="burger.id" >
                <div class="order-number">{{ burger.id }}</div>
                <div>{{burger.name}}</div>
                <div>{{burger.pao}}</div>
                <div>{{burger.carne}}</div>
                <div>
                    <ul>
                        <li v-for="(opcional,index) in burger.opcionais" :key="index">{{opcional}}</li>
                       
                    </ul>
                </div>
                <div class="container-delete">
                    <select name="status" class="status" @change="updateBurger($event, burger.id)"> <!-- Sem atributo id -->
                        <option value="">Selecione</option>
                        <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status==s.tipo">{{ s.tipo }}</option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { parse } from 'vue/compiler-sfc';
import Message from './Message.vue';

export default {
    name:'Dashboard',
    data() {
        return {
            burgers: null,
            burger_id: null,
            status: [],
            msg: null
        }
    },
    components: {
        Message
    },
    methods: {
        async getPedidos() {

            const req = await fetch ("http://localhost:3000/burgers")
            //console.log(req)

            const data = await req.json()
            //console.log(data)

            this.burgers = data
            //console.log(this.burgers)

            //registrar os status
            this.getStatus();
        },
        async getStatus(){
            const req = await fetch ("http://localhost:3000/status")
           
            const data = await req.json()
            //console.log(data)

            console.log("Status recebido: ", data);
            this.status = data
            //console.log(this.statusj)

        },
        async deleteBurger(id) {
    try {
        const req = await fetch(`http://localhost:3000/burgers/${id}`, {
            method: "DELETE"
        });
        const res = await req.json();
         // colocar uma mensagem de sistema
        this.msg = `Pedido Nº ${res.id} removido com sucesso!`

        // Colocar rolagem que vai em direção da mensagem
        /* const secao = document.getElementById("minha-secao");
        if (secao) {
            secao.scrollIntoView({ behavior: "smooth" });
        }
 */
        // limpar msg
        setTimeout(()=> this.msg = "", 5000)

        this.getPedidos(); // Atualize a lista de pedidos
    } catch (error) {
        console.error("Erro ao deletar burger:", error); // Log do erro
    }
},

    async updateBurger(event, id) {
        const option = event.target.value
        const datajson = JSON.stringify({status: option})
        const req = await fetch(`http://localhost:3000/burgers/${id}`, {
            method: "PATCH", //atualiza apenas o que envio PATCH
            headers: { "Content-Type": "application/json"},
            body: datajson
        })
        const res = await req.json()
         // colocar uma mensagem de sistema
        this.msg = `O pedido Nº ${res.id} foi atualizado para ${res.status}!`
        /* const secao = document.getElementById("minha-secao");
        if (secao) {
            secao.scrollIntoView({ behavior: "smooth" });
        } */

        
        // limpar msg
        setTimeout(()=> this.msg = "", 5000)
        //console.log(res)
    }

    },
    mounted() {
        this.getPedidos()
    }
};

</script>

<style scoped>
    #burger-table {
        max-width: 1200px;
        margin: 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }


    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
        
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 19%;
        
    }

    .burger-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 12px 6px;
        margin-bottom: 12px;
        align-items: center;
        height: fit-content;
    }

    .container-delete {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: top;
    }

    .delete-btn {
        padding: 10px;
        background-color: #222;
        color: var(--primary);
        font-weight: bold;
        border: 2px solid #222;
        font-size: 1rem;
        margin: 0px 10px;
        cursor: pointer;
        transition: .5s;
        height: fit-content;

    }

    .delete-btn:hover {
        background-color: transparent;
        color:#222;
    }


</style>