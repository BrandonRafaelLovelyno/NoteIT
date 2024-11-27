import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-5 shadow-md bg-white">
        <div className="flex items-center space-x-3 px-6">
          <Image
            src="/noteLogo.svg"
            alt="NoteIT Logo"
            width={100}
            height={50}
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/home" className="hover:text-indigo-600 text-lg">
            Home
          </Link>
          <Link
            href="#Features"
            className="hover:text-indigo-600 px-32 text-lg"
          >
            Features
          </Link>
          <Link href="#About" className="hover:text-indigo-600 text-lg">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/sign-up">
            <button className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">
              Sign Up
            </button>
          </Link>
          <div className="h-6 border-l border-gray-300"></div>
          <Link href="/login">
            <button className="px-4 py-2 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white">
              Login
            </button>
          </Link>
        </div>
      </header>

      <div className="bg-white min-h-[480px] text-gray-800 font-sans flex items-center">
        {/* Hero Section */}
        <div className="px-20 flex flex-col justify-center ml-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Your Ultimate Workspace –
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Organize, Plan, and Achieve, All in One Place
          </p>
        </div>
        <div className="w-1/2 flex justify-center mb-12">
          <Image src="/work.svg" alt="Workspace" width={450} height={450} />
        </div>
      </div>

      {/* Productivity Section */}
      <div className="px-5 bg-white flex items-center">
        <div className="flex justify-center space-x-16 ml-64">
          <Image
            src="/product.svg"
            alt="Notebook and Planning"
            width={450}
            height={450}
          />
        </div>
        <div className="px-20 flex flex-col justify-center ml-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Empower Your Team's Productivity
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            Enhance your team’s productivity with a smarter workspace designed
            for organized note-taking and streamlined task management. Set clear
            deadlines, prioritize tasks, and keep everyone on track
            effortlessly, ensuring no detail or deadline is missed.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section id="Features" className="py-32 px-5 bg-gray-50 text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-12">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Tasks List</h4>
            <p className="text-gray-600 text-lg">
              Organize your tasks efficiently by creating, tracking, and
              managing your daily tasks.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Taking Notes</h4>
            <p className="text-gray-600 text-lg">
              Capture important ideas, thoughts, or meeting notes in a clean,
              easy-to-edit format.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Task Reminder</h4>
            <p className="text-gray-600 text-lg">
              Set reminders for tasks to get notified when it's time to take
              action, helping you stay on track.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-16">
        <Link href="/login">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg hover:bg-indigo-700">
            Get Started
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer id="About" className="bg-[#D3B69C] py-10 text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:space-x-16">
          {/* Left Section: Logo and Description */}
          <div className="md:w-1/2 flex items-start space-x-4">
            <Image
              src="/onlyLogo.svg"
              alt="Note IT Logo"
              width={100}
              height={150}
            />
            <div>
              <h4 className="text-xl font-semibold">Note IT</h4>
              <p className="text-gray-700">
                "Enhance your team’s productivity with a smarter workspace
                designed for organized note-taking and streamlined task
                management. Set clear deadlines, prioritize tasks, and keep
                everyone on track effortlessly, ensuring no detail or deadline
                is missed."
              </p>
            </div>
          </div>

          {/* Middle Section: Contact Information */}
          <div className="md:w-1/2 flex flex-col  space-y-2 mt-8 md:mt-0 ml-16">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex items-center space-x-2">
              <span className="material-icons"></span>
              <p>Chat with Developer</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons">Call/Message : </span>
              <p>081284139818</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons">Email : </span>
              <p>stevennamara@gmail.com</p>
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="md:w-1/2 flex flex-col space-y-2 mt-8 md:mt-0">
            <h4 className="text-lg font-semibold">Our Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/fc.svg" alt="Facebook" width={30} height={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/ig.svg" alt="Instagram" width={30} height={30} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/git.svg" alt="GitHub" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
