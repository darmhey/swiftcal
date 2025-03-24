import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import dotenv from "dotenv";
import { User, IUser } from "./src/models/userModel";

// Load environment variables
dotenv.config();

// Define types and interfaces
export interface AuthResult {
  user: IUser;
  token?: string;
}

// Define a simpler type for serialization (compatible with Passport)
interface SerializableUser {
  id?: string;
}

export const handleGoogleAuth = async (
  accessToken: string,
  refreshToken: string | undefined,
  profile: Profile, // Use Profile from passport-google-oauth20
  done: (error: Error | null, user?: IUser) => void
) => {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0].value,
        photo: profile.photos?.[0].value || "default.jpg",
      });
    }

    return done(null, user); // Pass user for session storage
  } catch (error) {
    return done(error instanceof Error ? error : new Error("Unknown error"));
  }
};

// Initialize Passport with Google Strategy
export const setupPassport = () => {
  const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID!;
  const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET!;
  const CALLBACK_URL: string = process.env.CALLBACK_URL!;

  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: CALLBACK_URL,
      },
      handleGoogleAuth
    )
  );

  // Serialize user to session (store id, mapped from googleId)
  passport.serializeUser((user: SerializableUser, done) => {
    done(null, user.id); // Use SerializableUser and store id (googleId)
  });

  // Deserialize user from session (fetch from MongoDB)
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await User.findOne({ googleId: id });
      done(null, user || null);
    } catch (error) {
      done(error);
    }
  });

  return passport.initialize(); // Return initialized Passport middleware
};

// Middleware for Google Auth routes
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});
export const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/",
});
