"use client";

import { useState, useEffect } from "react";
import { mockUser } from "@/data/mock/users";
import type { User } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      setUser(JSON.parse(stored));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("auth_user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("auth_user");
  };

  // For demo: auto-login with mock user
  const demoLogin = () => {
    login(mockUser);
  };

  return { user, isAuthenticated, isLoading, login, logout, demoLogin };
}
