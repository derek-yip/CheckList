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
          let self:any = this;          
          let targetRemoveID:number = parseInt(DOMelement.target.getAttribute('targetremoveid'));
          let NewToDoItems:any = self.$emit('RemoveItem', targetRemoveID);
      },
      ChangeChecked(DOMelement:any){
        let self:any = this;          
        let targetAdjustCheckID:number = parseInt(DOMelement.target.getAttribute('targetAdjustCheckID'));
        let NewToDoItems:any = self.$emit('ChangeChecked', targetAdjustCheckID);
      }
  },
}