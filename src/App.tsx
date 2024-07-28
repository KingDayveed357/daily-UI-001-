// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./Auth";
import Login from "./Login";
import Signup from "./Signup";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gradient-purple">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}
