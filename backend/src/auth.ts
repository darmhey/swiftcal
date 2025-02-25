import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

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
    (
      accessToken: string,
      refreshToken: string | undefined,
      profile: passport.Profile,
      done: (error: Error | null, user?: passport.Profile) => void
    ) => {
      // This runs when Google sends back the profile
      // For now, just pass the profile along
      return done(null, profile);
    }
  )
);

// Serialize user into session (store just the Google ID)
passport.serializeUser((user, done) => {
  const profile = user as passport.Profile; // Cast to our expected type
  done(null, profile.id); // Save only the Google ID
});

// Deserialize user from session (turn ID back into profile)
passport.deserializeUser(
  (
    id: string,
    done: (error: Error | null, user?: passport.Profile | null) => void
  ) => {
    // For now, just return a minimal user object with the ID
    // Later, this will fetch from MongoDB
    const user = { id } as passport.Profile;
    done(null, user);
  }
);
// Export Passport initialization and auth middleware
export const initializePassport = () => passport.initialize();

// Export the Google auth middleware for routes
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});
export const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/",
});
