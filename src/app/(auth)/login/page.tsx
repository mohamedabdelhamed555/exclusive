"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginFormPayload, loginFormSchema } from "@/schema/login.schema"
import {signIn} from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"




export default function LoginPage() {

  const router = useRouter()
  const form = useForm(
    {
      resolver:zodResolver(loginFormSchema),
      defaultValues:{email:"" , password:""}
    })
    async function onSubmit(values:LoginFormPayload) {
  try {
    const res = await signIn("credentials",{
      email:values.email,
      password:values.password,
      redirect:false,
      callbackUrl:"/"}
    );
    if (res?.ok) {
      // go to home
      toast.success("Login Successfully",
        {
          position:"top-center"
        }
      );

      router.push("/")

    }else {
      // error
      toast.error(res?.error ||"Event has been created.",
        {
          position:"top-center"
        }
      )
    }
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/*************** Email ***************/}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="mohamed@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*************** password ***************/}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*************" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
    </section>
  )
}
