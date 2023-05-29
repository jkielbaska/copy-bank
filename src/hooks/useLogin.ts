import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { get, ref } from "firebase/database";
import { ResultHandler } from "../types/ResultHandler";
const LoginSchema = z.object({
  email: z.string().min(1, { message: "required" }).max(20),
  password: z.string().min(1, { message: "required" }).max(50),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

interface UseLoginUserProps extends ResultHandler<string> {}

export const useLoginUser = ({ onError, onSuccess }: UseLoginUserProps) => {
  const { handleSubmit, ...form } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async ({ password, email }: LoginSchemaType) => {
    setIsLoading(true);
    try {
      await setPersistence(auth, browserSessionPersistence);
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(auth, email, password);
      const dataSnapshot = await get(ref(db, "users/" + uid));
      onSuccess?.(email);
      console.log(auth.currentUser);
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
      handleLogin: handleSubmit(handleLogin),
      ...form,
    },
  };
};
