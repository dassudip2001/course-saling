import { connectDb } from "@/lib/mongodb";
import user from "@/models/user";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req: NextRequest, res: NextResponse) {
  connectDb().catch((error) => {
    console.error("Error connecting to database: " + error);
  });

  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    // check if the request body is empty
    if (!req.body) {
      return NextResponse.json({ error: "invalid data" }, { status: 400 });
    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email exists" }, { status: 400 });
    } else {
      // if (password) {
      //   return NextResponse.json({
      //     error: "Password length must be 5 charter",
      //   });
      // }
      const salt = await bcryptjs.genSalt(10);
      const hasPassword = await bcryptjs.hash(password, salt);

      const newUser = new user({
        username,
        email,
        password: hasPassword,
      });

      const savedUser = await newUser.save();
      console.log(savedUser);

      return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
