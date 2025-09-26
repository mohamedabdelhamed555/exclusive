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
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { formState, registerFormSchema, RegisterSchema } from "@/schema/register.schema"
import { handleRegister } from "@/services/register.services"
import { useActionState, useEffect } from "react"

export default function RegisterPage() {


  const [action, formAction] = useActionState(handleRegister, formState)
  const router = useRouter()
  const form = useForm<RegisterSchema>(
    {
      resolver: zodResolver(registerFormSchema),
      defaultValues: { name: "", email: "", password: "", rePassword: "", phone: "" }
    })


  useEffect(() => {
    if (action) {
      if (!action.success && action.message) {
        toast.error(action.message, {
          position: "top-center"
        })
      }

      if (action.success && action.message) {
        toast.success(action.message, {
          position: "top-center"
        }),
          router.push("/login")
      }
    }
  }, [action, router])

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Register</h1>
        <Form {...form}>
          <form action={formAction} className="space-y-8">
            {/*************** Name ***************/}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="mohamed Abdelhamed" {...field} />
                  </FormControl>
                  <FormMessage>{action?.error?.name?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            {/*************** Email ***************/}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="mohamed@gmail.com" {...field} type="email" />
                  </FormControl>
                  <FormMessage>{action?.error?.email?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            {/*************** Phone ***************/}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder=" ************* " type="tel" {...field} />
                  </FormControl>
                  <FormMessage>{action?.error?.phone?.[0]}</FormMessage>
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
                    <Input placeholder="*************" type="password" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage>{action.error?.password?.[0]}</FormMessage>
                </FormItem>
              )}
            />
            {/*************** rePassword ***************/}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*************" type="password" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage>{action.error?.rePassword?.[0]}</FormMessage>
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
