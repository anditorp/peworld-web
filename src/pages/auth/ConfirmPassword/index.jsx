import React from "react";
import Dashboard from "../../../component/module/auth/Dashboard";
import AuthDesc from "../../../component/module/auth/AuthDesc";
import Input from "../../../component/base/Input";
import Button from "../../../component/base/Button";
import style from "../../../styles/pages/auth.module.css";

const ConfirmPassword = () => {
  return (
    <main
      className={`container h-screen max-w-full flex items-center lg:block py-[39px] ${style.bgAuth}`}
    >
      <div className="flex mx-5 md:mx-[75px] rounded lg:rounded-none bg-[#ffffffd3] lg:bg-hirejob-light lg:bg-none shadow-md lg:shadow-none px-5 lg:px-0 ">
        <Dashboard />

        <section className="w-full py-9 lg-py-0 lg:w-[650px] 2xl:w-3/5 ml-0 lg:ml-[75px] mt-0 lg:mt-[106px] flex flex-col justify-center lg:justify-start text-hirejob-dark">
          <AuthDesc
            title="Reset Password"
            para="You need to change your password to activate your account"
          />
          <Input
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukan kata sandi"
          />
          <Input
            label="Confirmation new password"
            type="password"
            name="confirm-password"
            placeholder="Masukan konfirmasi kata sandi"
          />

          <div className="my-3"></div>
          <Button colorButton={"secondary"} extra="p-[15px] my-4">
            Reset password
          </Button>
        </section>
      </div>
    </main>
  );
};

export default ConfirmPassword;
