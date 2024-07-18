import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const [visible, setVisible] = useState(false);
  const { alert, alertKey } = useSelector((state) => state.alert);

  useEffect(() => {
    if (alert.status !== "idle") {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alert.status, alert.message, alertKey]);

  if (!visible || alert.status == `idle`) return null;

  return (
    <div
      className={`fixed w-2/3 min-[500px]:w-1/2 sm:w-5/12 md:w-1/3 lg:w-1/4 xl:w-1/5 m-8 z-10 right-0 top-0 p-5 text-hirejob-white border ${
        alert.status === `success` && "border-hirejob-success-dark"
      } ${alert.status === `failed` && `border-hirejob-danger-dark`} rounded ${
        alert.status === `success` && `bg-[#5cb85ce8]`
      } ${alert.status === `failed` && `bg-[#f31e13cb]`} ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 `}
    >
      <div className="flex items-center gap-3 mb-2 transition-transform transform">
        <span
          className={`font-bold rounded-[50%] w-7 h-7 ${
            alert.status === `success` && `bg-hirejob-success-dark`
          } ${
            alert.status === `failed` && `bg-hirejob-danger-dark`
          } flex justify-center items-center`}
        >
          {alert.status === `success` && <>&#10004;</>}
          {alert.status === `failed` && <>&#10006;</>}
        </span>
        <h1 className="font-bold text-lg">
          {alert.status === `success` && `Success`}
          {alert.status === `failed` && `Error`}
        </h1>
      </div>
      {alert.message && <p className="font-medium text-lg">{alert.message}</p>}
    </div>
  );
};

export default Alert;
