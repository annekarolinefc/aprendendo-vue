<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ nome }} e estudo para ser {{profissao}}.</p>
    </div>
</template>

<script>
    export default{
        name: 'PrimeiroComponente',
        data(){
            return{
                nome: "Anne",
                profissao: "Programadora"
            }
        }
    }
</script>