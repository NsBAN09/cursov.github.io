const date = {
    test:'Привіт я працюю все добре',
    socials:[
        {
            name: 'Google',
            Image: 'https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000'
        },
        {
            name: 'Youtube',
            Image: 'https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg'
        },
        {
            name:'Instagram',
            Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png'
        },
        {
            name:'Roblox',
            Image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht'
        },
        {
            name:'Steam',
            Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/640px-Steam_icon_logo.svg.png'
        }

    ]
     
}


const SocialsComponent = {
    props:['social'],
    template:`<div class="card" style="width: 200px; padding: 10px; margin: 10px;">
    <h2 class= "text-center">{{social.name}}</h2>

    <img v-bind:src="social.Image" style='width: 100px; height: 100px; margin: 0 auto;'>
    </div>`
}



const app ={
    data(){
        return date
    },
    methods: {

    },
    components: {
        SocialsComponent
    }
}

Vue.createApp(app).mount('#app');