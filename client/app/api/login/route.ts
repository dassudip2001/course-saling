import { connectDb } from "@/lib/mongodb";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user";
const { TOKEN_SECRET } = process.env;
type responseData = {
  message: string;
  success: boolean;
};

export async function POST(request: NextRequest, response: NextResponse) {
  connectDb().catch((error) => {
    console.log("error");
  });

  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    // console.log("user exists");

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    console.log(user);

    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    if (!TOKEN_SECRET) {
      return NextResponse.json(
        { error: "Token secret not provided" },
        { status: 500 }
      );
    }
    console.log("Token secret:", TOKEN_SECRET);
    //create token
    const token = jwt.sign(tokenData, TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
