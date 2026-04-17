import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const otpsPath = path.join(process.cwd(), "data/otps.json");

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();
    if (!phone) return NextResponse.json({ error: "Phone required" }, { status: 400 });

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Read store
    let store: Record<string, string> = {};
    try {
       const raw = await fs.readFile(otpsPath, "utf-8");
       store = JSON.parse(raw);
    } catch(e) {}

    // Save OTP (this would be redis/db in real production)
    store[phone] = otp;
    await fs.writeFile(otpsPath, JSON.stringify(store, null, 2), "utf-8");

    // Connect to actual SMS/WhatsApp Gateway (e.g. Twilio)
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_WHATSAPP_NUMBER || "whatsapp:+14155238886"; // Twilio sandbox number

    if (twilioSid && twilioToken) {
       const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
       
       const formData = new URLSearchParams();
       formData.append('To', `whatsapp:${phone}`);
       formData.append('From', twilioFrom);
       formData.append('Body', `Your UnknownSpace verification code is: ${otp}`);

       const res = await fetch(twilioUrl, {
          method: "POST",
          headers: {
             "Authorization": "Basic " + Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64"),
             "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData.toString()
       });

       const twilioRes = await res.json();
       console.log("Twilio response:", twilioRes);
       
       if (twilioRes.code || twilioRes.error_message || twilioRes.status === "failed" || twilioRes.status === "undelivered") {
           return NextResponse.json({ success: false, error: "Twilio Error: " + (twilioRes.message || twilioRes.error_message), testOtp: otp }, { status: 400 });
       }
    } else {
       console.log(`[Development Mode] Mocking WhatsApp Message to ${phone}. OTP is: ${otp}`);
    }

    // Return the actual OTP to the user for testing purposes ONLY locally. (In real life we wouldn't return it)
    return NextResponse.json({ success: true, message: "OTP Sent", testOtp: otp });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
