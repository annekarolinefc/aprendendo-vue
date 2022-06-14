<template>
  <div>
    <PrimeiroComponente />
    <LyfeCycle/>
  </div>
</template>

<script>
//Importando o primeiro componente
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LyfeCycle from './components/LifeCycle.vue'

  export default{
    name: "App",
    components:{
      PrimeiroComponente,
      LyfeCycle
    },
    
  }
</script>
