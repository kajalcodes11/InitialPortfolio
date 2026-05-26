export default function Contact() {

  return (

    <section
      id="contact"
      className="bg-black text-white py-32 px-10"
    >

      <h1 className="text-5xl font-bold text-center mb-20">
        Contact Me
      </h1>

      <form className="max-w-2xl mx-auto flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-900"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-900"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded-lg bg-gray-900"
        ></textarea>

        <button
          className="
            bg-white
            text-black
            py-4
            rounded-lg
            font-bold
            hover:scale-105
            transition
          "
        >

          Send Message

        </button>

      </form>

    </section>

  );
}