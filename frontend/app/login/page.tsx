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
  const [localLoading, setLocalLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  // Get state from Redux
  const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Combined loading state for better UX
  const isSubmitting = localLoading || isLoading;

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
    setLocalLoading(true); 
    
    try {
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
        console.log('🚀 Starting registration...');
        const registerData = {
          username: data.username,
          email: data.email!,
          password: data.password,
          password_confirm: data.password_confirm!, 
          first_name: data.first_name!,
          last_name: data.last_name!
        };
        
        console.log('📤 Dispatching registerUser...');
        const result = await dispatch(registerUser(registerData));
        console.log('✅ Registration dispatch complete');
        
        if (registerUser.fulfilled.match(result)) {
          console.log("REGISTRATION SUCCESS:", result.payload);
          toast.success('Registration successful! Please sign in.');
          setIsLogin(true);
          reset();
        }
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    dispatch(clearError());
    reset();
  };

  return (
    <div className="min-h-screen" style={{ background: '#FFFBEB' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>
      
      <Toaster position="top-right" />
      
      <div className="w-full max-w-md mx-auto pt-16 pb-8 px-4">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-lg" style={{
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            boxShadow: '0 8px 24px rgba(234,88,12,0.35)'
          }}>
            <span className="text-white text-3xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>CC</span>
          </div>
          <h1 className="text-4xl font-bold">
            <span style={{ color: '#f59e0b' }}>Code</span>
            <span style={{ color: '#333333' }}>Commerce</span>
          </h1>
          <p className="mt-2 font-medium" style={{ color: '#666666' }}>Premium Tech Gear</p>
        </div>

        {/* Login/Register Card */}
        <div className="rounded-3xl shadow-2xl overflow-hidden" style={{ 
          background: '#FFFFFF',
          border: '1px solid rgba(245,158,11,0.2)'
        }}>
          {/* Tab Switcher */}
          <div className="flex border-b" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
            <button
              onClick={() => !isLogin && handleModeSwitch()}
              type="button"
              className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
                isLogin
                  ? 'text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
              style={isLogin ? {
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              } : {}}
            >
              Sign In
            </button>
            <button
              onClick={() => isLogin && handleModeSwitch()}
              type="button"
              className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${
                !isLogin
                  ? 'text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
              style={!isLogin ? {
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              } : {}}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 rounded-xl" style={{ 
                background: 'rgba(245,158,11,0.1)', 
                border: '1px solid rgba(245,158,11,0.3)'
              }}>
                <p className="text-sm font-medium" style={{ color: '#ea580c' }}>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* First Name and Last Name - Only for Registration */}
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#f59e0b' }} />
                      <input
                        type="text"
                        {...register('first_name', {
                          required: !isLogin && 'First name is required',
                          minLength: {
                            value: 2,
                            message: 'First name must be at least 2 characters'
                          }
                        })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 outline-none transition"
                        style={{
                          background: '#F9F9F9',
                          border: '1px solid #E0E0E0',
                          color: '#333333'
                        }}
                        placeholder="John"
                      />
                    </div>
                    {errors.first_name && (
                      <p className="text-xs mt-1" style={{ color: '#ea580c' }}>{errors.first_name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#f59e0b' }} />
                      <input
                        type="text"
                        {...register('last_name', {
                          required: !isLogin && 'Last name is required',
                          minLength: {
                            value: 2,
                            message: 'Last name must be at least 2 characters'
                          }
                        })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 outline-none transition"
                        style={{
                          background: '#F9F9F9',
                          border: '1px solid #E0E0E0',
                          color: '#333333'
                        }}
                        placeholder="Doe"
                      />
                    </div>
                    {errors.last_name && (
                      <p className="text-xs mt-1" style={{ color: '#ea580c' }}>{errors.last_name.message}</p>
                    )}
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#f59e0b' }} />
                  <input
                    type="text"
                    {...register('username', {
                      required: 'Username is required',
                      minLength: {
                        value: 3,
                        message: 'Username must be at least 3 characters'
                      }
                    })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 outline-none transition"
                    style={{
                      background: '#F9F9F9',
                      border: '1px solid #E0E0E0',
                      color: '#333333'
                    }}
                    placeholder="johndoe"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.username && (
                  <p className="text-xs mt-1" style={{ color: '#ea580c' }}>{errors.username.message}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#f59e0b' }} />
                    <input
                      type="email"
                      {...register('email', {
                        required: !isLogin && 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 outline-none transition"
                      style={{
                        background: '#F9F9F9',
                        border: '1px solid #E0E0E0',
                        color: '#333333'
                      }}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs mt-1" style={{ color: '#ea580c' }}>{errors.email.message}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#f59e0b' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                    className="w-full pl-11 pr-11 py-3 rounded-xl focus:ring-2 outline-none transition"
                    style={{
                      background: '#F9F9F9',
                      border: '1px solid #E0E0E0',
                      color: '#333333'
                    }}
                    placeholder="••••••••"
                    disabled={isSubmitting}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition"
                    style={{ color: '#f59e0b' }}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs mt-1" style={{ color: '#ea580c' }}>{errors.password.message}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#f59e0b' }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('password_confirm', {
                        required: !isLogin && 'Please confirm your password',
                        validate: value => value === password || 'Passwords do not match'
                      })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 outline-none transition"
                      style={{
                        background: '#F9F9F9',
                        border: '1px solid #E0E0E0',
                        color: '#333333'
                      }}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password_confirm && (
                    <p className="text-xs mt-1" style={{ color: '#ea580c' }}>{errors.password_confirm.message}</p>
                  )}
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded"
                      style={{ accentColor: '#f59e0b' }}
                    />
                    <span className="ml-2 text-sm" style={{ color: '#666666' }}>Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm font-semibold"
                    style={{ color: '#f59e0b' }}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-semibold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  boxShadow: '0 4px 16px rgba(234,88,12,0.35)'
                }}
              >
                {isSubmitting ? (
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
                <div className="w-full border-t" style={{ borderColor: '#E0E0E0' }}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4" style={{ background: '#FFFFFF', color: '#666666' }}>Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 rounded-xl transition-all"
                style={{
                  border: '1px solid #E0E0E0',
                  background: '#F9F9F9'
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#f59e0b"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#ea580c"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#f59e0b"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#ea580c"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2 text-sm font-semibold" style={{ color: '#333333' }}>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 rounded-xl transition-all"
                style={{
                  border: '1px solid #E0E0E0',
                  background: '#F9F9F9'
                }}
              >
                <svg className="w-5 h-5" fill="#f59e0b" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="ml-2 text-sm font-semibold" style={{ color: '#333333' }}>Facebook</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm mt-6 font-medium" style={{ color: '#666666' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={handleModeSwitch}
            type="button"
            className="font-bold"
            style={{ color: '#f59e0b' }}
          >
            {isLogin ? 'Sign up here' : 'Sign in here'}
          </button>
        </p>
      </div>
    </div>
  );
}