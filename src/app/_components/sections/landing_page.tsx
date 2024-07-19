export default function LandingPage() {
  return (
    <main className="relative flex h-screen w-full flex-col bg-gradient-to-r from-white to-[#cbdeed] md:flex-row">
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to the ventures App
        </h1>
        <p className="text-lg text-gray-600">
          The ventures app is a platform that helps you to manage your projects
        </p>
        <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
          Get Started
        </button>
      </div>
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source
            src="https://videos.pexels.com/video-files/4911896/4911896-uhd_4096_2160_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}
