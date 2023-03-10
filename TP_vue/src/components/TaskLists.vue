<script>
import { mapActions, mapState } from 'pinia';
import { useToDoStore } from '../store';

export default  {
  data(){
    return{
      newTask:''
    }
  },
   computed:{
    ...mapState(useToDoStore, ['tasks']),
   },
   methods:{
    ...mapActions(useToDoStore, ['addTask','removeTask']),
    addNewTask(task){
      this.addTask(task),
      this.newTask=''
    }
   }

}
</script>

<template>
  <div>
    <h2>Listes des taches</h2>
    <ul>
      <li v-for="(task,index) in tasks" :key="index">
      {{ task }}
      <button @click="removeTask(index)">Supprimer</button>
    </li>
     
    </ul>

    <input type="text" v-model="newTask" />
    <button @click="addNewTask(newTask)"> Ajouter un tache </button>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
