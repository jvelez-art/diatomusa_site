import Image from "next/image";

import Link from "next/link";



const navigation = [

  { label: "Historia", href: "#experiencia" },

  { label: "Producto", href: "#producto" },

  { label: "Ciencia", href: "#ciencia" },

  { label: "Uso", href: "#cuidado" },

  { label: "Opiniones", href: "#opiniones" },

  { label: "Garantía", href: "#garantia" },

];



const videoSlides = [

  {

    src: "/videos/video-publicitario.mp4",

    label: "Sensación",

    description:

      "Un plano secuencia que captura el gesto de pisar la piedra y cómo ordena el baño.",

  },

  {

    src: "/videos/video-bano-minimalista.mp4",

    label: "Ambiente",

    description:

      "Iluminación suave y vapor en movimiento para destacar la textura serena del material.",

  },

  {

    src: "/videos/video-acabado-seco.mp4",

    label: "Detalle",

    description:

      "Macro de la microcapilaridad absorbiendo gotas y quedando seca al tacto.",

  },

];



const benefits = [

  {

    title: "Secado visible en minutos",

    copy: "La microcapilaridad dispersa la humedad de inmediato y deja la superficie lista para el siguiente uso.",

  },

  {

    title: "Higiene sin esfuerzo",

    copy: "Menos humedad residual significa menos olor, bacterias y hongos. Solo debes cepillarla suavemente cuando se sature.",

  },

  {

    title: "Seguridad y estabilidad",

    copy: "Base antideslizante y cantos suavizados para acompañar la pisada con firmeza y suavidad.",

  },

];



const pillars = [

  {

    label: "Material",

    content:

      "Piedra de diatomita tratada térmicamente, con poros calibrados para absorber y liberar humedad de forma uniforme.",

  },

  {

    label: "Diseño",

    content:

      "Geometrías depuradas, transiciones suaves y colores serenos que se integran en baños minimalistas o cálidos.",

  },

  {

    label: "Pruebas",

    content:

      "Ensayos internos de absorción, antideslizamiento, manchas y durabilidad para garantizar una experiencia de uso prolongada.",

  },

];



const careSteps = [

  "Coloca la alfombrilla sobre superficie plana y seca.",

  "Después de cada uso, deja que se ventile; la humedad desaparece en minutos.",

  "Cada semana, limpia con un paño húmedo o lija suave para retirar residuos.",

  "Evita sumergirla o apoyarla donde gotee agua de forma continua.",

];



const faqs = [

  {

    question: "¿Cómo funciona la piedra de diatomita?",

    answer:

      "Miles de microporos absorben el agua de la superficie y la distribuyen para evaporarla rápidamente sin dejar sensación húmeda.",

  },

  {

    question: "¿La alfombrilla es resbaladiza?",

    answer:

      "No. Integra una base antideslizante y textura de agarre suave que permanece estable incluso en suelos lisos.",

  },

  {

    question: "¿Qué garantía ofrece DIATOMUSA?",

    answer:

      "Garantía de 12 meses y soporte directo desde España. Si tu pieza presenta defectos, gestionamos reemplazo o reembolso.",

  },

  {

    question: "¿Es compatible con baños con poca ventilación?",

    answer:

      "Sí. Recomendamos apoyar la alfombrilla verticalmente de vez en cuando para ayudar a la circulación del aire.",

  },

];



const reviews = [

  {

    name: "Laura, Madrid",

    quote:

      "Es el primer accesorio del baño del que mis invitados hablan. Secado visible y tacto agradable en cada uso.",

  },

  {

    name: "Diego, Valencia",

    quote:

      "Nuestro suelo siempre quedaba mojado. Con la piedra de DIATOMUSA se acabó el desorden y el riesgo de resbalar.",

  },

  {

    name: "Beatriz, Bilbao",

    quote:

      "La uso desde hace seis meses, luce impecable y se limpia en segundos. Diseño y utilidad por igual.",

  },

];



const heritageHighlights = [

  "Pruebas internas de rendimiento y seguridad.",

  "Log\u00edstica de Amazon para entregas r\u00e1pidas en la UE.",

  "Garant\u00eda y soporte local desde Espa\u00f1a.",

];



