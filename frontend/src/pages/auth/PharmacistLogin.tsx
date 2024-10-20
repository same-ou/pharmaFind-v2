
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast"

const schema = z.object({
  email: z.string()
          .email(),
  password: z.string().min(6),
});


type formFields = z.infer<typeof schema>;

const PharmacistLogin = () => {
  const { loginUser } = useAuth();
  const form = useForm<formFields>({
    resolver: zodResolver(schema)
  });

  function onSubmit(data: formFields) {
    loginUser(data.email, data.password);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 
  return (
    <>
      <div className="relative min-h-screen flex">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-teal-900 text-white bg-no-repeat bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)",
            }}
          >
            <div className="absolute bg-gradient-to-b from-teal-600 to-teal-400 opacity-75 inset-0 z-0"></div>
            <div className="w-full max-w-md z-10">
              <div className="sm:text-4xl font-semibold text-gray-100 leading-tight mb-6">
                Your medication, delivered <br /> Say goodbye to all your
                healthcare worries with us
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                PharmaFind is a one-stop solution for all your healthcare
                needs.the bridge between the patient and the nearest pharmacy.
                We are here to help you find the nearest pharmacy and get your
                medication delivered to your doorstep. We are here to help you
                find the nearest pharmacy and get your medication delivered to
                your doorstep.
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-center sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-semibold text-teal-600">
                  Welcom Back!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>
              <Form {...form}>
              <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">Email</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="Email" 
                        type="email"
                        {...field}
                        className=" w-full text-base px-4 py-2 border-b border-gray-300 placeholder-gray-600 focus:outline-none rounded-2xl focus:border-teal-500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">Password</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Password" 
                      type="password"
                      {...field}
                      className="w-full text-base px-4 py-2 border-b rounded-2xl border-gray-300 placeholder-gray-600 focus:outline-none focus:border-teal-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
               
                <div className="flex items-center justify-between">
                
                  <div className="text-sm">
                    <a
                      href="#0"
                      className="text-teal-400 hover:text-teal-600"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-teal-500 to-teal-600  hover:bg-gradient-to-l hover:from-teal-600 hover:to-teal-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </Button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-600">
                  <span>Don't have an account?</span>
                  <Link
                    to="/pharmacists/register"
                    className="text-teal-500 hover:text-teal-700 text-lg font-semibold no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacistLogin;
