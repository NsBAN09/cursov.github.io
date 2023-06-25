document.addEventListener('DOMContentLoaded', async function(){
    let card_phone = await axios.get("templates/card_phone.html")
    console.log(card_phone.data)

    const infa = {
        test: 'Провірка',
        tovari: []
    }

        const CardProduct = {
            props: ['product'],
            template: card_phone.data
        }

    const dodatok = {
        data(){
            return infa
        },
        methods: {
            getTovari(){
            db.collection('tovari').get().then(res => {
                res.forEach(docum => {
                let card_phone = docum.data();
                card_phone.id = docum.id;
                this.tovari.push(card_phone)
            })
        })
            }
        },
        components: {
            'cp': CardProduct
        },
        mounted(){
            this.getTovari()
        }
    }

    Vue.createApp(dodatok).mount('#products')



})