import {defineStore} from 'pinia'

export const useToDoStore  = defineStore({
    id:'todo',
    state: ()=>({
        tasks:[]
    }),
    actions:{
        addTask(task){
            this.tasks.push(task)
        },
        removeTask(taskIndex){
            this.tasks.splice(taskIndex,1)
        }
    }
})