import Image from "next/image";
import { careSteps } from "@/data/content";

export default function CuidadoPage() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Uso y cuidado
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Rutina breve para mantener el desempeño
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-600">
            Ventilar, limpiar suave y evitar inmersión prolongada. La piedra se
            regenera con cada ciclo de secado.
          </p>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <ul className="grid gap-6 sm:grid-cols-2">
              {careSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex flex-col gap-3 rounded-[var(--radius-base)] border border-mist-160/55 bg-mist-20/90 p-6"
                >
                  <span className="numeric text-3xl text-accent-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-ink-500">{step}</p>
                </li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
              <Image
                src="/images/limpieza_lijado.jpg"
                alt="Limpieza de la alfombrilla con lija suave"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
