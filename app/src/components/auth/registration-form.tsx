import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "./auth-form";
import { AuthInput } from "./auth-input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import {
  RegistrationInput,
  registrationSchema,
} from "@/lib/validations/auth.validations";
import { register } from "@/services/auth.services";

const RegistrationForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const navigate = useNavigate();

  const form = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signup = async (data: RegistrationInput) => {
    setLoading(true);
    try {
      const res = await register(data);
      toast({
        title: res.message,
        variant: "default",
      });
      navigate("/auth/login");
    } catch (error) {
      toast({
        title: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthForm form={form}>
      <form
        className="flex flex-col w-full gap-4"
        onSubmit={form.handleSubmit(signup)}
      >
        <AuthInput
          form={form}
          label="Full Name"
          name="name"
          disabled={loading}
          placeholder="John Doe"
        />
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
        <AuthInput
          form={form}
          label="Confirm Password"
          name="confirmPassword"
          disabled={loading}
          placeholder="******"
          type="password"
          job="confirmPassword"
        />
        <Button disabled={loading} type="submit" className="w-full">
          {loading ? <Loader className="animate-spin" /> : "Register"}
        </Button>
        <div>
          <p className="text-sm text-end">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-sky-600">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthForm>
  );
};

export default RegistrationForm;
