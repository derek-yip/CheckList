import ListItem from './ListItem/ListItem.vue'

  export default {
    name:'TodoList',
    data() {
      return {
        ToDoItems: [
          { 
            id:1, 
            label: "Learn Vue",
            done: true 
          },
          {
            id:2,
            label: "Create a Vue project with the CLI",
            done: true,
          },
          { 
            id:3, 
            label: "Have fun", 
            done: true 
          },
          { 
            id:4, 
            label: "Create a to-do list", 
            done: false 
          },
        ],
        message:'',
      };
    },
    methods: {
      AddItem(){
        let self:any = this;

        if(self.message == null || self.message == ''){
          return
        }
        else{
          self.ToDoItems.push({id:IDGenerator(), label:self.message, done:false}); 
        }

        function IDGenerator():number{
            return Math.floor(Math.random() * Date.now());
        }
      },
      UpdatedList(updatedValue:number){
        this.ToDoItems = this.ToDoItems.filter(item => item.id !== updatedValue);
      },
      ChangeChecked(checkedValue:number){
        console.log(checkedValue);
        
        let targetIndex:number = this.ToDoItems.indexOf(this.ToDoItems.filter(item => item.id == checkedValue)) ;
        console.log(targetIndex);
        
      }
    },
    components:{
        ListItem
    }

  }




