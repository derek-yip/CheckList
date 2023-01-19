import ListItem from './ListItem/ListItem.vue'

  export default {
    name:'checkList',
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
        let self:any = this;          
        self.ToDoItems = self.ToDoItems.filter(item => item.id !== updatedValue);
      },
      ChangeChecked(checkedValue:number){
        let self:any = this;
        let targetObject: any = self.ToDoItems.filter(item => item.id == checkedValue)[0]                      
        let targetIndex:number = self.ToDoItems.indexOf(targetObject) ;
        self.ToDoItems[targetIndex].done = !self.ToDoItems[targetIndex].done
      }
    },
    components:{
        ListItem
    }

  }




