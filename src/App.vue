<template>
  <BaseHeader />
  <main>
    <InputContainer @add-new-word="addNewWord" />
    <ListContainer ref="listContainer" />
  </main>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import InputContainer from "./components/InputContainer.vue";
import ListContainer from "./components/ListContainer.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
    InputContainer,
    ListContainer,
  },
  methods: {
    addNewWord(originWord, swahiliWord, Id) {
      this.$refs.listContainer.addNewWordToList(originWord, swahiliWord, Id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --background-color: white;
  --color: black;
}

main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    160deg,
    rgb(68, 68, 227) 5%,
    rgb(137, 197, 217) 95%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.main-dark {
  background-image: linear-gradient(160deg, black 5%, darkblue 95%);
}
</style>
