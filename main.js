new Vue({
  el: "#app",
  data() {
    return {
      columns: ["title", "rating"],
      ratingsInfo: [
        { title: `White Chicks`, rating: 82 },
        { title: `Stranger Things`, rating: 92 },
        { title: `CSI`, rating: 78 },
        { title: `True Detective`, rating: 95 }
      ],
      filterText: ""
    };
  },
  methods: {
    sortLowest() {
      this.ratingsInfo.sort((a, b) => a.rating - b.rating);
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => b.rating - a.rating);
    },
    reset() {
      this.filterText = "";
    }
  },
  computed: {
    filteredFilms() {
      let filter = new RegExp(this.filterText, "i");
      return this.ratingsInfo.filter((el) => el.title.match(filter));
    }
  }
});
