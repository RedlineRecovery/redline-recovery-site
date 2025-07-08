import { Button } from "@/components/ui/button";

export default function RedlineRecoveryHome() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/redline_recovery_hero_banner_3lines_centered.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">BUILT ON BROKEN BONES AND HARD LESSONS.</h1>
          <p className="max-w-2xl text-sm md:text-lg mb-6">
            This isn’t theory. It’s the road I’ve walked. Redline Recovery is for the injured, the burnt out,
            the ones who feel like they’re losing everything. Let’s rebuild — together.
          </p>
          <Button className="text-lg px-6 py-3">Start Your Comeback</Button>
        </div>
      </div>

      {/* Choose Your Path Section */}
      <div className="bg-white text-black py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Where Are You Right Now?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">I’m Injured and Don’t Know What to Do Next</h3>
            <ul className="text-sm text-left list-disc list-inside">
              <li>Guide: “Your Rights After a Collision in BC”</li>
              <li>Medical & insurance steps</li>
              <li>What no one tells you</li>
              <li>Mentorship or peer support</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">I’m Trying to Return to Work</h3>
            <ul className="text-sm text-left list-disc list-inside">
              <li>Coming Back After Trauma guide</li>
              <li>Return-to-work planner & tools</li>
              <li>How to talk to your crew and family</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">I Don’t Know If I Can Go Back</h3>
            <ul className="text-sm text-left list-disc list-inside">
              <li>“What If You Can’t Return?” course</li>
              <li>Purpose outside the uniform</li>
              <li>Identity, finances, and mental health</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Start Your Comeback Landing Section */}
      <div className="bg-gray-50 text-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Start Your Comeback</h2>
        <p className="max-w-2xl mx-auto text-md mb-8">
          Whether you're injured, burned out, or barely holding on — you're not alone. Redline Recovery exists to give you tools,
          support, and connection to start rebuilding. Pick where you are right now.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-semibold text-lg mb-2">I’m Injured and Don’t Know What to Do Next</h3>
            <ul className="text-sm text-left list-disc list-inside">
              <li>“Your Rights After a Collision in BC” guide</li>
              <li>Steps for medical + insurance navigation</li>
              <li>What no one tells you</li>
              <li>Get matched with a peer</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-semibold text-lg mb-2">I’m Trying to Return to Work</h3>
            <ul className="text-sm text-left list-disc list-inside">
              <li>Coming Back After Trauma guide</li>
              <li>Physio & return-to-work tracker</li>
              <li>Support talking to family and crew</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="font-semibold text-lg mb-2">I Don’t Know If I Can Go Back</h3>
            <ul className="text-sm text-left list-disc list-inside">
              <li>"What If You Can’t Return?" course</li>
              <li>Finding purpose beyond the job</li>
              <li>Mental health, finances, identity</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Button className="text-lg px-6 py-3">Join Redline Recovery</Button>
        </div>
      </div>
    </div>
  );
}
