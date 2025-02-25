import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import { handleGoogleAuth } from "./controllers/authController";
import { IUser } from "./models/userModel";

dotenv.config();

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

// Serialize user into session (store just the Google ID)
passport.serializeUser((user, done) => {
  const profile = user as IUser;
  done(null, profile.googleId);
});

// Deserialize user from session (turn ID back into profile)
passport.deserializeUser(async (googleId: string, done) => {
  try {
    const user = await import("./models/userModel").then((m) =>
      m.User.findOne({ googleId })
    );
    done(null, user || null);
  } catch (error) {
    done(error instanceof Error ? error : new Error("Unknown error"));
  }
});
// (
//   id: string,
//   done: (error: Error | null, user?: passport.Profile | null) => void
// ) => {
//   // For now, just return a minimal user object with the ID
//   // Later, this will fetch from MongoDB
//   const user = { id } as passport.Profile;
//   done(null, user);
// }

// Export Passport initialization and auth middleware
export const initializePassport = () => passport.initialize();

// Export the Google auth middleware for routes
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});
export const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/",
});
