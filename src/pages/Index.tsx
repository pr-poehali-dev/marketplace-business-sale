import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-montserrat font-bold text-business-gray">
                BUSINESS INVESTMENTS
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-business-gray hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#opportunities" className="text-business-gray hover:text-primary transition-colors">
                Возможности
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
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Инвестиции в готовый бизнес на маркетплейсах
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Покупайте проверенные интернет-магазины с стабильной прибылью. 
                Минимальные риски, максимальная доходность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Посмотреть предложения
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/4ee30d0b-c02a-4ab5-8cd1-d1df4e601789.jpg"
                alt="Бизнес-аналитика"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-business-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-business-gray mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем комплексные решения для инвестиций в готовый бизнес
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Готовые решения</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Покупайте проверенные интернет-магазины с налаженными процессами и стабильной прибылью
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Высокая доходность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Средняя доходность инвестиций составляет 25-40% годовых с минимальными рисками
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name="Handshake" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat">Полная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Сопровождение сделки, юридическая поддержка и консультации по управлению бизнесом
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-business-gray mb-4">
              Инвестиционные возможности
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Актуальные предложения готового бизнеса на маркетплейсах
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/ec7b01bb-1c0c-41ec-9a33-4f79f1e86d65.jpg"
                alt="Маркетплейс"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-business-gray mb-2">
                      Wildberries и Ozon
                    </h3>
                    <p className="text-gray-600">
                      Готовые магазины с оборотом от 500 тыс. до 5 млн рублей в месяц
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-business-gray mb-2">
                      Международные площадки
                    </h3>
                    <p className="text-gray-600">
                      Amazon, eBay, AliExpress - доступ к глобальному рынку
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-business-gray mb-2">
                      Полная отчетность
                    </h3>
                    <p className="text-gray-600">
                      Прозрачная финансовая отчетность и аналитика продаж
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-business-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-business-gray mb-4">
              Начните инвестировать сегодня
            </h2>
            <p className="text-lg text-gray-600">
              Оставьте заявку и получите персональную консультацию
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-montserrat text-center">Заявка на консультацию</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <option>До 500 000 руб.</option>
                    <option>500 000 - 1 000 000 руб.</option>
                    <option>1 000 000 - 5 000 000 руб.</option>
                    <option>Более 5 000 000 руб.</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-business-gray mb-2">
                    Комментарий
                  </label>
                  <Textarea placeholder="Расскажите о ваших целях и предпочтениях" />
                </div>
                
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
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
                Профессиональные инвестиции в готовый бизнес на маркетплейсах
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Покупка бизнеса</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сопровождение</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Маркетплейсы</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Wildberries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ozon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Amazon</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@business-inv.ru</p>
                <p>Москва, ул. Примерная, 1</p>
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

export default Index;