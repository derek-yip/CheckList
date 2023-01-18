
<template>
  <li class="list-item" >
    <label class="list-item-text" :style="[done?{'color':'blue','text-decoration':'line-through'}:'']">{{label}}</label>
    <input type="checkbox" name="item" class="list-item-checkbox" v-model=done />
    <button type="button" class="item-remove" @click="RemoveItem" :targetRemoveID=id >Remove</button>
  </li>
</template>

<script src="./ListItem.ts"></script>
<style src="./ListItem.scss"></style>