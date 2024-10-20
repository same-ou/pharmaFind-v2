import { Link } from "react-router-dom"

export default function Blog() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Pharmacy Insights</h1>
          <p className="text-muted-foreground mt-2 md:text-lg">
            Explore the latest news and trends in the pharmacy industry.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-16 grid gap-8 md:gap-12">
        <article className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="w-4 h-4" />
              <time dateTime="2023-06-27">June 27, 2023</time>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Revolutionizing Pharmacy Experiences: How Technology is Transforming the Industry
            </h2>
            <p className="text-muted-foreground">
              Discover how innovative technologies are reshaping the pharmacy industry, from streamlined patient
              experiences to enhanced medication management.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-foreground"
        
            >
              Read More
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </article>
        <article className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="w-4 h-4" />
              <time dateTime="2023-06-15">June 15, 2023</time>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Navigating the Evolving Landscape of Pharmacy Regulations
            </h2>
            <p className="text-muted-foreground">
              Explore the latest regulatory changes and their impact on pharmacy operations, ensuring compliance and
              patient safety.
            </p>
            <Link
            to="#"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-foreground"
       
            >
              Read More
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </article>
        <article className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[3/2]"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="w-4 h-4" />
              <time dateTime="2023-06-01">June 1, 2023</time>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Empowering Patients: The Rise of Telehealth in Pharmacy</h2>
            <p className="text-muted-foreground">
              Discover how telehealth is revolutionizing the way patients access pharmacy services, improving
              convenience and care.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-foreground"
            >
              Read More
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}