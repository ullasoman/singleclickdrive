import { fetchCars,fetchRentalCars} from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero, ServiceCategory, CarCardNew } from "@components";
import Brands from "@components/Brands";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const latestCars =  await fetchRentalCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  const isDataEmpti = !Array.isArray(latestCars) || latestCars.length < 1 || !latestCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <Brands/>
      <ServiceCategory/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-2xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
      </div>
      {!isDataEmpti ? (
        <section className="bg__light">
          <div className='mt-12 padding-x padding-y max-width' id='discover'>
            <div className='home__cars-wrapper'>
              {latestCars?.map((data) => (
                <CarCardNew car={data} />
              ))}
            </div>
            </div>
          </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
    </main>
  );
}