export default function Home() {

  return (

    <div className="flex min-h-screen flex-col bg-mist-20 text-ink-900">

      <header className="sticky top-0 z-30 border-b border-mist-160/50 bg-mist-20/90 text-ink-900 backdrop-blur-xl">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 lg:px-8">

          <Link

            href="#inicio"

            className="group flex items-center gap-3"

            aria-label="Ir al inicio de DIATOMUSA"

          >

            <Image

              src="/images/Logotipo_Diatomusa_simbolo.png"

              alt="Logotipo de DIATOMUSA"

              width={40}

              height={40}

              className="h-10 w-10 rounded-full bg-mist-40 ring-1 ring-cameo-160/45 transition group-hover:scale-105 group-hover:ring-rose-220/70"

              priority

            />

            <span className="font-serif text-[40px] tracking-[0.2em] text-ink-900 transition group-hover:text-rose-220">

              DIATOMUSA

            </span>

          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative pb-1 text-sm font-medium tracking-[0.08em] text-ink-700 transition hover:text-ink-900 after:absolute after:-bottom-[2px] after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-rose-220/80 after:transition-transform hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link

            href="https://www.amazon.es/s?k=diatomusa"

            target="_blank"

            rel="noopener noreferrer"

            className="rounded-full bg-[#667ba1ff] px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-[0.01em] !text-white shadow-[0_24px_38px_-28px_rgba(129,141,163,0.45)] transition hover:bg-[#6f7c95]"

          >

            Comprar Amazon

          </Link>

        </div>

      </header>



      <main className="flex-1">

        <section

          id="inicio"

          className="relative isolate overflow-hidden bg-mist-120 text-ink-900"

        >

          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(207,182,159,0.36),_transparent_72%)]" />

          <div className="absolute inset-0 -z-20 bg-[linear-gradient(145deg,_rgba(255,255,255,0.92),_rgba(221,204,186,0.42)_48%,_transparent_88%)]" />

          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8 lg:py-28">

            <div className="max-w-xl space-y-7 lg:max-w-none">

              <span className="inline-flex items-center gap-1 rounded-full  px-0 py-0 text-[28px] font-serif italic tracking-[0.1em] text-rose-260">

                <span className="hidden h-px w-0 bg-rose-260/200 sm:block" />

                <span>Alfombra en piedra de diatomita</span>

              </span>

              <h1 className="font-semibold leading-tight sm:text-[40px]">

                <span className="font-serif text-rose-260 font-semibold italic tracking-[0.1em] text-ink-900">

                  El encuentro

                </span>

              </h1>

              <section aria-labelledby="encuentro-subtitle" className="space-y-4">

                {/* Subtítulo estilizado (Playfair + itálica + ligaduras) */}

                <h3

                  id="encuentro-subtitle"

                  className="text-[19px] leading-snug italic font-medium tracking-[0.01em] text-ink-700"

                  style={{

                    fontFeatureSettings: '"liga" 1, "dlig" 1, "salt" 1, "ss01" 1',

                    fontKerning: "normal",

                  }}

                >

                  Arte que desvanece el mojar de tus pasos

                </h3>



                {/* Párrafos (puntos aparte) */}

                <p className="text-[17px] leading-relaxed text-ink-500 mt-2">

                  El encuentro es una composición de líneas que respiran. Dos trazos que se buscan hasta tocarse, se cruzan y se funden en una misma forma. No representan cuerpos, sino emociones: la calma que llega después del agua, el instante en que el movimiento se detiene y el baño se vuelve refugio. Cada curva sugiere cercanía; cada vacío deja espacio para la imaginación. Así nace El Encuentro: un gesto de arte que transforma lo cotidiano en serenidad.

                </p>



                <p className="text-[17px] leading-relaxed text-ink-500">

                  Hecha con piedra de diatomita natural, un material poroso de origen mineral formado por fósiles microscópicos de diatomeas marinas. Su estructura microporosa absorbe el agua al contacto, seca en minutos y mantiene la superficie libre de humedad, reduciendo bacterias y malos olores. Resistente, ligera y ecológica, la diatomita combina tecnología natural y un diseño sutil y minimalista para cuidar de ti y de tu entorno.

                </p>

              </section>



              <div className="flex flex-wrap items-center gap-4">

                <Link

                  href="https://www.amazon.es/s?k=diatomusa"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="rounded-full bg-[#667ba1ff] px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-[0.01em] text-white !text-white shadow-[0_24px_38px_-28px_rgba(129,141,163,0.45)] transition hover:bg-[#6f7c95]"

                >

                  Comprar Amazon

                </Link>

                <Link

                  href="#producto"

                  className="text-sm font-semibold text-ink-700 underline-offset-8 hover:underline"

                >

                  Ver detalles del producto

                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="absolute inset-0 -left-6 -z-10 rounded-[110px] bg-[radial-gradient(circle_at_center,_rgba(207,182,159,0.48),_transparent_72%)]" />

              <div className="relative overflow-hidden rounded-[28px] border border-mist-160/60 bg-mist-40 shadow-[0_85px_110px_-70px_rgba(20,22,28,0.55)] transition">

                <Image

                  src="/images/hero-rosa.jpg"

                  alt="Alfombrilla de diatomita DIATOMUSA en acabado rosa"

                  width={1660}

                  height={1240}

                  className="h-full w-full object-cover"

                  priority

                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mist-80/45 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </section>





        <section id="producto" className="border-y border-mist-160/50 bg-mist-80">

          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs uppercase tracking-[0.3em] text-ink-500">

                Beneficios clave

              </p>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">

                Diseñadas para sentir confort, ver resultados y cuidar el

                espacio.

              </h2>

              <p className="mt-4 text-base text-ink-500">

                Cada detalle responde a pruebas de absorción, adherencia y

                durabilidad para que disfrutes de un baño ordenado y sin

                humedad.

              </p>

              <p className="mt-4 text-base text-ink-500">

                Operamos con logistica Amazon FBA, garantia local y soporte directo desde Espana para acompanarte antes y despues de la compra.

              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink-600">
                <span className="rounded-full border border-mist-160/60 px-4 py-1">Prime</span>
                <span className="rounded-full border border-mist-160/60 px-4 py-1">Garantia 12m</span>
                <span className="rounded-full border border-mist-160/60 px-4 py-1">Atencion local</span>
              </div>

            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-3">

              {benefits.map((benefit) => (

                <article

                  key={benefit.title}

                  className="flex flex-col gap-5 rounded-[32px] border border-mist-160/55 bg-mist-20/94 px-9 py-10 shadow-[0_36px_72px_-48px_rgba(24,26,32,0.32)] transition hover:-translate-y-1 hover:shadow-[0_44px_88px_-52px_rgba(24,26,32,0.36)]"

                >

                  <span className="h-1 w-16 rounded-full bg-rose-220/70" />

                  <h3 className="text-[20px] font-semibold text-ink-900">{benefit.title}</h3>

                  <p className="text-sm text-ink-500">{benefit.copy}</p>

                </article>

              ))}

            </div>

          </div>

        </section>



<section

          id="experiencia"

          className="border-b border-mist-160/45 bg-mist-80 text-ink-900"

        >

          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              <div className="max-w-xl space-y-4">

                <p className="text-xs uppercase tracking-[0.32em] text-ink-500">
                  Historia DIATOMUSA
                </p>

                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Elegancia que absorbe. Diseño con ciencia detrás.
                </h2>

                <p className="text-sm text-ink-500 sm:text-base">
                  DIATOMUSA surge en el País Vasco, donde combinamos investigación en materiales avanzados con una estética discreta y funcional. Nuestro objetivo es simple: que la experiencia después de la ducha sea ordenada, seca y visualmente armónica.
                </p>

                <p className="text-sm text-ink-500 sm:text-base">
                  La inspiración llega del microarte natural de las diatomeas: fósiles microscópicos cuya geometría guía la forma en que diseñamos la porosidad, la absorción y la textura de cada pieza.
                </p>

                <ul className="mt-6 space-y-3">
                  {heritageHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 rounded-full border border-mist-160/70 bg-white/80 px-4 py-2 text-sm text-ink-700 shadow-[0_20px_45px_-30px_rgba(23,25,31,0.55)]"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-220" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>


            <div className="mt-12 overflow-x-auto pb-6">

              <div className="flex min-w-full snap-x gap-6">

                {videoSlides.map((slide) => (

                  <article

                    key={slide.src}

                    className="group relative w-[320px] flex-shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-mist-160/45 bg-mist-80 shadow-[0_38px_76px_-55px_rgba(27,29,36,0.28)] transition hover:border-rose-220/45 hover:shadow-[0_48px_98px_-55px_rgba(207,182,159,0.42)] sm:w-[360px]"

                  >

                    <div className="relative">

                      <video

                        autoPlay

                        loop

                        muted

                        playsInline

                        poster="/images/hero-diatomusa.jpg"

                        className="h-[220px] w-full object-cover"

                      >

                        <source src={slide.src} type="video/mp4" />

                        Tu navegador no soporta video HTML5.

                      </video>

                      <span className="absolute left-5 top-5 rounded-full bg-ink-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cameo-220">

                        {slide.label}

                      </span>

                    </div>

                    <div className="space-y-3 px-6 py-6">

                      <p className="text-sm text-ink-500">

                        {slide.description}

                      </p>

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>



                <section id="ciencia" className="py-20">

          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">

            <div className="space-y-6">

              <p className="text-xs uppercase tracking-[0.3em] text-ink-700">

                Material & ciencia

              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">

                Ingeniería de materiales que se traduce en una experiencia de

                uso impecable.

              </h2>

              <p className="text-base text-ink-500">

                La diatomita retiene la humedad y la libera progresivamente.

                Junto con tratamientos térmicos y controles dimensionales,

                aseguramos una superficie que se regenera tras cada pisada.

              </p>

              <p className="text-base text-ink-500">

                Nuestro equipo especializado en física de nanoestructuras analiza porosidad, tratamiento térmico y controles dimensionales antes de aprobar cada serie. La tecnología se traduce en datos y soporte documentado para el usuario final.

              </p>

              <div className="grid gap-6 sm:grid-cols-3">

                {pillars.map((pillar) => (

                  <div

                    key={pillar.label}

                    className="rounded-[28px] border border-mist-160/55 bg-mist-20/94 p-7 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]"

                  >

                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.26em] text-ink-700">

                      {pillar.label}

                    </h3>

                    <p className="mt-3 text-sm text-ink-500">

                      {pillar.content}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-base)]">

              <Image

                src="/images/macro-textura.jpg"

                alt="Textura macro de la diatomita absorbiendo agua"

                width={1200}

                height={1200}

                className="h-full w-full object-cover"

              />

            </div>

          </div>

        </section>



        <section className="border-y border-mist-160/55 bg-mist-120">

          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-ink-700">

                Colecciones cromáticas

              </p>

              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">

                Tonos serenos inspirados en minerales y paisajes acuáticos.

              </h2>

              <p className="mt-4 text-base text-ink-500">

                Azul profundo, gris claro y arena cálida conviven con acabados

                neutros para integrarse en baños minimalistas, nórdicos o con

                acentos de color. Consulta las variantes disponibles en Amazon y

                descubre cuál dialoga mejor con tu espacio.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="flex items-center gap-2 rounded-full border border-mist-160/45 px-4 py-2 text-xs uppercase tracking-[0.25em] text-ink-700">

                  Azul profundo

                </span>

                <span className="flex items-center gap-2 rounded-full border border-mist-160/45 px-4 py-2 text-xs uppercase tracking-[0.25em] text-ink-700">

                  Gris claro

                </span>

                <span className="flex items-center gap-2 rounded-full border border-mist-160/45 px-4 py-2 text-xs uppercase tracking-[0.25em] text-ink-700">

                  Arena cálida

                </span>

              </div>

            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-base)] shadow-[0_35px_60px_-45px_rgba(56,63,79,0.35)]">

              <Image

                src="/images/coleccion-azul.jpg"

                alt="Variantes cromáticas de la alfombrilla DIATOMUSA"

                width={1400}

                height={1200}

                className="h-full w-full object-cover"

              />

            </div>

          </div>

        </section>



        <section id="cuidado" className="bg-mist-80/60 py-20">

          <div className="mx-auto max-w-6xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

              <div className="space-y-4">

                <p className="text-xs uppercase tracking-[0.3em] text-ink-700">

                  Uso y cuidado

                </p>

                <h2 className="text-3xl font-semibold sm:text-4xl">

                  Rutina sencilla para prolongar su vida útil.

                </h2>

                <p className="text-base text-ink-500">

                  Mantener la alfombrilla en condiciones óptimas es tan sencillo

                  como respetar algunos hábitos breves. No requiere detergentes

                  agresivos ni mantenimiento complejo.

                </p>

              </div>

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

            </div>

          </div>

        </section>



                        <section className="border-y border-ink-700/25 bg-ink-900 text-mist-40">

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center lg:px-8">

            <p className="text-xs uppercase tracking-[0.3em]">

              Listo para un baño en calma

            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">

              Siente la diferencia desde la primera pisada.

            </h2>

            <p className="max-w-2xl text-sm text-mist-40/80">

              Cada alfombrilla DIATOMUSA está diseñada para ofrecer confort

              inmediato, higiene visible y una estética que ordena el espacio.

            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link

                href="https://www.amazon.es/s?k=diatomusa"

                target="_blank"

                rel="noopener noreferrer"

                className="rounded-full bg-[#667ba1ff] px-2 py-1.5 text-xs font-sans font-semibold uppercase tracking-[0.01em] text-white !text-white shadow-[0_24px_38px_-28px_rgba(129,141,163,0.45)] transition hover:bg-[#6f7c95]"

              >

                Comprar Amazon

              </Link>

              <Link

                href="https://www.amazon.es/s?k=diatomusa"

                target="_blank"

                rel="noopener noreferrer"

                className="rounded-full border border-mist-40/55 px-4 py-1.55 text-sm font-semibold text-mist-40 transition hover:border-accent-400 hover:text-accent-400"

              >

                Ver reseñas en Amazon

              </Link>

            </div>

          </div>

        </section>
<section

          id="opiniones"

          className="border-y border-mist-160/55 bg-mist-80/85 py-20"

        >

          <div className="mx-auto max-w-6xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs uppercase tracking-[0.3em] text-ink-700">

                Reseñas verificadas

              </p>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">

                Las personas que conviven con DIATOMUSA notan la diferencia.

              </h2>

            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              {reviews.map((review) => (

                <blockquote

                  key={review.name}

                  className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius-base)] border border-mist-160/55 bg-mist-80/90 p-8"

                >

                  <p className="text-sm text-ink-500">“{review.quote}”</p>

                  <footer className="text-xs uppercase tracking-[0.25em] text-ink-700">

                    {review.name}

                  </footer>

                </blockquote>

              ))}

            </div>

          </div>

        </section>




      </main>



      <footer className="bg-mist-80">

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div>

            <span className="font-serif text-2xl tracking-[0.12em]">

              DIATOMUSA

            </span>

            <p className="mt-3 max-w-md text-sm text-ink-500">

              Elegancia que absorbe. Alfombrillas de diatomita con ingeniería de

              materiales y diseño sereno, fabricadas para hogares que valoran la

              calma.

            </p>

          </div>

          <div className="flex flex-wrap gap-8 text-sm text-ink-700">

            <Link href="#producto" className="hover:text-accent-500">

              Producto

            </Link>

            <Link href="#experiencia" className="hover:text-accent-500">

              Historia

            </Link>

            <Link href="#ciencia" className="hover:text-accent-500">

              Ciencia

            </Link>

            <Link href="#cuidado" className="hover:text-accent-500">

              Uso y cuidado

            </Link>

            <Link href="#garantia" className="hover:text-accent-500">

              Garantía

            </Link>

            <Link href="mailto:legal@diatomusa.com" className="hover:text-accent-500">

              Legal

            </Link>

          </div>

        </div>

        <div className="border-t border-mist-160/55 bg-mist-20">

          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ink-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">

            <p>© {new Date().getFullYear()} DIATOMUSA. Todos los derechos reservados.</p>

            <p className="flex flex-wrap items-center gap-3">

              <span>Privacidad</span>

              <span>Cookies</span>

            </p>

          </div>

        </div>

      </footer>

    </div>

  );

}



