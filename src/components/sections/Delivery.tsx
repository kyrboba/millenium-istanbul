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
    // Убрали bg-gradient-to-br, теперь секция прозрачная
    <section id="delivery" className="py-20 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Корзина */}
        <div className="bg-dark-800/50 p-8 rounded-2xl border border-gold-500/10">
          <h2 className="text-2xl font-bold text-gold-500 mb-6">Ваша корзина</h2>
          {cart.length === 0 ? (
            <p className="text-coffee-400">Корзина пуста</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span className="text-coffee-100">{item.name} (x{item.quantity})</span>
                  <span className="text-gold-400 font-medium">{item.price * item.quantity} лей</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Форма доставки */}
        <div className="bg-dark-800/50 p-8 rounded-2xl border border-gold-500/10">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-green-500 font-bold text-xl">Заказ принят!</p>
              <p className="text-coffee-300 mt-2">Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form name="delivery-order" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="delivery-order" />
              <input type="hidden" name="order-details" value={JSON.stringify(cart)} />
              
              <input type="text" name="address" placeholder="Адрес доставки" required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white focus:ring-2 focus:ring-gold-500 outline-none" />
              <input type="text" name="customer-name" placeholder="Ваше имя" required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white focus:ring-2 focus:ring-gold-500 outline-none" />
              <input type="tel" name="phone" placeholder="Телефон" required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white focus:ring-2 focus:ring-gold-500 outline-none" />
              
              <button 
                type="submit" 
                className="w-full bg-gold-500 py-3 rounded-lg font-bold text-black hover:bg-gold-400 transition transform hover:scale-105"
              >
                Оформить заказ
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}