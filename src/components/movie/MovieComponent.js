import CustomComponent from "../../abstracts/CustomComponent";
import MovieModalComponent from "../modal/MovieModalComponent";
import StarFilledImg from "../../../templates/star_filled.png";

export default class MovieComponent extends CustomComponent {
  constructor() {
    super();
    this.state = {
      movie: {
        id: 0,
        title: "",
        poster_path: "",
        genre_ids: "",
        vote_average: 0,
        overview: "",
      },
    };
  }

  handleEvent() {
    this.addEventListener("click", () => {
      const modal = document.createElement("movie-modal");

      modal.loadMovieDetail(this.state.movie.id);

      const app = document.querySelector("#app");
      app.append(modal);

      setTimeout(() => {
        modal.classList.add("fadein");
      });
    });

    this.renderMovieItem();
  }

  renderMovieItem() {
    const skeleton = document.createElement("div");
    skeleton.className = "item-thumbnail skeleton";

    this.querySelector(".item-card").prepend(skeleton);

    const thumbnail = this.querySelector("img.item-thumbnail");
    thumbnail.classList.add("fadeout");

    thumbnail.addEventListener("load", () => {
      if (thumbnail.complete) {
        skeleton.remove();
        thumbnail.classList.remove("fadeout");
      }
    });
  }

  template() {
    this.state.movie = {
      id: this.getAttribute("id"),
      title: this.getAttribute("title"),
      poster_path: this.getAttribute("poster_path"),
      vote_average: this.getAttribute("vote_average"),
    };

    const title = this.state.movie.title;
    const voteAverage = this.state.movie.vote_average;
    const posterPath = this.state.movie.poster_path;

    return /*html*/ `
            <div>
              <div class="item-card">
                  <img
                    class="item-thumbnail"
                    src="https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}"
                    loading="lazy"
                    alt=${title}
                  />
                  <p class="item-title">${title}</p>
                  <p class="item-score"><img src=${StarFilledImg} alt="별점" /> ${voteAverage}</p>
              </div>
            </div>
        `;
  }
}

customElements.define("movie-item", MovieComponent);
