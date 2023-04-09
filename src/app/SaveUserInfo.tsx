"use client";

import { useEffect } from "react";

const getIpData = async () => {
  const url = `http://ip-api.com/json/?fields=61439`;
  const res = await fetch(url);
  return {
    status: res.status,
    data: await res.json(),
  };
};
const makePeticion = async () => {
  try {
    const { status, data } = await getIpData();
    console.log(data);
    if (status !== 200) return null;
    const res = await fetch("/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data || { message: "no data" }),
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
