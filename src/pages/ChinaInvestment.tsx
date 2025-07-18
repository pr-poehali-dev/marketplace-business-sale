import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ChinaInvestment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-montserrat font-bold text-business-gray hover:text-primary transition-colors">
                BUSINESS INVESTMENTS
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-business-gray hover:text-primary transition-colors">
                Главная
              </a>
              <a href="/china" className="text-primary border-b-2 border-primary">
                Предложения
              </a>
              <a href="#contact" className="text-business-gray hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
            <Button variant="outline" className="hidden md:block">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-yellow-400 text-black text-sm font-semibold">
                УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ
              </Badge>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Готовый бизнес с Китаем
                <span className="block text-yellow-300">90% в год</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Начните инвестировать в перспективный бизнес с Китаем уже сегодня — 
                с надежной командой и прозрачными условиями!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">
                  Узнать подробнее
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/75eb66f8-68f6-444f-95f7-dbaf886e8f99.jpg"
                alt="Готовый бизнес с Китаем"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-business-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-business-gray mb-4">
              Ваши преимущества
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Инвестиции в прибыльную схему оптовых поставок из Китая
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-lg">90% в год</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Пассивный доход от 7,5% в месяц, выплаты гарантированы договором
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="DollarSign" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-lg">От 200 000 ₽</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Стартовый вход доступен новым инвесторам, без скрытых комиссий
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="FileText" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-lg">Официально</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работаем по договору, обеспечиваем все документы и открытый диалог
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-lg">Прямо</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Только прямое сотрудничество — без посредников, банков и брокеров
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-business-gray mb-4">
              Модель бизнеса
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Современная схема оптовых поставок товаров из Китая
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Поставки из Китая</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Оптовые поставки качественных товаров напрямую от производителей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Store" size={24} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Торговые центры</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Продажа через ведущие торговые центры Москвы и онлайн-платформы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="BarChart" size={24} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Стабильная прибыль</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Гарантированные выплаты инвесторам с прозрачной отчетностью
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Icon name="AlertTriangle" size={24} className="text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-montserrat font-semibold text-yellow-800 mb-2">
                Важно для безопасности
              </h3>
              <p className="text-yellow-700">
                Для удобства общения и безопасности <strong>ЗВОНИТЕ</strong>. 
                Мы предоставим контакты в мессенджерах, далее отправим все необходимые документы, 
                включая официальный договор.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-business-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-business-gray mb-4">
              Начните инвестировать сегодня
            </h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для получения подробной информации
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Связаться с нами</CardTitle>
                <CardDescription>
                  Заполните форму или позвоните напрямую
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-business-gray mb-2">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-business-gray mb-2">
                      Телефон
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-business-gray mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-business-gray mb-2">
                      Сумма инвестиций
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>200 000 - 500 000 ₽</option>
                      <option>500 000 - 1 000 000 ₽</option>
                      <option>1 000 000 - 3 000 000 ₽</option>
                      <option>Более 3 000 000 ₽</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-business-gray mb-2">
                      Комментарий
                    </label>
                    <Textarea placeholder="Ваши вопросы и пожелания" />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">+7 (495) 123-45-67</p>
                  <p className="text-gray-600 mt-2">Звоните с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-primary">china@business-inv.ru</p>
                  <p className="text-gray-600 mt-2">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat flex items-center">
                    <Icon name="MapPin" size={20} className="mr-2" />
                    Офис
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">г. Москва, ул. Деловая, 15</p>
                  <p className="text-gray-600 mt-2">Офис 420, 4-й этаж</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-business-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">
                BUSINESS INVESTMENTS
              </h3>
              <p className="text-gray-300">
                Инвестиции в готовый бизнес с Китаем
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Преимущества</h4>
              <ul className="space-y-2 text-gray-300">
                <li>90% годовых</li>
                <li>От 200 000 ₽</li>
                <li>Официальный договор</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Схема работы</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Поставки из Китая</li>
                <li>Торговые центры</li>
                <li>Онлайн-платформы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>china@business-inv.ru</p>
                <p>г. Москва, ул. Деловая, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Business Investments. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChinaInvestment;