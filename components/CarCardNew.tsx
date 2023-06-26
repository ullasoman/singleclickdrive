"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "@utils";
import { CarList } from "@types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import Link from "next/link";

interface CarCardProps {
  car: CarList;
}

const CarCard = ({ car }: CarCardProps) => {
  const {title, image, per_day, per_month, category, door,passenger,luggage } = car;

  return (
    <div className="car-card group">
  <div className="car-listing">
    <div className="thumb">
      <div className="tag">FEATURED</div>
      <Image 
      src={image} 
      alt='car model' 
      width="284"
      height="183"
      priority 
      className='object-cover' />
      <div className="thmb_cntnt2">
        <ul className="mb-0">
          <li className="inline-block">
            <Link className="text-white" href="/"><span className="flaticon-photo-camera mr3"></span> 22</Link>
          </li>
          <li className="inline-block">
            <Link className="text-white" href="/"><span className="flaticon-play-button mr3"></span> 3</Link>
          </li>
        </ul>
      </div>
      <div className="thmb_cntnt3">
        <ul className="mb-0">
          <li className="inline-block">
            <Link href="/"><span className="flaticon-shuffle-arrows"></span></Link>
          </li>
          <li className="inline-block">
            <Link href="/"><span className="flaticon-heart"></span></Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="details">
      <div className="wrapper">
        <h5 className="price mb-1">AED {per_day}169 / Day</h5>
        <h6 className="title text__truncate">
            <Link href="/">{title}</Link>
        </h6>
      </div>
      <div className="listing_footer">
        <ul className="mb-0">
          <li className="inline-block">
            <span className="flaticon-road-perspective me-2"></span>4789
          </li>
          <li className="inline-block">
            <span className="flaticon-gas-station me-2"></span>Diesel
          </li>
          <li className="inline-block">
            <span className="flaticon-gear me-2"></span>Automatic
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
};

export default CarCard;
