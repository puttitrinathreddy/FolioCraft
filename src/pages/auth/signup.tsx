// pages/auth/signup.tsx
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
import { setUser } from '@/redux/slices/userSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignUp() {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/auth/signup', {
          username: values.username,
          email: values.email,
          password: values.password,
        });
        dispatch(setUser(response.data.user));  // Dispatch action to set user data
        // Redirect to dashboard or portfolio builder page
      } catch (err) {
        setError('Error during registration. Please try again.');
      }
    },
  });

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Create Your Account</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && formik.touched.username && (
            <div className="text-red-500 text-sm">{formik.errors.username}</div>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          )}
        </div>
        <Button type="submit" variant="default" size="lg" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
