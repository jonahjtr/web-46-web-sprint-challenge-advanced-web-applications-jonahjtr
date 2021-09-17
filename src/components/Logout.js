import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import axiosWithAuth from "../helpers/axiosWithAuth";

export default function Logout() {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("token");

        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
}
