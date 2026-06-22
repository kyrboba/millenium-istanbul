export default function Booking() {
  return (
    <section id="booking" className="py-20">
      <form 
        name="cafe-booking" 
        method="POST" 
        data-netlify="true" 
        className="space-y-4 bg-gray-800 p-6 rounded-lg"
      >
        <input type="hidden" name="form-name" value="cafe-booking" />
        <input type="text" name="name" placeholder="Имя" required className="w-full p-2 text-black" />
        <input type="tel" name="phone" placeholder="Телефон" required className="w-full p-2 text-black" />
        <input type="date" name="date" required className="w-full p-2 text-black" />
        <button type="submit" className="w-full bg-yellow-500 py-2 rounded font-bold text-black">
          Забронировать
        </button>
      </form>
    </section>
  );
}