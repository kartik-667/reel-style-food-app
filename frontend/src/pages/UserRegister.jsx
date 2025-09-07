import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function UserRegister() {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Brand / Logo */}
        <div className="flex items-center justify-center mb-8 select-none">
          <div className="h-10 w-10 rounded-2xl bg-black text-white grid place-items-center font-bold">U</div>
          <span className="ml-3 text-xl font-semibold tracking-tight text-slate-900">YourApp</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-slate-900">Hello new User !</h1>
            <p className="mt-1 text-sm text-slate-500">Create a new account to continue.</p>

            {/* Form (no functionality wired) */}
            <form className="mt-6 grid gap-5" /* onSubmit={handleSubmit} */>
              {/* Name */}
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Kartik Verma"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                  <a href="#" className="text-xs font-medium text-slate-600 hover:text-slate-900">Forgot?</a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/20" />
                <label htmlFor="remember" className="text-sm text-slate-600">Remember me</label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/10 active:translate-y-[1px]"
              >
                Register
              </button>

              {/* Divider */}
              <div className="relative flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs text-slate-500">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Socials (no functionality wired) */}
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  Continue with Google
                </button>
                <button type="button" className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  Continue with GitHub
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?  
          <Link to='/user/login' className="font-semibold text-slate-900 hover:underline"> Log In</Link>
        </p>
      </div>
    </div>
  );
}


// export default UserLogin
