import { features } from "../data/feature";

export default function Feature() {
  return (
    <section className="flex justify-around py-12">
      {features.map(({ title, desc, icon }, i) => (
        <div
          key={i}
          className="flex gap-3 items-center justify-center border rounded p-4"
        >
          <div className="text-3xl text-orange-300">{icon}</div>
          <div className="">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
