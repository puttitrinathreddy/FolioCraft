import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/LandingPage/Navbar';
import { Hero } from '@/components/LandingPage/Hero';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "150px", // Adjust based on design
          backgroundColor: "transparent",
          backgroundImage:
            "radial-gradient(transparent 1px, var(--token-f32baa44-90b8-42a5-8bca-ffba9d95b23a, #ffffff) 1px)",
          backgroundSize: "4px 4px",
          WebkitMask: "linear-gradient(rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
          mask: "linear-gradient(rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
          backdropFilter: "blur(3px)",
          zIndex: 1, // Ensure it's behind other content
        }}
      ></div>

      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <Card>
          <div className="p-3">
            <h3 className="font-bold text-xl">Drag and Drop Builder</h3>
            <p className="text-gray-600">
              Create your portfolio with ease using our intuitive drag-and-drop
              editor.
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-3">

            <h3 className="font-bold text-xl">Customizable Themes</h3>
            <p className="text-gray-600">
              Choose from a variety of themes and layouts to suit your style.
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-3">

            <h3 className="font-bold text-xl">Fast and Responsive</h3>
            <p className="text-gray-600">
              Your portfolio will look great on any device, guaranteed.
            </p>
          </div>
        </Card>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About FolioCraft</h2>
          <p className="text-lg text-gray-700 mb-6">
            FolioCraft is the ultimate platform for creating professional and
            stunning portfolio websites. Whether you're an artist, developer, or
            freelancer, we help you showcase your skills and achievements to the
            world.
          </p>

          <Link href="/about">
            <Button variant="default" >
              Learn More
            </Button>
          </Link>

        </div>
      </section>


      {/* Testimonials Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="p-3">
              <p className="italic">
                "FolioCraft made it so easy to build my portfolio. I landed my
                dream job within weeks!"
              </p>
              <h4 className="font-bold mt-4">- Jane Doe, Designer</h4>

            </div>
          </Card>
          <Card>
            <div className="p-3">
              <p className="italic">
                "I love how customizable the themes are. It feels like my
                portfolio truly represents me."
              </p>
              <h4 className="font-bold mt-4">- John Smith, Developer</h4>
            </div>
          </Card>
          <Card>
            <div className="p-3">
              <p className="italic">
                "The drag-and-drop editor is a game-changer. I built my site in
                just a few hours!"
              </p>
              <h4 className="font-bold mt-4">- Sarah Lee, Freelancer</h4>
            </div>
          </Card>
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section className="bg-indigo-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Create Your Portfolio?
        </h2>
        <p className="text-lg mb-6">
          Sign up today and start building your professional portfolio in
          minutes.
        </p>
        <Link href="/auth/signup" >
          <Button variant="default" size="lg" >
            Get Started
          </Button>
        </Link>

      </section>



      {/* FAQ Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card >
            <div className="p-3">
              <h3 className="font-bold">Is FolioCraft free to use?</h3>
              <p className="text-gray-600">
                Yes, FolioCraft offers a free plan with essential features. Premium
                plans are available for more advanced functionalities.
              </p>

            </div>
          </Card>
          <Card>
            <div className="p-3">
              <h3 className="font-bold">Can I use my own domain?</h3>
              <p className="text-gray-600">
                Absolutely! You can connect your custom domain to your portfolio
                website.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-3">
              <h3 className="font-bold">Do I need coding skills?</h3>
              <p className="text-gray-600">
                Not at all! FolioCraft is designed for everyone, regardless of
                technical expertise.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-3">
              <h3 className="font-bold">Can I change my theme later?</h3>
              <p className="text-gray-600">
                Yes, you can switch themes and layouts anytime without losing your
                content.
              </p>
            </div>
          </Card>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 FolioCraft. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/terms" className="text-sm">
              Terms of Service
            </a>
            <a href="/privacy" className="text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
