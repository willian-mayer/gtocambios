"use client";

import { useState } from "react";

type ContactItem = {
  title: string;
  description: string;
  url?: string;
  icon?: React.ReactNode;
};

type ContactUsProps = {
  contacts: ContactItem[];
};

export default function ContactUs({ contacts }: ContactUsProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section id="contato" className="mb-10 pt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8 rounded-lg border border-gray-300 bg-white/80 p-6 md:p-12 backdrop-blur-lg shadow-md">
          {/* Mapa */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.5482925351603!2d-49.171867899999995!3d-25.5534192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf79b56f498cd%3A0x444ea607a705c007!2sGTO%20C%C3%A2mbios%20Autom%C3%A1ticos!5e0!3m2!1spt-BR!2sbr!4v1747761550298!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="rounded-md border-0 w-full h-full"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Formulario + Contacto */}
          <div className="w-full lg:w-1/2">
            {/* Formulario */}
            <form
              className="mb-8"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);

                try {
                  const res = await fetch("https://formsubmit.co/ajax/gto.oficina@hotmail.com", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                    },
                    body: formData,
                  });

                  if (res.ok) {
                    setStatus("success");
                    form.reset();
                  } else {
                    setStatus("error");
                  }
                } catch {
                  setStatus("error");
                }
              }}
            >
              <div className="relative mb-6">
                <input
                  type="text"
                  name="name"
                  className="peer w-full rounded border-2 border-gray-500 bg-transparent px-3 py-2 leading-6 outline-none transition-all focus:border-blue-500"
                  id="name"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-1.2rem] peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Nome
                </label>
              </div>

              <div className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  className="peer w-full rounded border-2 border-gray-500 bg-transparent px-3 py-2 leading-6 outline-none transition-all focus:border-blue-500"
                  id="email"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-1.2rem] peer-focus:text-sm peer-focus:text-blue-600"
                >
                  E-mail
                </label>
              </div>

              <div className="relative mb-6">
                <textarea
                  name="message"
                  rows={4}
                  className="peer w-full rounded border-2 border-gray-500 bg-transparent px-3 py-2 leading-6 outline-none transition-all focus:border-blue-500"
                  id="message"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-1.2rem] peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Mensagem
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
              >
                Enviar
              </button>

              {status === "success" && (
                <p className="mt-4 text-green-600 font-semibold">
                  Obrigado por enviar o formulário!
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-600 font-semibold">
                  Ocorreu um erro. Por favor, tente novamente.
                </p>
              )}
            </form>

            {/* Contact Info */}
            <div className="flex flex-wrap">
              {contacts.map((contact, i) => (
                <div key={i} className="w-full md:w-1/2 p-2">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-blue-100 p-4 text-blue-600">
                        {contact.icon || (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="mb-1 font-bold">{contact.title}</p>
                      {contact.url && (
                        <p className="text-sm text-gray-600">{contact.url}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
