<template>
  <header>
    <button class="switch" @click="changeColorSheme"></button>
    <h1>Winnie's Swahili Trainer</h1>

    <nav>
      <DropdownMenu />
    </nav>
  </header>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
export default {
  components: {
    DropdownMenu,
  },
  methods: {
    changeColorSheme() {
      const html = document.querySelector(":root");
      const switchBtn = document.querySelector(".switch");
      switchBtn.classList.toggle("dark");
      document.querySelector("main").classList.toggle("main-dark");
      if (switchBtn.classList.contains("dark")) {
        html.style.setProperty("--background-color", "rgb(2, 2, 54)");
        html.style.setProperty("--color", "yellow");
      }
      if (!switchBtn.classList.contains("dark")) {
        html.style.setProperty("--background-color", "white");
        html.style.setProperty("--color", "black");
      }
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--background-color);
  color: var(--color);
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}

h1 {
  font-size: 0.8rem;
  margin-left: 0.2rem;
}

h1::before {
  content: "❤️";
}

.switch {
  margin: 0.45rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  border: 1px solid var(--color);
  box-shadow: 0 0 0.8rem var(--color);
  border-color: inherit;
  transition: transform 0.5s ease-in;
}

.switch.dark {
  transform: rotate(360deg);
}

.switch::after {
  content: "🌞";
}

.dark {
  background-color: var(--background-color-dark);
  box-shadow: 0 0 0.8rem var(--color);
  border-color: var(--color);
}

.dark::after {
  content: "🌜";
}
</style>
