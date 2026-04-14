const fs = require('fs');

const file = 'c:\\Users\\user\\.gemini\\antigravity\\scratch\\ya-alma-legacy\\src\\app\\admin\\page.tsx';
let lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);

// Find start and end of legacy logic block
const startIdx = lines.findIndex(l => l.includes('const [isAuthenticated, setIsAuthenticated] = useState(true);'));
const endIdx = lines.findIndex(l => l.includes('if (!isAuthenticated) {'));

if (startIdx !== -1 && endIdx !== -1) {
  const logicReplace = 
`  const [username, setUsername] = useState("");
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

  if (!session) {`.split('\n');

  lines.splice(startIdx, endIdx - startIdx + 1, ...logicReplace);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log("SUCCESSFULLY PATCHED AUTH LOGIC");
} else {
  console.log("COULD NOT FIND INDICES", startIdx, endIdx);
}
