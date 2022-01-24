import propelauth from "../../lib/propelauth"
import runMiddleware from "../../lib/middleware"

// Calls our runMiddleware function with PropelAuth's requireUser function
const requireUser = (req, res) =>
    runMiddleware(req, res, propelauth.requireUser)

export default async function handler(req, res) {
    // Verifies that a valid accessToken is provided
    await requireUser(req, res);
    // req.user comes from requireUser
    res.status(200).json({ user_id: req.user.userId })
}