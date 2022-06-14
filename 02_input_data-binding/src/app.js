const MyNameApp = {
    data(){
        return {
            name: "",
            age: 29,
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault(); //não atualiza no servidor
            this.name = this.input_name; 
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")