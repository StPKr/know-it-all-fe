import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img 
          src={logo} 
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-bold text-gray-800">My App</h1>
      </div>

      <nav className="flex items-center gap-4">
        <button className="text-gray-700 hover:text-blue-500">Home</button>
        <button className="text-gray-700 hover:text-blue-500">Topics</button>
        <button className="text-gray-700 hover:text-blue-500">Login</button>
      </nav>
    </header>
  );
}
