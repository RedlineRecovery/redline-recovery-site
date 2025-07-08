
import { Button } from "@/components/ui/button";

export default function RedlineRecoveryHome() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/redline_recovery_hero_banner_3lines_centered.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">BUILT ON BROKEN BONES AND HARD LESSONS.</h1>
          <p className="max-w-2xl text-sm md:text-lg mb-6">
            This isn’t theory. It’s the road I’ve walked. Redline Recovery is for the injured, the burnt out,
            the ones who feel like they’re losing everything. Let’s rebuild — together.
          </p>
          <Button className="text-lg px-6 py-3">Start Your Comeback</Button>
        </div>
      </div>
    </div>
  );
}
