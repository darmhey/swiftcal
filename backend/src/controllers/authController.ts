import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import { Profile } from "passport-google-oauth20";
import { User, IUser } from "../models/userModel";

dotenv.config();

const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET!;
const CALLBACK_URL: string = process.env.CALLBACK_URL!;

// Define a type for the auth result (user + token)
export interface AuthResult {
  user: IUser;
  token: string;
}

export const handleGoogleAuth = async (
  accessToken: string,
  refreshToken: string | undefined,
  profile: Profile,
  done: (error: Error | null, user?: IUser) => void // Simplified to return just the user, not AuthResult
) => {
  try {
    // Find user by googleId
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // Create new user if not found
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0].value,
        photo: profile.photos?.[0].value || "default.jpg",
      });
    }

    // Pass only the user to done (Passport will ignore it for JWT flow)
    // The token will be handled in server.ts
    return done(null, user);
  } catch (error) {
    return done(error instanceof Error ? error : new Error("Unknown error"));
  }
};

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

export const initializePassport = () => passport.initialize();
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
  session: false, // Disable session for the initial auth
});
export const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/",
  session: false, // Disable session for the callback
});
