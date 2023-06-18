import React from "react";
import { category,footerLinks } from "@constants";
import Link from "next/link";
import Image from "next/image";

const ServiceCategory = () => {
  return (
    <section className="home__service_category">
      <div className="padding-x py-5 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-2xl font-extrabold">Category</h1>
        </div>
        <div className="sc__container">
        <div className="grid grid-cols-4 grid-flow-row gap-4">
        {category.map((item) => (
          <Link href={'#'} key={item.value}>
          <div className="text-center">
            <Image src={item.image} alt={item.title} width={220} height={125}/>
            <p className="text-sm">{item.title}</p>
            <span className="text-xs">{item.no_of_cars} cars</span>
          </div>
          </Link>
        ))}
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default ServiceCategory;
