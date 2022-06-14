<template>
  <h1>Meu Nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LyfeCycle",
  data() {
    return {
      nome: "Ainda não sei",
    };
  },
  created() {
    this.nome = "Anne";
  },
  mounted(){
    this.nome = "Pedro"
  }
};
</script>