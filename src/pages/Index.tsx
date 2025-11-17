import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [cpuUsage, setCpuUsage] = useState(67);
  const [memoryUsage, setMemoryUsage] = useState(54);
  const [responseTime, setResponseTime] = useState(245);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => Math.min(100, Math.max(30, prev + (Math.random() - 0.5) * 10)));
      setMemoryUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() - 0.5) * 8)));
      setResponseTime(prev => Math.min(500, Math.max(100, prev + (Math.random() - 0.5) * 50)));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'Activity',
      title: 'Мониторинг в реальном времени',
      description: 'Отслеживайте производительность SAP систем 24/7 с минимальной задержкой в 1 секунду'
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика производительности',
      description: 'Глубокий анализ метрик, трендов и узких мест в работе ваших SAP приложений'
    },
    {
      icon: 'Bell',
      title: 'Умные оповещения',
      description: 'Настраиваемые алерты с интеграцией в Telegram, Email и корпоративные мессенджеры'
    },
    {
      icon: 'Shield',
      title: 'Мониторинг безопасности',
      description: 'Контроль доступа, аудит действий и выявление аномальной активности'
    },
    {
      icon: 'Database',
      title: 'Контроль базы данных',
      description: 'Мониторинг производительности БД, объема таблиц и медленных запросов'
    },
    {
      icon: 'FileText',
      title: 'Отчеты и дашборды',
      description: 'Готовые и кастомные отчеты с экспортом в PDF, Excel и автоматической рассылкой'
    }
  ];

  const advantages = [
    { metric: '99.9%', label: 'Uptime гарантия' },
    { metric: '<1с', label: 'Задержка данных' },
    { metric: '24/7', label: 'Поддержка' },
    { metric: '500+', label: 'SAP систем под управлением' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '49 000',
      period: 'мес',
      description: 'Для малого бизнеса',
      features: [
        'До 5 SAP систем',
        'Базовый мониторинг',
        'Email уведомления',
        'История 30 дней',
        'Техподдержка Email'
      ]
    },
    {
      name: 'Professional',
      price: '149 000',
      period: 'мес',
      description: 'Для среднего бизнеса',
      features: [
        'До 20 SAP систем',
        'Расширенный мониторинг',
        'Все каналы уведомлений',
        'История 90 дней',
        'Приоритетная поддержка',
        'Кастомные дашборды'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Индивидуально',
      period: '',
      description: 'Для крупного бизнеса',
      features: [
        'Неограниченно систем',
        'Полный функционал',
        'Персональный менеджер',
        'История 365 дней',
        'SLA 99.9%',
        'On-premise развертывание'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Activity" className="text-primary" size={28} />
            <span className="text-xl font-bold">SAP Monitor</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#docs" className="hover:text-primary transition-colors">Документация</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Начать мониторинг</Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              Профессиональное решение для SAP
            </Badge>
            <h1 className="text-5xl font-bold leading-tight">
              Мониторинг производительности SAP систем в реальном времени
            </h1>
            <p className="text-xl text-muted-foreground">
              Контролируйте все ключевые метрики, получайте оповещения о проблемах и предотвращайте сбои до их возникновения
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Rocket" size={20} />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="PlayCircle" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>

          <Card className="animate-scale-in border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Дашборд мониторинга</CardTitle>
                <Badge variant="outline" className="gap-1 animate-pulse-glow">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Live
                </Badge>
              </div>
              <CardDescription>Реальные данные с production серверов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Icon name="Cpu" size={16} />
                    CPU Usage
                  </span>
                  <span className="font-mono font-semibold">{cpuUsage.toFixed(1)}%</span>
                </div>
                <Progress value={cpuUsage} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Icon name="HardDrive" size={16} />
                    Memory Usage
                  </span>
                  <span className="font-mono font-semibold">{memoryUsage.toFixed(1)}%</span>
                </div>
                <Progress value={memoryUsage} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Icon name="Zap" size={16} />
                    Response Time
                  </span>
                  <span className="font-mono font-semibold">{responseTime.toFixed(0)}ms</span>
                </div>
                <Progress value={responseTime / 5} className="h-2" />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98.7%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24</div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-chart-3">1.2K</div>
                  <div className="text-xs text-muted-foreground">Requests/min</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30">Возможности</Badge>
          <h2 className="text-4xl font-bold">Полный контроль над SAP инфраструктурой</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Все инструменты для эффективного мониторинга и управления производительностью
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary" size={24} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="advantages" className="bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent border-accent/30">Преимущества</Badge>
            <h2 className="text-4xl font-bold">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-bold text-primary">{adv.metric}</div>
                <div className="text-muted-foreground">{adv.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30">Тарифы</Badge>
          <h2 className="text-4xl font-bold">Прозрачные цены для любого бизнеса</h2>
          <p className="text-xl text-muted-foreground">
            Выберите план, который подходит под ваши задачи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-2">₽/{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="docs" className="bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30">Документация</Badge>
            <h2 className="text-4xl font-bold">Быстрый старт</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="quickstart" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="quickstart">Быстрый старт</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="integration">Интеграция</TabsTrigger>
              </TabsList>
              
              <TabsContent value="quickstart" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Начало работы</CardTitle>
                    <CardDescription>Настройка мониторинга за 5 минут</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                        Установите агент мониторинга
                      </h4>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        curl -sSL https://sapmonitor.ru/install.sh | bash
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                        Настройте подключение к SAP
                      </h4>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        sapmonitor config --host your-sap-host --user monitor
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                        Запустите мониторинг
                      </h4>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        sapmonitor start
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="api" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>REST API</CardTitle>
                    <CardDescription>Интеграция через HTTP API</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-accent">GET /api/v1/metrics</div>
                      <div className="text-muted-foreground">Получить текущие метрики системы</div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-accent">POST /api/v1/alerts</div>
                      <div className="text-muted-foreground">Настроить правила оповещений</div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                      <div className="text-accent">GET /api/v1/reports</div>
                      <div className="text-muted-foreground">Скачать отчет за период</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="integration" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Интеграции</CardTitle>
                    <CardDescription>Подключение внешних систем</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
                        <Icon name="Send" className="text-primary" size={32} />
                        <div>
                          <h4 className="font-semibold">Telegram</h4>
                          <p className="text-sm text-muted-foreground">Оповещения в мессенджер</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
                        <Icon name="Mail" className="text-primary" size={32} />
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-sm text-muted-foreground">Рассылка отчетов на почту</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
                        <Icon name="Webhook" className="text-primary" size={32} />
                        <div>
                          <h4 className="font-semibold">Webhooks</h4>
                          <p className="text-sm text-muted-foreground">Интеграция через HTTP webhooks</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent border-accent/30">Контакты</Badge>
            <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
            <p className="text-muted-foreground">
              Ответим на вопросы и поможем подобрать оптимальное решение
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Иван Петров" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Компания</label>
                  <Input placeholder="ООО Ромашка" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашей задаче..." 
                    rows={4}
                  />
                </div>
                
                <Button className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <Icon name="Mail" className="mx-auto text-primary" size={32} />
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">support@sapmonitor.ru</div>
            </div>
            
            <div className="text-center space-y-2">
              <Icon name="Phone" className="mx-auto text-primary" size={32} />
              <div className="font-semibold">Телефон</div>
              <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
            </div>
            
            <div className="text-center space-y-2">
              <Icon name="Clock" className="mx-auto text-primary" size={32} />
              <div className="font-semibold">Время работы</div>
              <div className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00 МСК</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Activity" className="text-primary" size={24} />
                <span className="font-bold">SAP Monitor</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное решение для мониторинга SAP систем
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#docs" className="hover:text-primary transition-colors">Документация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">База знаний</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статус системы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тех. поддержка</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 SAP Monitor. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
