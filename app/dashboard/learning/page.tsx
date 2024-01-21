import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h1 className="mb-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Navigating Water Quality
            </h1>
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-700">
              Exploring the Parameters and WQI Guidelines for Comprehensive
              Water Safety Assessment
            </h2>
            <p className="mb-8 font-light text-justify text-gray-500 sm:text-xl">
              Discover our commitment to water safety. We follow the Water
              Quality Index guidelines, assessing key parameters like pH,
              dissolved oxygen, and turbidity. Unveil the secrets behind our
              water quality evaluation for an informed perspective on your water
              safety.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              Let Us Start
            </h2>
            <p style={{textAlignLast: "center"}} className="text-justify mb-6 font-light text-gray-500 md:text-lg">
              explore the intricacies of WQI parameters, may each factor unlock
              insights, fostering a deeper understanding of the delicate balance
              that shapes our water health. Ready to unravel the story behind
              each measurement?
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/phScale.jpg"
              alt="ph scale"
              width={585}
              height={420}
            />
            <Link
              href="https://www.vecteezy.com/vector-art/589043-science-ph-scale-template"
              className="text-grey-400 text-center text-base"
            >
              Image by Vecteezy.com, Author Matt Cole
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 md:text-end text-2xl md:text-4xl text-center font-extrabold tracking-tight text-gray-900 ">
              pH (Potential of Hydrogen)
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500 md:text-lg">
              pH measures the acidity or alkalinity of water. Ideal levels range
              from 6.5 to 8.5. The safe range for drinking water pH levels is
              between 6.5 and 8.5. This range is considered optimal for human
              consumption and ensures that the water is free from harmful
              contaminants. Drinking water with a pH outside this range may
              affect its taste, quality, and safety.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              BIS Standard Value And Ideal Value for pH
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              The BIS Standard value we are using is{' '}
              <strong className="font-bold">8.5</strong> and Ideal value of{' '}
              <strong className="font-bold">7</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/turbidWater.jpg"
              alt="Turbidity"
              width={585}
              height={420}
            />
            <Link
              href="https://www.vecteezy.com/vector-art/27370618-glass-vector-icon"
              className="text-grey-400 text-center text-base"
            >
              Image by Vecteezy.com, Author Qaisir Mehmood
            </Link>
          </div>
          <div className="order-first mt-4 md:mt-0">
            <h2 className="mb-4 md:text-end text-center text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 ">
              Turbidity
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500  md:text-lg">
              Turbidity measures water clarity. Clear water allows light
              penetration for aquatic plants. our drinking water is almost
              always clear (very low turbidity). Other water, such as the creek
              behind your house after a rainstorm, is likely to be highly
              turbid—brown with floating sediment. Turbidity is the clarity of
              water and it is an important factor in water quality
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              BIS Standard Value And Ideal Value for Turbidity
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              The BIS Standard value we are using is{' '}
              <strong className="font-bold">5</strong> and Ideal value of{' '}
              <strong className="font-bold">0</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/waterElectricConductivity.png"
              alt="EC"
              width={585}
              height={420}
            />
            <Link
              href="https://www.freepik.com/free-vector/electricity-icon-flat-set_1539091.htm#query=electric%20meter&position=6&from_view=search&track=ais&uuid=38abc2b7-930f-4b1c-af45-2bfa98e7a33a"
              className="text-grey-400 text-center text-base"
            >
              Image by macrovector on Freepik
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 md:text-end text-2xl md:text-4xl text-center font-extrabold tracking-tight text-gray-900 ">
              Conductivity/Electrical Conductivity (EC)
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500  md:text-lg">
              EC indicates the ability of water to conduct an electric current,
              related to dissolved ions. Electrical conductivity (EC) is a
              measurement of water ability to conduct electricity. EC is related
              to water temperature and the total concentration, mobility,
              valence and relative concentration of ions. Generally speaking,
              higher EC means more electrolytes in the water.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              BIS Standard Value And Ideal Value for Electrical Conductivity
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              The BIS Standard value we are using is{' '}
              <strong className="font-bold">1000</strong> and Ideal value of{' '}
              <strong className="font-bold">0</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/tds.png"
              alt="TDS"
              width={585}
              height={420}
            />
            <Link
              href={
                'https://www.vecteezy.com/vector-art/9809619-beaker-glyph-two-color'
              }
              className="text-grey-400 text-center text-base"
            >
              Image by Vecteezy.com, Author Amir Ali
            </Link>
          </div>
          <div className="order-first mt-4 md:mt-0">
            <h2 className="mb-4 md:text-end text-center  text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 ">
              Total Dissolved Solids (TDS)
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500  md:text-lg">
              TDS measures the total amount of dissolved substances, including
              minerals. Total dissolved solids (TDS) is the total amount of
              solids dissolved in the water, including soluble hydrogen
              carbonate ions, chloride salts, sulphates, calcium, magnesium,
              sodium, potassium, volatile solids and non-volatile solids. Its
              concentration will affect the taste of drinking water.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              BIS Standard Value And Ideal Value for TDS
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              The BIS Standard value we are using is{' '}
              <strong className="font-bold">1000</strong> and Ideal value of{' '}
              <strong className="font-bold">0</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/bacteria.jpg"
              alt="Turbidity"
              width={585}
              height={420}
            />
            <Link
              href="https://www.vecteezy.com/vector-art/17982081-chemistry-dish-petri-science-blue-icon-on-abstract-cloud-background"
              className="text-grey-400 text-center text-base"
            >
              Image by Vecteezy.com, Author Muhammad Adnan
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 md:text-end text-center  text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 ">
              Total Coliform and E. coli Bacteria
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500  md:text-lg">
              Presence of coliform bacteria indicates contamination from fecal
              matter. Total coliform counts give a general indication of the
              sanitary condition of a water supply. Total coliforms include
              bacteria that are found in the soil, in water that has been
              influenced by surface water, and in human or animal waste.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
              BIS Standard Value And Ideal Value for Turbidity
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              The BIS Standard value we are using is{' '}
              <strong className="font-bold">5</strong> and Ideal value of{' '}
              <strong className="font-bold">0</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-xl justify-end px-4 py-8 sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h1 className="mb-4 md:text-end text-3xl md:text-5xl text-center font-extrabold tracking-tight text-gray-900">
              Conclusion
            </h1>
            <p className="mb-8 text-justify font-light text-gray-500 sm:text-xl">
              Remember, the WQI combines these parameters to provide a
              comprehensive assessment of water quality. Each parameter
              contribution to the index may vary based on local standards and
              environmental conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
