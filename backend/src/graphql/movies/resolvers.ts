import { movieModal } from "../../mongodb/schema/moiveModal.js";
import { bookModal } from "../../mongodb/schema/bookModal.js";
import { screenModal } from "../../mongodb/schema/screenModal.js";
const query = {
  movies: async () => {
    const movies = await movieModal.find().limit(10);
    return movies;
  },
};

type Props = {
  title: string;
  thumbnail: string;
  genre: string;
  description: string;
  cast: string[];
  released_date: number;
  duration: string;
  viewing_time: string;
  director: string;
  screenId: Number
};

const mutation = {
  createMovie: async (_, { movie: x }: { movie: Props }) => {
    console.log(x);
    try {
      const movie_promise = new movieModal(x);
      const movie = await movie_promise.save();
      const screen = await screenModal.findOne({ screenId: x.screenId })
      if (!screen) {
        return {
          code: 404,
          success: false,
          message: "screen not found",
        };
      }

      const bookPromise = new bookModal({
        movieId: movie._id,
        seat: screen.seats,
        viwingTime: "SEVENPM"
      })

      await bookPromise.save()

      return {
        code: 200,
        success: true,
        message: "Inserted",
        movie,
      };
    } catch (e) {
      return {
        code: 404,
        success: false,
        message: e,
      };
    }
  },
};

export const resolver = { query, mutation };
