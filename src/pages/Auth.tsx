import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneOtp = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({ phone });
      if (error) throw error;
      setOtpSent(true);
      toast.success("OTP sent to your phone.");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({ phone, token: otp, type: "sms" });
      if (error) throw error;
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
    if (error) toast.error(error.message);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(135deg, hsl(222 50% 6%) 0%, hsl(222 60% 15%) 100%)",
      }}
    >
      <motion.div
        className="w-full max-w-md glass-panel rounded-lg p-8 md:p-10"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block">
            <h1 className="font-display text-2xl tracking-luxury text-foreground">LONDON</h1>
            <p className="font-body text-[10px] tracking-luxury text-metallic-light">COLLECTION</p>
          </a>
        </div>

        {/* Mode tabs */}
        <div className="flex mb-8 border-b border-border">
          {(["signin", "signup"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 pb-3 font-body text-xs tracking-luxury uppercase transition-colors duration-300 relative ${
                mode === m ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {m === "signin" ? "Sign In" : "Sign Up"}
              {mode === m && (
                <motion.div
                  layoutId="auth-tab"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                  style={{ boxShadow: "0 0 8px hsl(0 72% 40% / 0.6)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Google sign in */}
        <button
          onClick={handleGoogleAuth}
          className="w-full glass-panel rounded-md py-3 font-body text-sm text-foreground/80 hover:text-foreground tracking-wide flex items-center justify-center gap-3 transition-all duration-300 hover:border-primary/30 mb-6"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="metallic-line flex-1" />
          <span className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground">or</span>
          <div className="metallic-line flex-1" />
        </div>

        {/* Auth method toggle */}
        <div className="flex gap-2 mb-6">
          {(["email", "phone"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setAuthMethod(m); setOtpSent(false); }}
              className={`flex-1 py-2 rounded-md font-body text-xs tracking-luxury uppercase transition-all duration-300 ${
                authMethod === m ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground border border-border"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {authMethod === "email" ? (
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-input/50 border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-input/50 border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-royal w-full rounded-md disabled:opacity-50"
            >
              {loading ? "..." : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <input
              type="tel"
              placeholder="+965..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-input/50 border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
            {otpSent && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-input/50 border border-border rounded-md px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
              />
            )}
            <button
              onClick={otpSent ? handleVerifyOtp : handlePhoneOtp}
              disabled={loading}
              className="btn-royal w-full rounded-md disabled:opacity-50"
            >
              {loading ? "..." : otpSent ? "Verify OTP" : "Send OTP"}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Auth;
