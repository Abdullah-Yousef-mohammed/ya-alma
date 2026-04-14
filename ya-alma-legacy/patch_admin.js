const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'app', 'admin', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// Replace imports
content = content.replace(
  'import { API, authFetch } from "./types";\r\nimport { useSession, signIn, signOut } from "next-auth/react";',
  'import { API, authFetch } from "./types";\r\nimport { useSession, signIn, signOut } from "next-auth/react";\r\nimport { useSearchParams } from "next/navigation";'
);
content = content.replace(
  'import { useSearchParams } from "next/navigation";\r\nimport { useSession, signIn, signOut } from "next-auth/react";\r\nimport { useSearchParams } from "next/navigation";\r\n',
  ''
);

// Replace sidebar
content = content.replace(
  '{ id: "consultants", label: "Academic Consultants", icon: MessageCircle },\r\n  { id: "inquiries", label: "Inquiries", icon: MessageCircle },\r\n];',
  '{ id: "consultants", label: "Academic Consultants", icon: MessageCircle },\r\n  { id: "inquiries", label: "Inquiries", icon: MessageCircle },\r\n  { id: "users", label: "Users & Accounts", icon: Users },\r\n];'
);

// Replace logic
const logicMatch = 
`  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch(\`\${API}/auth/login\`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("admin_token", data.token);
        setIsAuthenticated(true);
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (err) {
      setLoginError("Failed to connect to server");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {`;

const logicReplace = 
`  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const { data: session, status } = useSession();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    
    // Call next-auth credentials provider
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setLoginError("Invalid credentials or server connection failed.");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  const handleLogout = () => {
    signOut();
  };

  if (status === "loading") {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 text-xl font-bold dark:bg-[#0b0f19] dark:text-gray-100">Loading Secure Panel...</div>;
  }

  if (!session) {`;

content = content.replace(logicMatch, logicReplace);

const buttonMatch = 
`                <button type="submit" className="w-full bg-[var(--color-brand-gold)] text-[#0f172a] font-bold py-3.5 rounded-xl hover:bg-yellow-500 transition-colors mt-2 shadow-lg shadow-yellow-500/20">
                  Authenticate Securely
                </button>
             </form>
           </div>
        </div>`;

const buttonReplace = 
`                <button type="submit" className="w-full bg-[var(--color-brand-gold)] text-[#0f172a] font-bold py-3.5 rounded-xl hover:bg-yellow-500 transition-colors mt-2 shadow-lg shadow-yellow-500/20">
                  Sign in with Credentials
                </button>
             </form>

             <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-[#0b0f19] text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white font-bold py-3.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign in with Google
                  </button>
                  {errorParam === 'pending_approval' && (
                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl text-sm font-semibold text-center">
                      Your Google account is pending Admin approval. Please contact the administrator.
                    </div>
                  )}
                </div>
             </div>
           </div>
        </div>`;

content = content.replace(buttonMatch.replace(/\r\n/g, '\n'), buttonReplace.replace(/\r\n/g, '\n'));
// Re-attempt without replacing \r just in case file uses \r\n
content = content.replace(buttonMatch, buttonReplace);

content = content.replace(
  '          { activeTab === "inquiries" && <InquiriesManager /> }\r\n        </div>',
  '          { activeTab === "inquiries" && <InquiriesManager /> }\r\n          { activeTab === "users" && <UsersManager /> }\r\n        </div>'
);

content = content.replace(
  'import InquiriesManager from "./components/InquiriesManager";',
  'import InquiriesManager from "./components/InquiriesManager";\r\nimport UsersManager from "./components/UsersManager";'
);
content = content.replace(
  'import InquiriesManager from "./components/InquiriesManager";\n',
  'import InquiriesManager from "./components/InquiriesManager";\nimport UsersManager from "./components/UsersManager";\n'
);


fs.writeFileSync(file, content, 'utf8');
console.log("Done patching page.tsx");
