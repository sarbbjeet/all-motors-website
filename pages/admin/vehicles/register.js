import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import AdminWrapper from "../../../components/admin/AdminWrapper";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Indicator from "../../../components/admin/form/Indicator";
import Stage1 from "../../../components/admin/form/Stage1";
import Stage2 from "../../../components/admin/form/Stage2";
import Stage3 from "../../../components/admin/form/Stage3";
import Stage4 from "../../../components/admin/form/Stage4";
import { f1 as ff, secondary } from "../../../styles/variables.module.scss";
import { prisma } from "../../../database/prisma";
import {
  businessPicker,
  featuresPicker,
  initialPicker,
} from "../../../validation/dataPicker";
const registerPageStages = ["Initial", "Features", "Business"];
const editPageStages = ["Initial", "Features", "Business", "Gallery"];
const url = "/api/vehicles";

const dataURItoBlob = async (dataURI) => {
  return await fetch(dataURI)
    .then((r) => r.blob())
    .then((Blob) => {
      return new File([Blob], "img.jpg", { type: "image/jpg" });
    });
};

const onPublishEvent = async (data, setState, router) => {
  try {
    setState({ ...data, loading: true });
    const {
      query: { id },
    } = router;
    const formData = new FormData();

    //remove unwanted keys
    delete data.errors;
    delete data.loading;
    //convert dataUrl image to Blob format
    for (let key in data) {
      for (let nestedKey in data[key]) {
        if (nestedKey === "image" && !id)
          formData.append("image", await dataURItoBlob(data[key][nestedKey]));
        else formData.append(nestedKey, data[key][nestedKey]);
      }
    }
    //read cookie from browser if available
    const token = Cookies.get("authToken");
    await fetch(`${url}${id ? `?id=${id}` : ""}`, {
      method: `${id ? "PUT" : "POST"}`,
      body: formData,
      headers: { authorization: `Bearer ${token}` },
    }).then(async (response) => {
      const jsonData = await JSON.parse(await response.text());
      if (response.status != 200) throw jsonData;
      //successfully published vehicle
      router.push("/admin/vehicles");
      setState({ ...data, loading: false });
    });
  } catch (err) {
    setState({ ...data, loading: false });
    console.log("error.....");
    alert(`Error: ${err.error || "unknown server error"}`);
  }
};

export default function Register({ vehicle }) {
  const router = useRouter(); //page-->edit
  const page_name = vehicle ? "edit" : "register";
  const [currentStage, setCurrentStage] = useState(1);
  const alertRef = useRef(null);
  const [state, setState] = useState({
    initial: {},
    features: {},
    business: {},
    errors: {}, //pass all validation error of
    loading: false,
  });

  useEffect(() => {
    if (vehicle) setState(vehicle);
  }, []);

  const displayStage = (currentStage) => {
    switch (currentStage) {
      case 1:
        return <Stage1 state={state} setState={setState} />;
      case 2:
        return <Stage2 state={state} setState={setState} />;
      case 3:
        return <Stage3 state={state} setState={setState} />;
      case 4: //skip gallery for register page
        if (page_name == "edit") return <Stage4 />;
        break;
      default:
        break;
    }
  };

  return (
    <AdminWrapper>
      <div className="py-2 container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent p-0 text_small">
            <li className="breadcrumb-item">
              <Link href="/admin">
                <a href="dashboard.html">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/admin/vehicles">
                <a href="dashboard.html">My Vehicles</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">
              {` ${page_name == "edit" ? "Edit Vehicle" : "Register Vehicle"}`}
            </li>
          </ol>
        </nav>
        <header className="border-bottom my-4 mb-4">
          <h3 className="font-weight-light">
            <i
              className={`fas ${page_name == "edit" ? "fa-edit" : "fa-sign"}`}
            ></i>
            {` ${page_name == "edit" ? "Edit Vehicle" : "Register Vehicle"}`}
          </h3>
          {/* <p className="text-muted">
            <b>Refer:</b> #0112
          </p> */}
        </header>
        <div className="py-3">
          <div className="position-relative bg-white rounded border shadow-sm py-3">
            {/* <form id="form__1" ref={FormRef}> */}
            <Indicator
              stages={page_name == "edit" ? editPageStages : registerPageStages}
              state={state}
              setState={setState}
              currentStage={currentStage}
              changeStageEvent={(stage) => setCurrentStage(stage)}
              onPublishEvent={() => onPublishEvent(state, setState, router)}
            >
              {displayStage(currentStage)}
            </Indicator>
            {/* </form> */}
          </div>
        </div>

        <style jsx>
          {`
            header {
              border-bottom: 1px solid ${secondary}!important;
            }
            h3 {
              font-family: ${ff};
              color: ${secondary};
            }
            .alert-show {
              opacity: 100% !important;
              top: 20% !important;
              display: block !important;
            }
          `}
        </style>
      </div>
    </AdminWrapper>
  );
}

export const getServerSideProps = async (context) => {
  const {
    query: { id },
    res,
  } = context;
  if (id) {
    const res = await prisma.initial.findUnique({
      where: { id },
      include: {
        features: true,
        business: true,
      },
    });
    if (!res)
      return {
        redirect: {
          destination: "/admin/vehicles/register", // M
        },
        props: {},
      };
    const initial = initialPicker(res);
    const features = featuresPicker(res?.features);
    const business = businessPicker(res?.business);
    return {
      props: { vehicle: { initial, features, business } },
    };
  }

  return {
    props: {},
  };
};
