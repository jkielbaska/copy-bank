import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { set, ref } from "firebase/database";
import { ResultHandler } from "../types/ResultHandler";
const RegisterSchema = z.object({
  name: z.string().min(1, { message: "required" }).max(50),
  surname: z.string().min(1, { message: "required" }).max(50),
  email: z.string().email({ message: "Invalid email address" }).min(1).max(50),
  phonenumber: z.string().max(11),
  login: z.string().min(1, { message: "required" }).max(20),
  password: z.string().min(1, { message: "required" }).max(50),
  avatar: z.any(),
  // .regex("")
});

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

interface UseRegisterUserProps extends ResultHandler<string> {}

export const useRegisterUser = ({
  onError,
  onSuccess,
}: UseRegisterUserProps) => {
  const { handleSubmit, ...form } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async ({
    password,
    email,
    name,
    surname,
    phonenumber,
    login,
    avatar,
  }: RegisterSchemaType) => {
    setIsLoading(true);
    try {
      const {
        user: { uid },
      } = await createUserWithEmailAndPassword(auth, email, password);
      await set(ref(db, "users/" + uid), {
        email,
        name,
        surname,
        phonenumber,
        login,
        avatar,
        uid,
      });
      onSuccess?.(email);
    } catch (err) {
      console.error(err);
      onError?.(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    form: {
      handleRegister: handleSubmit(handleRegister),
      ...form,
    },
  };
};
