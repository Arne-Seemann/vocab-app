<!-- eslint-disable prettier/prettier -->
<template>
  <li class="item-container" :id="ListItemID" tabindex="0">
    <span>{{ origin }}</span
    ><span>{{ swahili }}</span>
    <PopUp
      :origin="origin"
      :swahili="swahili"
      @edit-btn-click="applyChanges"
      @del-btn-click="deleteItem"
    />
  </li>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import PopUp from "./PopUp.vue";
export default {
  emits: ["apply-changes", "delete-item"],
  components: { PopUp },
  props: {
    origin: String,
    swahili: String,
    ListItemID: Number,
  },
  methods: {
    applyChanges(InputYourLanguage, InputSwahili) {
      this.$emit(
        "apply-changes",
        InputYourLanguage,
        InputSwahili,
        this.ListItemID
      );
    },
    deleteItem() {
      this.$emit("delete-item", this.ListItemID);
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.item-container {
  display: flex;
  width: 80%;
  box-shadow: 0 0 0.5rem var(--color);
}
span {
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  background-image: linear-gradient(gray, white);
  border: 1px solid var(--color);
  flex: 1;
  width: 40%;
  word-wrap: break-word;
  font-size: 0.8rem;
}
li {
  list-style: none;
}
</style>
