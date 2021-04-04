const video = {
  title: "A",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("B");

video.showTags();

//Change the value of 'this'
// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({ name: "Seb" }, 1, 2);
// playVideo.apply({ name: "Seb" }, [1, 2]);
// const fn = playVideo.bind({ name: "Seb" });
