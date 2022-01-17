const appComponent = Vue.createApp({
    data(){
        return {
            firstName: 'Cave',
            lastName: 'Johnson',
            profilePicture: 'https://2.bp.blogspot.com/-tx7l9CFjgVQ/TfsKHp6E5dI/AAAAAAAAAZQ/E7NURUTEbFo/s1600/CaveJohnson.jpg',
            lemonRant: 'When life gives you lemons, don’t make lemonade. Make life take the lemons back! Get mad! I don’t want your damn lemons, what the hell am I supposed to do with these? Demand to see life’s manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I’m the man who’s gonna burn your house down! With the lemons! I’m gonna get my engineers to invent a combustible lemon that burns your house down!'
        }
    }
});

appComponent.mount('#root');