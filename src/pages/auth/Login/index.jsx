import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../configs/redux/action/authAction";
import style from "../../../styles/pages/auth.module.css";
import loader from "../../../styles/components/loading.module.css";
import Dashboard from "../../../component/module/auth/Dashboard";
import AuthDesc from "../../../component/module/auth/AuthDesc";
import Input from "../../../component/base/Input";
import Button from "../../../component/base/Button";
import { validateLogin } from "../../../utils/validation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { loading } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = {};

    Object.keys(form).forEach((key) => {
      const errorMessage = validateLogin({ name: key, value: form[key] });
      if (errorMessage) {
        errors[key] = errorMessage;
      }
    });

    if (Object.keys(errors).length === 0) {
      dispatch(login(form, navigate));
    } else {
      setErrors(errors);
    }
  };

  const handleNavigate = () => {
    dispatch(reset());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateLogin({ name, value });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <main
      className={`container h-screen max-w-full flex items-center lg:block py-[39px] ${style.bgAuthWorker}`}
    >
      <div className="flex mx-5 md:mx-[75px] rounded lg:rounded-none bg-[#ffffffd3] lg:bg-hirejob-light lg:bg-none shadow-md lg:shadow-none px-5 lg:px-0 ">
        <Dashboard />

        <section className="w-full py-9 lg-py-0 lg:w-[650px] 2xl:w-3/5 ml-0 lg:ml-[75px] mt-0 lg:mt-[106px] flex flex-col justify-center lg:justify-start text-hirejob-dark">
          <AuthDesc
            title="Hello, Pewpeople"
            para="
Embrace excellence and discover limitless opportunities with Peworld."
          />
          <form onSubmit={handleLogin}>
            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              validation={errors.email}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              validation={errors.password}
            />
            <h6 className="font-normal text-base leading-[21.79px] block my-2 text-right">
              <Link
                className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
                to="/reset-password"
                onClick={handleNavigate}
              >
                Forgot Password?
              </Link>
            </h6>
            <Button
              colorButton={"secondary"}
              extra="p-[15px] my-4 h-[50px]"
              isDisabled={loading}
            >
              {!loading ? (
                `Sign In`
              ) : (
                <div className={`mx-auto ${loader.loaderDotsl21}`}></div>
              )}
            </Button>
          </form>
          <h6 className="font-normal text-base mt-3 leading-[21.79px] block text-center">
            Don't have an account yet?{" "}
            <Link
              className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
              to="/register"
              onClick={handleNavigate}
            >
              Sign up as worker.
            </Link>{" "}
            or{" "}
            <Link
              className="text-hirejob-yellow-normal hover:text-hirejob-yellow-dark"
              to="/recruiter/register"
              onClick={handleNavigate}
            >
              Sign up as recruiter.
            </Link>
          </h6>
        </section>
      </div>
    </main>
  );
};

export default Login;
