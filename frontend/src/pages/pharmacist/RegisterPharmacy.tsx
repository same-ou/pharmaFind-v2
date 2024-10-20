import {useForm, SubmitHandler} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, 
    FormField, 
    FormControl, 
    FormItem, 
    FormLabel, 
    FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { registerPharmacy } from "@/services/PharmacyService";

import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string(),
  telephone: z.string(),
  street: z.string(),
  city: z.string(),
  postalCode: z.string(),
});

type formFields = z.infer<typeof schema>;

const RegisterPharmacy = () => {
  const navigate = useNavigate();
  const form = useForm<formFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<formFields> = (data) => {
    console.log(data);
    registerPharmacy(
      data.name,
      data.telephone,
      data.street,
      data.city,
      data.postalCode
    ).then((response) => {
      if (response.status === 200) {
        navigate("/pharmacists/dashboard");
      }
    }
    ).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="h-screen flex">
      <div className="w-3/5 relative">
        <div
          className="absolute inset-0 bg-bottom bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        />
   
      </div>

      <div className="flex items-center justify-center w-2/5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          id="register-form"
          className="max-w-xl p-4 mx-auto mt-4 w-full"
        >
         <FormField 
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">Pharmacy Name</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="name" 
                        type="text"
                        {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
          />

          <FormField 
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="+212 552 859605" 
                        type="tel"
                        {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
          />

        <div className="grid gap-2">
        <FormField 
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">Street</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="123 Main St" 
                        type="text"
                        {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
          />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
            <FormField 
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">City</FormLabel>
                      <FormControl>
                        <Input 
                        placeholder="Casablanca" 
                        type="text"
                        {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
          />  
            </div>
            <div className="grid gap-2">
            <FormField 
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="ml-3 text-sm font-bold text-teal-500 tracking-wide">Postal Code</FormLabel>
                      <FormControl>
                      <Input id="postal-code" placeholder="10001" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button className="px-8 py-2 w-full font-semibold text-white shadow-lg bg-gradient-to-r from-teal-500 to-teal-600">
              Register
            </Button>
          </div>
        </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPharmacy