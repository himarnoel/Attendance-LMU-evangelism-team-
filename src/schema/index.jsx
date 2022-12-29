import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
 
export const link = "https://attendance-system.up.railway.app/attendance";


export const Attend = () => {};

// /Yup  /////

export const basicSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please enter valid name")
    .required("Please fill up this field"),

  lastname: yup
    .string()
    .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, "Please enter valid name")
    .max(40)
    .required("Please fill up this field"),

  regNo: yup
    .string()

    .required("Please fill up this field"),

  matricNo: yup
    .string()

    .required("Please fill up this field"),

  gender: yup
    .string()

    .required("Please fill up this field"),

  level: yup
    .number()

    .required("Please fill up this field"),

  roomNo: yup
    .string()

    .required("Please fill up this field"),

  hall: yup
    .string()

    .required("Please fill up this field"),

  department: yup
    .string()

    .required("Please fill up this field"),

  webmail: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),

  subunit: yup
    .string()

    .required("Please fill up this field"),

  PhoneNo: yup
    .string()

    .required("Please fill up this field"),
    dob: yup
    .string()

    .required("Please fill up this field"),
});
