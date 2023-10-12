<!-- eslint-disable prettier/prettier -->

<template>
  <div class="dropdown" data-dropdown>
    <button class="dropdown-button" data-dropdown-button>Menu</button>
    <div class="dropdown-menu">
      <a href="#">My List</a>
      <a href="#">Trainer</a>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.dropdown {
  position: relative;
  margin-right: 1rem;
  width: 80px;
}

.dropdown-button {
  border: 1px solid var(--color);
  outline: none;
  background-color: inherit;
  color: inherit;
  width: inherit;
}

.dropdown-button::before {
  content: "▲";
  transition: transform 150ms ease;
  display: inline-block;
  margin-right: 2px;
}

.dropdown.focus > .dropdown-button::before {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  z-index: 1;
  right: 0%;
  top: calc(100% + 0.25rem);
  opacity: 0;
  transform: translateY(-40%);
  transition: opacity 150ms ease-in, transform 150ms ease-in;
  pointer-events: none;
  background-color: var(--background-color);
  padding: 0.5rem;
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border: 1px solid var(--color);
}

.dropdown.focus > .dropdown-menu {
  opacity: 1;
  transform: translate(0);
  pointer-events: initial;
}

.dropdown-menu a {
  color: inherit;
  text-decoration: none;
  font-size: 0.6rem;
  padding: 0.2rem;
}

.dropdown-menu a:hover {
  background-color: rgb(213, 209, 209);
}
</style>
