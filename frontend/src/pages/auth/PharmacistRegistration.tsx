import { Link } from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  cmPassword: z.string().min(6),
}).superRefine(({ cmPassword, password }, ctx) => {
  if (password !== cmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords do not match",
      path: ["cmPassword"],
    }); 
  }
});

type formFields = z.infer<typeof schema>;

const PharmacistRegistration = () => {
 const {registerUser} = useAuth();

  const  {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting }
  } = useForm<formFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<formFields> = (data) => {
    registerUser(data.firstName,
      data.lastName,
      data.email,
      data.password,
      "PHARMACIST",
      "/activate?as=pharmacist"
    );
  }

  return (
    <div className="h-screen flex">
      <div className="w-3/5 relative">
        <div
          className="absolute inset-0 bg-bottom bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1555633514-abcee6ab92e1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
          }}
        />
        <div className="h-full flex flex-col justify-center items-center text-white">
          <div className="text-5xl font-semibold mb-6">Medicine</div>
          <div className="text-lg">Let the Power of Beats flow in you</div>
          <button className="mt-8 bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-2/5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="register-form"
          className="max-w-xl p-4 mx-auto mt-4"
        >
          <div className="mb-8 font-display text-5xl font-semibold text-center text-teal-500">
            Register
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-red-500 hover:shadow-xl focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="first name"
                {...register("firstName")}
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-purple-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="last name"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-username"
              >
                Email Address
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-orange-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-username"
                type="text"
                placeholder="someone@email.com"
                {...register("email")}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-green-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="Password"
               {...register("password")}
                required
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                htmlFor="grid-confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-blue-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-confirm-password"
                type="password"
                placeholder="Confirm Password"
                {...register("cmPassword")}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-8 py-2 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500">
              Register
            </button>
          </div>
          <div className="flex justify-center mt-1">
            <Link
              to={"/pharmacists/login"}
              className="text-teal-500 hover:text-teal-700 text-lg font-semibold no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PharmacistRegistration;
