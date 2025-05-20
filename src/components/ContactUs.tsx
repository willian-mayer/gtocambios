'use client';

type ContactItem = {
  title: string;
  description: string;
  url: string;
};

type ContactUsProps = {
  heading: string;
  subheading: string;
  intro: string;
  contacts: ContactItem[];
};

export default function ContactUs({ heading, subheading, intro, contacts }: ContactUsProps) {
  return (
    <section id="contato" className="bg-white dark:bg-gray-90 md:mx-24 lg:mx-48 xl:mx-72">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">{subheading}</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">{heading}</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">{intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          {/* Contact Info Section */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <div key={index}>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  {/* Placeholder icon - puedes cambiar por algo dinámico si lo deseas */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{contact.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{contact.description}</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{contact.url}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nome</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Sobrenome</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">E-mail</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensagem</label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Mensagem"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Enviar form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
