import { useState, useEffect } from "react";

const TimeAgo = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const secondsDiff = Math.floor((new Date() - new Date(date)) / 1000);

      if (secondsDiff <= 0) {
        setTimeAgo("Just now");
        return;
      }

      let interval = Math.floor(secondsDiff / 31536000);
      if (interval >= 1) {
        setTimeAgo(`${interval} year${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(secondsDiff / 2592000);
      if (interval >= 1) {
        setTimeAgo(`${interval} month${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(secondsDiff / 86400);
      if (interval >= 1) {
        setTimeAgo(`${interval} day${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(secondsDiff / 3600);
      if (interval >= 1) {
        setTimeAgo(`${interval} hour${interval === 1 ? "" : "s"} ago`);
        return;
      }

      interval = Math.floor(secondsDiff / 60);
      if (interval >= 1) {
        setTimeAgo(`${interval} minute${interval === 1 ? "" : "s"} ago`);
        return;
      }

      setTimeAgo(
        `${Math.floor(secondsDiff)} second${
          Math.floor(secondsDiff) === 1 ? "" : "s"
        } ago`
      );
    };

    calculateTimeAgo();

    const timer = setInterval(() => {
      calculateTimeAgo();
    }, 60000);

    return () => clearInterval(timer);
  }, [date]);

  return timeAgo;
};

export default TimeAgo;
