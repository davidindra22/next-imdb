import User from "@/lib/models/user.model";
import { connect } from "../mongodb/mongoose";
export const createOrUpdateUser = async (
  id,
  firts_name,
  last_name,
  image_url,
  email_addresses
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firtsName: firts_name,
          lastName: last_name,
          profilPicture: image_url,
          email: email_addresses[0].email_addresses,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("error: Could not create or update user:", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("error: Could not delete user:", error);
  }
};
