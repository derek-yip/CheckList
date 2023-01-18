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
      RemoveItem(DOMelement:any){          
          let targetRemoveID:number = parseInt(DOMelement.target.getAttribute('targetremoveid'));
          let NewToDoItems:any = this.$emit('RemoveItem', targetRemoveID);
      },
      ChangeChecked(DOMelement:any){
        let targetAdjustCheckID:number = parseInt(DOMelement.target.getAttribute('targetremoveid'));
        let NewToDoItems:any = this.$emit('ChangeChecked', targetAdjustCheckID);
      }
  },
}