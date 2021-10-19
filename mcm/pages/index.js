import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Button from '../components/Button'

import mainhero from "../public/mainhero.mp4";
import pexels from "../public/pexels.mp4";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <video
          autoPlay
          loop
          muted
          src={mainhero}
          style={{
            objectFit: "cover",
            position: "absolute",
            height: " 100%",
            width: "100%",
            
          }}
          width={"100%"}
          height={"100%"}
          className="wrapper__video"
        ></video>

        <div
          className="overlay"
          style={{
            position: " absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            textAlign: "center",
            lineHeight: "25",
          }}
        >
          <h1 className="titles"
            style={{
              fontsize: " 32pt",
              fontweight: " bold",
              textshadow: " 0 0 .3em #000",
              margin: "0 0",
              color: "whitesmoke",
            }}
          >
            Perfomance Motors
          </h1>

          <Button >
             Discover 
          </Button>
        </div>
    </div>

      <div
        className="sub"
        style={{
          height: "100vh",
          background: "black",
          color: "white",
          display: "flex",
        }}
      >
        <div className="sub-left" style={{ width: "-webkit-fill-available" }}>
          {" "}
          <h1 className="titles">Lil text</h1>{" "}
        </div>
        <div className="sub-right" style={{ width: "-webkit-fill-available" }}>
          <h2 className="titles">Beautifully hand crafted briging unique touch </h2>
          <video
          autoPlay
          loop
          muted
          src={pexels}
          style={{
            objectFit: "cover",
            position: "absolute",
            height: " 70%",
            width: "70%",
            
            
          }}
          width={"70%"}
          height={"70%"}
          className="wrapper__video"
        ></video>
        </div>
      </div>
    </>
  );
}
