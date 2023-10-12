<!-- eslint-disable prettier/prettier -->
<template>
  <div class="popUp">
    <input type="text" v-model="InputYourLanguage" :id="InputYourLanguage" />
    <input type="text" v-model="InputSwahili" :id="InputSwahili" />
    <button class="edit-button" @click="editWord">Edit</button>
    <button @click="$emit('del-btn-click')">Delete</button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  emits: ["edit-btn-click", "del-btn-click"],
  props: {
    origin: String,
    swahili: String,
  },
  data() {
    return {
      InputYourLanguage: this.origin,
      InputSwahili: this.swahili,
    };
  },
  methods: {
    editWord() {
      this.$emit("edit-btn-click", this.InputYourLanguage, this.InputSwahili);
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.popUp {
  position: absolute;
  top: calc(100% -1rem);
  opacity: 0;
  transform: translateY(0);
  pointer-events: none;
  transition: opacity 150ms ease-in, transform 150ms ease-in;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  width: 60%;
  z-index: 1;
  border-radius: 0.2rem;
  box-shadow: 0 0 1rem black;
}

li.active > .popUp {
  opacity: 1;
  transform: translateY(40%);
  pointer-events: initial;
}

.edit-button {
  position: absolute;
  right: 0%;
}
</style>
