"use client"
import { getLocalStorage } from '@/src/utils';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import React from 'react'

function Settings() {
  const router = useRouter();
  const loginUser: any = getLocalStorage('rememberMe')

  useEffect(() => {
    if (loginUser?.email === "teacher@gmail.com" && loginUser?.password === "123") { router.push('/settings/personal'); }
    else if (loginUser?.email === "studentgmail.com" && loginUser?.password === "123") { router.push('/settings/profile'); }
    else if (loginUser?.email === "admine@gmail.com" && loginUser?.password === "123") { router.push('/settings/users'); }
  }, [loginUser?.email, loginUser?.password, router]);

  return null;
}

export default Settings
