import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface GiftCard {
  id: number;
  amount: number;
  price: number;
  discount?: number;
  popular?: boolean;
}

interface Review {
  id: number;
  name: string;
  rating: 5;
  date: string;
  text: string;
  verified: boolean;
}

const giftCards: GiftCard[] = [
  { id: 1, amount: 1000, price: 1000 },
  { id: 2, amount: 2000, price: 2000, popular: true },
  { id: 3, amount: 3000, price: 3000 },
  { id: 4, amount: 5000, price: 4900, discount: 2 },
  { id: 5, amount: 10000, price: 9700, discount: 3 },
  { id: 6, amount: 15000, price: 14400, discount: 4 },
];

const reviews: Review[] = [
  {
    id: 1,
    name: 'Александр М.',
    rating: 5,
    date: '15 ноября 2024',
    text: 'Отличный сервис! Карта пришла моментально, всё активировалось без проблем.',
    verified: true,
  },
  {
    id: 2,
    name: 'Мария К.',
    rating: 5,
    date: '12 ноября 2024',
    text: 'Покупаю уже не первый раз. Быстро, удобно, надёжно. Рекомендую!',
    verified: true,
  },
  {
    id: 3,
    name: 'Дмитрий П.',
    rating: 5,
    date: '8 ноября 2024',
    text: 'Супер! Код пришёл через 2 минуты после оплаты. Спасибо за сервис.',
    verified: true,
  },
];

const faqs = [
  {
    question: 'Как быстро я получу карту после оплаты?',
    answer: 'Код подарочной карты приходит на ваш email автоматически в течение 2-5 минут после подтверждения оплаты.',
  },
  {
    question: 'Можно ли использовать карту в любой стране?',
    answer: 'Да, Apple Gift Card можно использовать в любой стране, где доступен App Store, iTunes Store и другие сервисы Apple.',
  },
  {
    question: 'Есть ли срок действия у подарочной карты?',
    answer: 'Нет, подарочные карты Apple не имеют срока действия. Вы можете использовать их в любое удобное время.',
  },
  {
    question: 'Что делать, если код не пришёл?',
    answer: 'Проверьте папку "Спам" в вашей почте. Если кода нет, свяжитесь с нашей поддержкой через чат или email.',
  },
  {
    question: 'Можно ли вернуть карту?',
    answer: 'К сожалению, после получения кода возврат невозможен согласно политике цифровых товаров.',
  },
];

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#1d1d1f] text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#1d1d1f]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-2">
              <Icon name="Apple" size={24} />
              <span className="font-semibold text-lg">Gift Cards</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#catalog" className="hover:text-white/70 transition-colors">Каталог</a>
              <a href="#reviews" className="hover:text-white/70 transition-colors">Отзывы</a>
              <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
            </div>
            <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white">
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-orange-400 to-yellow-400 rounded-[3rem] blur-2xl opacity-60 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-purple-500 via-orange-400 to-yellow-400 rounded-[2.5rem] flex items-center justify-center">
                <Icon name="Apple" size={80} className="text-white" />
              </div>
            </div>

            <div className="absolute -top-4 -right-8 animate-float">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon name="Smartphone" size={32} className="text-white" />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-8 animate-float-delayed">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon name="Laptop" size={32} className="text-white" />
              </div>
            </div>

            <div className="absolute top-12 -right-16 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-2xl">
                <Icon name="Watch" size={24} className="text-white" />
              </div>
            </div>

            <div className="absolute top-16 -left-12 animate-float-delayed" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-2xl">
                <Icon name="Headphones" size={24} className="text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Получите подарочную карту с мгновенной доставкой
          </p>
          <p className="text-base text-gray-500 mb-8">
            Используйте для покупок в App Store, Apple Music и других сервисах
          </p>
          <Button 
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-lg px-8 py-6 rounded-full"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Выбрать карту
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите номинал</h2>
            <p className="text-gray-400 text-lg">Мгновенная доставка на email после оплаты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftCards.map((card) => (
              <Card
                key={card.id}
                className={`bg-white/5 border-white/10 hover:border-[#0071e3]/50 transition-all cursor-pointer hover:scale-105 ${
                  selectedCard === card.id ? 'border-[#0071e3] shadow-lg shadow-[#0071e3]/20' : ''
                }`}
                onClick={() => setSelectedCard(card.id)}
              >
                <CardHeader className="relative">
                  {card.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-[#0071e3] text-white">
                      Популярное
                    </Badge>
                  )}
                  {card.discount && (
                    <Badge className="absolute -top-2 -left-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                      -{card.discount}%
                    </Badge>
                  )}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                      <Icon name="Gift" size={40} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-3xl font-bold text-white">
                    {card.amount.toLocaleString('ru-RU')} ₽
                  </CardTitle>
                  {card.discount && (
                    <CardDescription className="text-center text-gray-500 line-through">
                      {card.amount.toLocaleString('ru-RU')} ₽
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <Button
                    className={`w-full ${
                      selectedCard === card.id
                        ? 'bg-[#0071e3] hover:bg-[#0077ed]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {card.price.toLocaleString('ru-RU')} ₽
                  </Button>
                  <div className="mt-4 space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      <span>Мгновенная доставка</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      <span>Без срока действия</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      <span>Для всех сервисов Apple</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы покупателей</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={24} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-400 text-lg">4.9 из 5 на основе 1,247 отзывов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg text-white">{review.name}</CardTitle>
                      <CardDescription className="text-gray-500">{review.date}</CardDescription>
                    </div>
                    {review.verified && (
                      <Badge variant="outline" className="border-green-500 text-green-400">
                        <Icon name="CheckCircle2" size={14} className="mr-1" />
                        Проверено
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} fill="currentColor" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-gray-400 text-lg">Ответы на часто задаваемые вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-[#0071e3] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Apple" size={24} />
                <span className="font-semibold text-lg">Gift Cards</span>
              </div>
              <p className="text-gray-400 text-sm">
                Официальный магазин Apple Gift Card с мгновенной доставкой
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Покупателям</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как купить</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Способы оплаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Публичная оферта</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:support@giftcards.ru" className="hover:text-white transition-colors">
                    support@giftcards.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-white transition-colors">
                    8 (800) 123-45-67
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Поддержка 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Apple Gift Cards. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
