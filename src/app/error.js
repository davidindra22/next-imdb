"use client";
import { useEffect } from "react";

export default function error({ error, reset }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong, please try again later.</h1>
      <button className="hover:text-amber-500" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
