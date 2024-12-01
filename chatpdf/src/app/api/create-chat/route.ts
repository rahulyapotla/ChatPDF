// /api/create-chat

import { messages } from "@/lib/db/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const {file_key, file_name} = body
        console.log(file_key, file_name)
        return NextResponse.json({message: "success"})
    } catch(err) {
        return NextResponse.json({error: "Internal Serverrrrr errror"}, {status: 500})
    }
}