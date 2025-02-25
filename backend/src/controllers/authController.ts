import { Profile } from "passport-google-oauth20";
import { User, IUser } from "../models/userModel"; // Adjust path to your user model

export const handleGoogleAuth = async (
  accessToken: string,
  refreshToken: string | undefined,
  profile: Profile,
  done: (error: Error | null, user?: IUser) => void
) => {
  try {
    // Find user by googleId
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // Create new user if not found
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0].value, // First email
        photo: profile.photos?.[0].value || "default.jpg",
      });
    }

    // Pass the MongoDB user to Passport
    return done(null, user);
  } catch (error) {
    return done(error instanceof Error ? error : new Error("Unknown error"));
  }
};
