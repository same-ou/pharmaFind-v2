
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { Button } from "@/components/ui/button";
import { Clipboard, Search,  Pill, Upload} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"



export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center max-w-3xl py-20 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground/80 sm:text-6xl [text-wrap:balance]">
          Find the Medicines You Need
          </h1>
          <p className="mt-4 [text-wrap:balance]">
          Find the best prescription and non-prescription medicines from top pharmacies.
          </p>
          <div className="w-full mx-auto text-center mt-8">
                <form className="flex gap-2 w-full">
                  <Input type="text" placeholder="Search for medicines, vitamins, and more..." className="flex-1" />
                  <Button type="submit">Search</Button>
                </form>
          </div>
        </div>
      </MaxWidthWrapper>
      
      <section className="w-full py-4 md:py-8 lg:py-12">
         <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Order with Prescription</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Upload your prescription and we'll help you find the right medications.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="lg">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Convenient</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Shop from the Comfort of Your Home
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our user-friendly platform makes it easy to browse and order the medications and healthcare products
                  you need, without the hassle of visiting a physical pharmacy.
                </p>
                <Link
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Reliable</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our pharmacy market is stocked with genuine, high-quality medications and healthcare products,
                  ensuring you receive the care you need. Trust us to provide a safe and secure shopping experience.
                </p>
                <Link
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our pharmacy market application offers a range of features to help you find and manage your
                  medications and treatments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <Search className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Comprehensive Search</h3>
                <p className="text-muted-foreground">
                  Search our database of medications, treatments, and pharmacy services to find what you need.
                </p>
              </div>
              <div className="grid gap-1">
                <Pill className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Medication Management</h3>
                <p className="text-muted-foreground">
                  Keep track of your prescriptions, set reminders, and get information on your medications.
                </p>
              </div>
              <div className="grid gap-1">
                <Clipboard className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Pharmacy Services</h3>
                <p className="text-muted-foreground">
                  Find and book appointments with local pharmacies for consultations, vaccinations, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real users about how our pharmacy market application has helped them manage their
                  healthcare.
                </p>
              </div>
              <div className="grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-start space-y-4 rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-muted-foreground">Pharmacy Customer</div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground">
                    "I love using this app to manage my prescriptions and find\n local pharmacies. It's so convenient
                    and has saved me a lot\n of time."
                  </blockquote>
                </div>
                <div className="flex flex-col items-start space-y-4 rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Appleseed</div>
                      <div className="text-sm text-muted-foreground">Pharmacy Customer</div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground">
                    "This app has been a game-changer for me. I can easily find\n and compare medications, and the
                    pharmacy services feature\n is so helpful."
                  </blockquote>
                </div>
                <div className="flex flex-col items-start space-y-4 rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Miller</div>
                      <div className="text-sm text-muted-foreground">Pharmacy Customer</div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground">
                    "I was able to find the exact medication I needed and book an\n appointment with my local pharmacy
                    all through this app. It's\n so convenient!"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Do You Own a Pharmacy?</h2>
        <p className="text-gray-700 mb-8">
          Get more exposure and increase your customer base by joining our platform.
        </p>
        <Button asChild>
          <Link to="pharmacists/register">Register Your Pharmacy Now</Link>
        </Button>
      </div>
    </section>
    </>
  );
}
