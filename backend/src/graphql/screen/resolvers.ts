import { screenModal } from "../../mongodb/schema/screenModal.js";
import { makeRowAndColumnForScreen } from "../../libs/helperFunctions.js";

const query = {
  fetchAllScreen: async () => {
    return await screenModal.find({});
  },
  fetchScreen: async (_, { screenId }) => {
    return await screenModal.findOne({ screenId });
  },
};

const mutation = {
    createScreen: async (
    _,
    {
      args: {
        numberOfSeats,
        numberOfRow,
        numberOfColumn,
        lastSeatNumberOfRow,
        lastSeatNumberOfColumn,
        title,
        screenId,
      },
    }
  ) => {
    const seats = makeRowAndColumnForScreen(
      numberOfRow,
      numberOfColumn,
      lastSeatNumberOfRow,
      lastSeatNumberOfColumn
    );

    const promise = new screenModal({
      screenId,
      seats,
      title,
    });

    return promise.save();
  },
};

export const resolvers = { query, mutation };
