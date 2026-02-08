'use client';
import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, clearError } from '@/features/auth/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import type { AppDispatch, RootState } from '@/store/store';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  // Get state from Redux
  const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  });

  const password = watch('password');

  // Clear error when component unmounts
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  // Redirect on successful login
  useEffect(() => {
    if (isAuthenticated) {
      toast.success('Login successful!');
      router.push('/');
    }
  }, [isAuthenticated, router]);

  // Show error toast when error changes
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onSubmit = async (data: {
    first_name?: string;
    last_name?: string;
    username: string;
    email?: string;
    password: string;
    password_confirm?: string;
  }) => {
    console.log('Form submitted:', isLogin ? 'Login' : 'Register');
    
    if (isLogin) {
      // LOGIN
      const loginData = {
        username: data.username,
        password: data.password
      };
      
      const result = await dispatch(loginUser(loginData));
      
      if (loginUser.fulfilled.match(result)) {
        console.log("LOGIN SUCCESS:", result.payload);
      }

    } else {
      // REGISTRATION
      const registerData = {
        username: data.username,
        email: data.email!,
        password: data.password,
        password_confirm: data.password_confirm!, // ✅ Add password_confirm
        first_name: data.first_name!,
        last_name: data.last_name!
        // role is NOT included - backend sets it automatically to 'customer'
      };
      
      const result = await dispatch(registerUser(registerData));
      
      if (registerUser.fulfilled.match(result)) {
        console.log("REGISTRATION SUCCESS:", result.payload);
        toast.success('Registration successful! Please sign in.');
        setIsLogin(true);
        reset();
      }
    }
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    dispatch(clearError());
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200 flex items-center justify-center p-4">
      <Toaster position="top-right" />
      
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-rose-900 rounded-2xl mb-4 shadow-lg">
            <span className="text-white text-3xl font-bold">CC</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            CodeCommerce
          </h1>
          <p className="text-gray-600 mt-2 font-medium">Premium Tech Gear</p>
        </div>

        {/* Login/Register Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
          {/* Tab Switcher */}
          <div className="flex border-b border-orange-100">
            <button
              onClick={() => !isLogin && handleModeSwitch()}
              type="button"
              className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
                isLogin
                  ? 'text-white bg-gradient-to-r from-yellow-500 to-rose-900'
                  : 'text-gray-500 hover:bg-orange-50'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => isLogin && handleModeSwitch()}
              type="button"
              className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'text-white bg-gradient-to-r from-yellow-500 to-rose-900'
                  : 'text-gray-500 hover:bg-orange-50'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* First Name and Last Name - Only for Registration */}
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        {...register('first_name', {
                          required: !isLogin && 'First name is required',
                          minLength: {
                            value: 2,
                            message: 'First name must be at least 2 characters'
                          }
                        })}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                        placeholder="John"
                      />
                    </div>
                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        {...register('last_name', {
                          required: !isLogin && 'Last name is required',
                          minLength: {
                            value: 2,
                            message: 'Last name must be at least 2 characters'
                          }
                        })}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                        placeholder="Doe"
                      />
                    </div>
                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>
                    )}
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    {...register('username', {
                      required: 'Username is required',
                      minLength: {
                        value: 3,
                        message: 'Username must be at least 3 characters'
                      }
                    })}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="johndoe"
                    disabled={isLoading}
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      {...register('email', {
                        required: !isLogin && 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                    className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('password_confirm', {
                        required: !isLogin && 'Please confirm your password',
                        validate: value => value === password || 'Passwords do not match'
                      })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password_confirm && (
                    <p className="text-red-500 text-xs mt-1">{errors.password_confirm.message}</p>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm bg-gradient-to-r from-yellow-500 to-rose-900 bg-clip-text text-transparent hover:from-yellow-600 hover:to-rose-950 font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-500 to-rose-900 hover:from-yellow-600 hover:to-rose-950 text-white font-semibold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </span>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-orange-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2 text-sm font-semibold text-gray-700">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="ml-2 text-sm font-semibold text-gray-700">Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-700 mt-6 font-medium">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={handleModeSwitch}
            type="button"
            className="bg-gradient-to-r from-yellow-500 to-rose-900 bg-clip-text text-transparent hover:from-yellow-600 hover:to-rose-950 font-bold"
          >
            {isLogin ? 'Sign up here' : 'Sign in here'}
          </button>
        </p>
      </div>
    </div>
  );
}