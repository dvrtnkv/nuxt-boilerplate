import { defineStore, acceptHMRUpdate } from "pinia";

export const usePostsStore = defineStore(
  "posts",
  () => {
    const example = ref();
    return {
      example,
    };
  },
  {
    persist: true,
  }
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot));
}
