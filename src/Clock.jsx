import { useState, useEffect } from "react";

export default function Clock({ timeZone }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <p>{date.toLocaleString("en-US", { timeZone })} ({timeZone})</p>;
}