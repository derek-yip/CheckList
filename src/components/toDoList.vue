<script src="./toDoList.ts" />
…<style lang="scss">
  @import './toDoList.scss';
</style>

<template>
  <div class="template">
    <h1>CheckList</h1>
    <form class="toDoList">
      <ul class="list-item-wrapper">
        <div v-for="listItem in ToDoItems" :key=listItem.id>
          <ListItem :id=listItem.id :label=listItem.label :done=listItem.done v-on:RemoveItem="UpdatedList($event)" v-on:ChangeChecked="ChangeChecked($event)"/>
        </div>
      </ul>
    </form>
    
    
    <div class="item-add-wrapper">
      <h1>Please add your item in list.</h1>
      <div class="item-add">
        <input type="text" placeholder="edit me" v-model="message" @keyup.enter="AddItem" />
        <button type="button" @click="AddItem"> ADD</button>          
      </div>
    </div>
  </div>
  
</template>
