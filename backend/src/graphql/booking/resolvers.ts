import { bookModal } from "../../mongodb/schema/bookModal.js";
const query = {
  fetchBookingDetail: async (_, { movieId, showTime }) => {
    const data = await bookModal.findOne({ movieId, viwingTime: showTime });
    return data;
  },
};

const mutation = {
  secureTicket: async (_, { seatNo, viwingTime, movieId }) => {
    const filter = {
      $and: [{ movieId },  { viwingTime },{ "seats.value": seatNo }],
    };
    const updateCondition = { $set: { "seats.$.booked": true } };
    try {
      const update =  await bookModal.updateOne(filter, updateCondition);
      return {
        code: 200,
        message: "Updated successfully",
        success: true,
      };
    } catch (e) {
      return {
        code: 404,
        message: "Unable to update",
        success: false,
      };
    }
  },
};

export const resolver = { query, mutation };
