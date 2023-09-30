import { userModal } from "../../mongodb/schema/UserModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = [
  {
    _id: "324rwqesadf",
    firstName: "Ritesh",
    lastName: "Khadka",
    email: "riteshregmi85@gmail.com",
    phone: "356546",
    password: "3425e3453245",
  },
  {
    _id: "fsdgdsfg23456",
    firstName: "Bisu",
    lastName: "Bohora",
    email: "bishu@test.com",
    phone: "56742186",
    password: "sdfasdf3et3256",
  },
];

const query = {
  listUsers: () => users,
};

const mutation = {
  createAccount: async (_, { firstName, lastName, email, password, phone }) => {
    try {
      const isEmailAvailable = await userModal.findOne({ email });
      if (isEmailAvailable) {
        return {
          code: 200,
          message: `User already exists with the email of ${email}`,
          success: false,
        };
      }

      const bcryptedPassword = await bcrypt.hash(password, 10);
      const user_promise = new userModal({
        firstName,
        lastName,
        email,
        password: bcryptedPassword,
        phone,
      });
      let response = await user_promise.save();
      return {
        code: 200,
        message: "success",
        success: true,
        user: response,
      };
    } catch (e) {
      return {
        code: e.extensions.response.status,
        message: e.extensions.response.body,
        success: false,
      };
    }
  },
  login: async (_, { email, password }) => {
    const user = await userModal.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await jwt.sign(
        {
          token: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
        },
        "secret"
      );

      return {
        code: 200,
        success: true,
        message: "Successfully logined",
        token,
      };
    }
    return {
      code: 201,
      success: false,
      message: "Password not valid",
    };
  },
};

export const resolvers = { query, mutation };
