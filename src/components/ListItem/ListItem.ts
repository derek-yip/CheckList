export default {
    props:{
        id:Number,
        label:String,
        done:Boolean,
    },
    data() {
        return {
            message:'',
        }
    },
    methods:{
      RemoveItem(DOMelement:any):any{
          
          console.log(this.ToDoItems);
          let targetRemoveID:number = parseInt(DOMelement.target.getAttribute('targetremoveid'));
          let NewToDoItems:any = this.$emit('RemoveItem', targetRemoveID);
        
        // return NewToDoItems;
        //Update TodoList
        // this.ToDoItems = NewToDoItems;
      },
  },
}