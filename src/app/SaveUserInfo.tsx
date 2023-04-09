"use client";

import { useEffect } from "react";

const makePeticion = async () => {
  try {
    const res = await fetch("/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ date: new Date(Date.now()).toLocaleString() }),
    });
    return {
      status: res.status,
      data: await res.json(),
    };
  } catch (e) {
    return null;
  }
};

export default function SaveUserInfo() {
  useEffect(() => {
    (async () => {
      try {
        process.env.NEXT_PUBLIC_USE_DISCORD && (await makePeticion());
      } catch (e) {
        return null;
      }
    })();
  }, []);
  return null;
}
