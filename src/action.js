 
let id = 0 
 export const addTodo=(text)=>{
     return {
         type:"add",
         id:id,
         text
     }
 }
