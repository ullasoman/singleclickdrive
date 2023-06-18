import React from "react";
import { brands } from "@constants";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <section className="padding-x py-5">
      <div className="home__text-container">
        <h1 className="text-2xl font-extrabold">Rent A Car From Top Brands</h1>
        <p>
          Get on a road-trip now with the best deals for high-end cars
          manufactured by top automobile companies in the world.
        </p>
      </div>
      <div className="py-4 mt-2">
        <div className="grid grid-cols-10 grid-flow-row gap-4">
          {brands.map((item) => (
            <Link href={"#"} key={item.value}>
              <div className="text-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={125}
                />
                <span className="text-xs">{item.no_of_cars} cars</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
