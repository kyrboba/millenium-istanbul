import { useState, FormEvent } from 'react';

export default function Delivery({ cart }: { cart: any[] }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  };

  return (
    <section id="delivery" className="py-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">Ваша корзина</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Корзина пуста</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between border-b border-gray-800 pb-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{item.price * item.quantity} лей</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          {submitted ? (
            <p className="text-green-500 font-bold">Заказ принят!</p>
          ) : (
            <form name="delivery-order" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="delivery-order" />
              <input type="hidden" name="order-details" value={JSON.stringify(cart)} />
              <input type="text" name="address" placeholder="Адрес" required className="w-full p-3 bg-gray-800 rounded-lg text-white" />
              <input type="text" name="customer-name" placeholder="Имя" required className="w-full p-3 bg-gray-800 rounded-lg text-white" />
              <input type="tel" name="phone" placeholder="Телефон" required className="w-full p-3 bg-gray-800 rounded-lg text-white" />
              <button type="submit" className="w-full bg-yellow-500 py-3 rounded-lg font-bold text-black">Оформить</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}