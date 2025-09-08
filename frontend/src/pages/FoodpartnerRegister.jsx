import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function FoodpartnerRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contactname: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5555/api/auth/foodpartner/register",
        form,
        { withCredentials: true }
      );
      console.log(res);
      navigate("/createfood");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Brand / Logo */}
        <div className="flex items-center justify-center mb-8 select-none">
          <div className="h-10 w-10 rounded-2xl bg-black text-white grid place-items-center font-bold">
            F
          </div>
          <span className="ml-3 text-xl font-semibold tracking-tight text-slate-900">
            FoodPartner
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-slate-900">
              Register as a Partner
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Create your account to join the FoodPartner network.
            </p>

            {/* Form (no functionality wired) */}
            <form className="mt-6 grid gap-5" onSubmit={submitForm}>
              {/* Name */}
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-700"
                >
                  Business Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Delicious Foods Pvt Ltd"
                  autoComplete="organization"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="partner@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Contact Name */}
              <div className="grid gap-2">
                <label
                  htmlFor="contactname"
                  className="text-sm font-medium text-slate-700"
                >
                  Contact Person
                </label>
                <input
                  id="contactname"
                  name="contactname"
                  type="text"
                  value={form.contactname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Phone */}
              <div className="grid gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Address */}
              <div className="grid gap-2">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-slate-700"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="123 Main Street, City, State, ZIP"
                  rows={3}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:border-slate-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/10 active:translate-y-[1px]"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?
          <Link
            to="/foodpartner/login"
            className="font-semibold text-slate-900 hover:underline"
          >
            Log in as Business
          </Link>
        </p>
      </div>
    </div>
  );
}
