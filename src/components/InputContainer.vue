<!-- eslint-disable prettier/prettier -->
<template>
  <div class="input-container">
    <input
      type="text"
      class="input"
      id="your-language"
      placeholder="...your language"
      v-model="yourLanguageText"
    />
    <input
      type="text"
      class="input"
      id="swahili"
      placeholder="...Swahili"
      v-model="swahiliText"
    />
    <button class="add" @click="addWord">Add</button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  emits: ["add-new-word"],
  data() {
    return {
      yourLanguageText: "",
      swahiliText: "",
      id: 0,
    };
  },
  methods: {
    addWord() {
      if (this.yourLanguageText === "" || this.swahiliText === "") {
        return alert("you must add text to both fields!");
      }
      this.id++;
      this.$emit(
        "add-new-word",
        this.yourLanguageText,
        this.swahiliText,
        this.id
      );
      this.yourLanguageText = "";
      this.swahiliText = "";
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  width: 50%;
  margin-top: 1.5rem;
  box-shadow: 0 0 1rem var(--color);
  background-color: var(--background-color);
  border-radius: 1rem;
}

.input {
  display: block;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  background-color: rgb(186, 182, 182);
  padding: 0.25rem;
  margin-bottom: 0.1rem;
}

.add {
  display: block;
  height: 1.2rem;
  width: 2rem;
  border-radius: 0.4rem;
  padding: 0.2rem;
  border: 1px solid var(--color);
}
</style>
