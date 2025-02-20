"use client"

import { Button } from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

const formSchema = z.object({
    email: z.string().email("Email invalido"),
    password: z.string().min(1, "obrigatorio"),
});

type Form = z.infer<typeof formSchema>;

export function LoginForm(){
    const form = useForm<Form>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values:Form){
        console.log(values);
    }

    return(
        <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-center txt-3xl font-bold mb-8">Entrar</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[500px]">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input type="email "{...field}/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password "/>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Entrar</Button>
                </form>
            </Form>
        </section>
    )
}