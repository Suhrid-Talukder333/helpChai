"use client";
import { CalculationData, ResultType } from "@/app/lib/definitions";
import { CalculateWater } from "@/app/lib/utils";
import Result from "@/app/ui/result";
import { ArrowPathIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useState } from "react"; 

export default function Page() {
  const [result, setResult] = useState<ResultType | null>(null)

  const handleSubmitData = (data: FormData) => {
    setResult(CalculateWater(data))
  } 


  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 text-center">
            Water Quality Parameters
          </h2>
          <form action={handleSubmitData}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="ph"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  pH Value
                </label>
                <input
                  type="number"
                  step="any"
                  name="ph"
                  id="ph"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type ph value"
                  required={true}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="ec"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Electric Conductivity (EC)
                </label>
                <input
                  type="number"
                  step="any"
                  name="ec"
                  id="ec"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type ec value"
                  required={true}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="turb"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Turbidity (Turb)
                </label>
                <input
                  type="number"
                  step="any"
                  name="turb"
                  id="turb"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Turbidity value"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="alk"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Alkalinity (Alk)
                </label>
                <input
                  type="number"
                  step="any"
                  name="alk"
                  id="alk"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Alkalinity value"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="tds"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Total Dissolved Solids (TDS)
                </label>
                <input
                  type="number"
                  step="any"
                  name="tds"
                  id="tds"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type TDS value"
                  required={true}
                />
              </div>
              {/* <div className="sm:col-span-2">
                <label
                  htmlFor="ca"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Calcium Ion Concentration (Ca+2)
                </label>
                <input
                  type="number"
                  step="any"
                  name="ca"
                  id="ca"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Ca+2 value"
                  required={true}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="mg"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Magnesium Ion Concentration (Mg+2)
                </label>
                <input
                  type="number"
                  step="any"
                  name="mg"
                  id="mg"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Mg+2 value"
                  required={true}
                />
              </div> */}
              <div className="w-full">
                <label
                  htmlFor="na"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Sodium Ion Concentration (Na+)
                </label>
                <input
                  type="number"
                  step="any"
                  name="na"
                  id="na"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Na+ value"
                  required={true}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="th"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Total Hardness (TH)
                </label>
                <input
                  type="number"
                  step="any"
                  name="th"
                  id="th"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type TH value"
                  required={true}
                />
              </div>
              {/* <div className="w-full">
                <label
                  htmlFor="k"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Potassium Ion Concentration (K+)
                </label>
                <input
                  type="number"
                  step="any"
                  name="k"
                  id="k"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type K+ value"
                  required={true}
                />
              </div> */}
              <div className="w-full">
                <label
                  htmlFor="cl"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Chloride Ion Concentration (Cl-)
                </label>
                <input
                  type="number"
                  step="any"
                  name="cl"
                  id="cl"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Cl- value"
                  required={true}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="s"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Sulfate Ion Concentration (SO4)
                </label>
                <input
                  type="number"
                  step="any"
                  name="s"
                  id="s"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type SO4 value"
                  required={true}
                />
              </div>
              {/* <div className="w-full">
                <label
                  htmlFor="do"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Dissolved Oxygen (DO)
                </label>
                <input
                  type="number"
                  step="any"
                  name="do"
                  id="do"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type DO value"
                  required={true}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="fe"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Iron Concentration (Fe)
                </label>
                <input
                  type="number"
                  step="any"
                  name="fe"
                  id="fe"
                  className="focus:ring-2 focus:border-green-200 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Type Fe value"
                  required={true}
                />
              </div> */}
            </div>
            <button
              type="submit"
              className="bg-blue-700 focus:ring-2 hover:bg-cyan-500 mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 sm:mt-6"
            >
              <RocketLaunchIcon className="w-6 mx-2" />
              Calculate
            </button>
            <button
              onClick={() => setResult(null)}
              type="reset"
              className="bg-red-700 focus:ring-2 hover:bg-cyan-500 mt-4 ml-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 sm:mt-6"
            >
              <ArrowPathIcon className="w-6 mx-2" />
              Reset
            </button>
          </form>
        </div>
      </section>
      <section className="flex justify-center align-center my-1">
        {result && <Result result={result}/>}
      </section>
    </>
  );
}
