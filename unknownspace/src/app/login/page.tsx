"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [countryCode, setCountryCode] = useState("+65");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Call real API route which will hit Twilio
      const res = await fetch("/api/auth/otp", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ phone: `${countryCode}${phone}` })
      });
      const data = await res.json();
      setLoading(false);
      
      if (!res.ok || data.error) {
         alert(`Failed to send WhatsApp message:\n\n${data.error || 'Unknown Error'}\n\nMake sure your Twilio Sandbox is joined. For testing, your OTP is: ${data.testOtp || 'N/A'}`);
         return; // don't go to step 2 if failed
      }

      setStep(2);
      alert(`A WhatsApp message with your OTP has been requested for ${countryCode} ${phone}`);
    } catch(e) {
      setLoading(false);
      alert("Network Error: Could not reach OTP server.");
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      phone: `${countryCode}${phone}`,
      otp,
      redirect: true,
      callbackUrl: "/",
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex text-foreground bg-background">
      {/* Left side Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-secondary flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Decorative elements */}
        <div className="w-[150%] h-[150%] absolute border border-primary/20 rounded-full -top-[25%] -left-[25%] animate-[spin_60s_linear_infinite]"></div>
        <div className="w-[120%] h-[120%] absolute border border-primary/10 rounded-full -bottom-[15%] -right-[15%] animate-[spin_40s_linear_infinite_reverse]"></div>
        
        <div className="z-20 text-center p-12 flex flex-col items-center">
           <h1 className="text-6xl font-playfair text-[#cba258] uppercase tracking-widest shadow-black drop-shadow-2xl mb-8 font-bold">UnknownSpace</h1>
           <p className="text-xl text-[#EFEBE6] font-light tracking-[0.2em] italic">The Epitome of Luxury in Singapore</p>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative bg-[#FDFCFA] overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden text-3xl font-bold tracking-widest text-[#1a2f4c] font-playfair uppercase mb-16 drop-shadow-sm">
          UnknownSpace
        </div>

        <div className="w-full max-w-md bg-white p-10 lg:p-14 rounded border border-[#EFEBE6] shadow-[0_20px_60px_rgba(26,47,76,0.06)] relative z-10 text-center transition-all">
          <div className="w-16 h-16 bg-[#1a2f4c] rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
             <span className="text-[#cba258] font-playfair text-3xl italic">U</span>
          </div>
          
          <h2 className="text-3xl font-playfair text-[#1a2f4c] mb-4 uppercase tracking-wider font-bold">Welcome Back</h2>
          <p className="text-[#5c6b89] text-[10px] font-bold tracking-[0.2em] uppercase mb-12 leading-loose">Access your exclusive portfolio securely via Google.</p>

          <button onClick={() => signIn("google", { callbackUrl: "/" })} className="relative group overflow-hidden w-full border border-transparent bg-gradient-to-r from-[#1a2f4c] to-[#0f1b2d] text-white px-8 py-5 rounded shadow-[0_8px_30px_rgba(26,47,76,0.3)] hover:shadow-[0_12px_40px_rgba(203,162,88,0.2)] flex justify-center items-center transition-all duration-300">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#cba258] to-[#e4cd9b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></span>
            <span className="relative z-10 text-[#cba258] group-hover:text-[#1a2f4c] transition-colors duration-500 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform bg-white rounded-full p-1 border border-transparent group-hover:border-[#1a2f4c]" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign In with Google
            </span>
          </button>
          
          <div className="mt-8 text-center pt-8 border-t border-[#EFEBE6]/50">
             <p className="text-[9px] text-[#a0aabf] font-bold tracking-[0.2em] uppercase leading-relaxed">
               Secure Authentication <br/> Protected by Google OAuth 2.0
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
