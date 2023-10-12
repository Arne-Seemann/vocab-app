<!-- eslint-disable prettier/prettier -->
<template>
  <input
    type="text"
    id="search-input"
    data-search-input
    placeholder="Search..."
    v-model="searchInputValue"
  />
  <ul class="list-container">
    <ListItem
      v-for="word in filteredVocabList"
      :key="word.ID"
      :ListItemID="word.ID"
      :origin="word.origin"
      :swahili="word.swahili"
      @apply-changes="saveChanges"
      @delete-item="deleteItem"
    />
  </ul>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import ListItem from "./ListItem.vue";
export default {
  components: { ListItem },
  data() {
    return {
      searchInputValue: "",
      vocabList: JSON.parse(localStorage.getItem("VocabList")) || [
        { origin: "Hallo", swahili: "Jambo", ID: 0 },
      ],
    };
  },
  computed: {
    filteredVocabList() {
      const searchInputValue = this.searchInputValue.trim();
      const Regex = new RegExp(searchInputValue, "i");
      return this.vocabList.filter((word) => {
        return Regex.test(word.origin || word.swahili);
      });
    },
  },
  methods: {
    addNewWordToList(originWord, swahiliWord, Id) {
      const isDuplicate = this.vocabList.some((word) => {
        return word.origin === originWord || word.swahili === swahiliWord;
      });
      if (isDuplicate) return alert("Word already exists!");
      this.vocabList.push({
        origin: originWord,
        swahili: swahiliWord,
        ID: Id,
      });
      this.saveDataToLocalStorage();
    },
    saveChanges(InputYourLanguage, InputSwahili, ListItemID) {
      this.vocabList[ListItemID].origin = InputYourLanguage;
      this.vocabList[ListItemID].swahili = InputSwahili;
      this.saveDataToLocalStorage();
    },
    deleteItem(ListItemID) {
      this.vocabList = this.vocabList.filter((word) => {
        return word.ID !== ListItemID;
      });
      this.saveDataToLocalStorage();
    },
    saveDataToLocalStorage() {
      localStorage.setItem("VocabList", JSON.stringify(this.vocabList));
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  max-width: 30rem;
}

#search-input {
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: block;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  background-color: rgb(186, 182, 182);
  padding: 0.25rem;
  box-shadow: 0 0 1rem var(--color);
}
</style>
