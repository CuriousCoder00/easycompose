import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LoginInput, loginSchema } from "@/lib/validations/auth.validations";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginInput) => {
    setLoading(true);
    // try {
    //   const res = await loginService(data);
    //   toast({
    //     title: res.message,
    //     variant: res.status === 200 ? "default" : "destructive",
    //   });
    //   localStorage.setItem("writeup_userId", res.user.id as string);
    //   if (res.status === 200) {
    //     window.location.href = "/";
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast({
    //     title: (error as Error).message,
    //     variant: "destructive",
    //   });
    // } finally {
    //   setLoading(false);
    // }
    toast({
      title: "Working on it..",
      variant: "destructive",
    });
  };

  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full gap-4 my-4"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <AuthInput
          form={form}
          label="Email Address"
          name="email"
          disabled={loading}
          placeholder="john.doe@gmail.com"
        />
        <AuthInput
          form={form}
          label="Password"
          name="password"
          disabled={loading}
          placeholder="******"
          type="password"
        />
        <p className="text-xs text-end">
          <Link to="/auth/register" className="text-sky-600">
            Forgot Password?
          </Link>
        </p>
        <Button disabled={loading} type="submit" className="w-full">
          {loading ? <Loader className="animate-spin" /> : "Login"}
        </Button>
        <div>
          <p className="text-sm text-end">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-sky-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </AuthForm>
  );
};

export default LoginForm;
