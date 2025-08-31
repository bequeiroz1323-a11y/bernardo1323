import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  Heart, 
  Brain, 
  Users, 
  CheckCircle, 
  Star, 
  Shield, 
  Download,
  Play,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Timer
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Simulação do cronômetro (apenas visual)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Como vou receber o kit após a compra?",
      answer: "Você receberá o kit imediatamente por e-mail em formato PDF imprimível. Basta baixar e começar a usar!"
    },
    {
      question: "As atividades são adequadas para todas as idades de 2 a 6 anos?",
      answer: "Sim! O kit foi desenvolvido com atividades adaptáveis para diferentes faixas etárias, com orientações específicas para cada idade."
    },
    {
      question: "Preciso de materiais especiais para fazer as atividades?",
      answer: "Não! Todas as atividades usam materiais simples que você já tem em casa: papel, lápis de cor, massinha, objetos do cotidiano."
    },
    {
      question: "E se eu não ficar satisfeita com o kit?",
      answer: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas."
    },
    {
      question: "As atividades realmente reduzem o tempo de tela das crianças?",
      answer: "Absolutamente! As atividades são tão envolventes que as crianças naturalmente preferem brincar e aprender com elas do que ficar no celular ou tablet."
    }
  ];

  const testimonials = [
    {
      name: "Marina Santos",
      location: "São Paulo, SP",
      text: "Minha filha de 4 anos estava viciada no tablet. Com o kit, ela esqueceu completamente das telas! Agora passamos horas brincando juntas. Valeu cada centavo!",
      rating: 5
    },
    {
      name: "Paula Oliveira",
      location: "Rio de Janeiro, RJ", 
      text: "Sou professora e mãe. Uso as atividades tanto em casa quanto na escola. As crianças amam e eu vejo o desenvolvimento delas acontecendo na prática!",
      rating: 5
    },
    {
      name: "Fernanda Costa",
      location: "Belo Horizonte, MG",
      text: "Estava desesperada sem saber como estimular meu filho de 3 anos. O kit trouxe a solução! Ele está mais concentrado, criativo e feliz.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="text-center text-gray-800">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-gray-800">
              30 Atividades Poderosas que Estimulam o Cérebro do Seu Filho e Fazem Ele Trocar a Tela pela Sua Presença
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Atividades Comprovadas que Estimulam o Cérebro, Reduzem o Tempo de Tela e Fortalecem o Vínculo Familiar
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold md:font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto">
              <Download className="w-6 h-6 mr-2" />
              QUERO GARANTIR MEU KIT AGORA
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
            
            <p className="text-sm mt-4 text-gray-600">✨ Acesso imediato • Garantia de 7 dias • Formato digital PDF</p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Você Também Sente Essa Angústia?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100">
              <Smartphone className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vício nas Telas</h3>
              <p className="text-gray-600">Seu filho passa horas grudado no celular ou tablet, e você não sabe mais como tirar ele de lá?</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Falta de Tempo</h3>
              <p className="text-gray-600">Você quer estimular seu filho, mas não sabe por onde começar e não tem tempo para pesquisar atividades?</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
              <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Conexão Perdida</h3>
              <p className="text-gray-600">Você sente que perdeu a conexão com seu filho e não consegue mais criar momentos especiais juntos?</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-200">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Se você se identificou com pelo menos uma dessas situações, você não está sozinha.</strong>
            </p>
            <p className="text-gray-600">
              Milhares de mães passam pelo mesmo dilema todos os dias. A boa notícia? 
              <span className="font-bold text-purple-600"> Existe uma solução simples e comprovada!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Apresentamos o Kit de Atividades
              <span className="block text-purple-600">Desenvolvimento Infantil</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido por uma equipe de especialistas em neurodesenvolvimento infantil, o Kit cérebro estimula o raciocínio lógico, a criatividade, a linguagem, o foco, a coordenação motora e até mesmo a conexão emocional entre pais e filhos. Com essas atividades divertidas você vai ver diferença no tempo de tela do seu filho em até 2 semanas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">O que você vai receber:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  30 Atividades Poderosas e Educativas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  70 Perguntas Poderosas para Conectar com seu Filho e Gerar uma relação de confiança
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Guia Rápido "Como Estimular o Cérebro Brincando"
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Calendário de Brincadeiras Semanais
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Checklist de Desenvolvimento Infantil
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Plano personalizado para a criança
                </li>
              </ul>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">+ Benefícios que você só encontra aqui:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Redução natural do tempo de tela, sem brigas ou pressão</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Aumento do interesse da criança por aprender e brincar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Mais tempo de qualidade entre pais e filhos, sem precisar "inventar" atividades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                    <span>Sensação real de estar presente e marcando a infância do seu filho</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto">
                <Download className="w-6 h-6 mr-2" />
                QUERO RECEBER TUDO ISSO
                <ArrowRight className="w-6 h-6 ml-2" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Brain className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Desenvolvimento Cognitivo</h3>
                <p className="text-gray-600">Atividades que estimulam memória, concentração, raciocínio lógico e criatividade.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Play className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Coordenação Motora</h3>
                <p className="text-gray-600">Exercícios que desenvolvem habilidades motoras finas e grossas de forma lúdica.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Users className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Habilidades Sociais</h3>
                <p className="text-gray-600">Brincadeiras que ensinam cooperação, empatia e comunicação.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-5 rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl">
              GARANTIR MEU KIT AGORA - R$ 10,00
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Por que Este Kit é Diferente de Tudo que Você Já Viu?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Praticidade Total</h3>
              <p className="text-gray-600">Atividades de 10 a 30 minutos que cabem na sua rotina corrida</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Método Comprovado</h3>
              <p className="text-gray-600">Baseado em pesquisas de desenvolvimento infantil e neurociência</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Conexão Familiar</h3>
              <p className="text-gray-600">Momentos especiais que fortalecem o vínculo entre vocês</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Acesso Imediato</h3>
              <p className="text-gray-600">Receba agora e comece a usar em 5 minutos</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
              <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Resultados Reais</h3>
              <p className="text-gray-600">Você verá mudanças no comportamento em poucos dias</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Garantia Total</h3>
              <p className="text-gray-600">7 dias para testar e devolvemos o dinheiro se não gostar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kit Works Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Por que o Kit Cérebro Funciona?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nosso método é baseado em neurociência e desenvolvimento infantil comprovado
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Neuroplasticidade</h3>
              <p className="text-gray-600">
                O cérebro das crianças de 2-6 anos está em desenvolvimento acelerado. 
                Nossas atividades aproveitam essa janela crítica para criar novas conexões neurais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Aprendizado Lúdico</h3>
              <p className="text-gray-600">
                Crianças aprendem melhor brincando. Cada atividade é disfarçada de diversão, 
                mas trabalha habilidades específicas de desenvolvimento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vínculo Afetivo</h3>
              <p className="text-gray-600">
                Momentos de qualidade entre pais e filhos liberam ocitocina, 
                fortalecendo a conexão emocional e facilitando o aprendizado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Repetição Espaçada</h3>
              <p className="text-gray-600">
                As atividades seguem um padrão científico de repetição que consolida 
                o aprendizado na memória de longo prazo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Redução Natural de Telas</h3>
              <p className="text-gray-600">
                Atividades envolventes competem naturalmente com dispositivos eletrônicos, 
                reduzindo o tempo de tela sem conflitos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Desenvolvimento Integral</h3>
              <p className="text-gray-600">
                Cada atividade trabalha múltiplas áreas: cognitiva, motora, social e emocional, 
                garantindo desenvolvimento completo.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Resultado Comprovado</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Mais de 20.000 famílias já viram mudanças significativas no comportamento, 
              concentração e desenvolvimento dos seus filhos em apenas 2 semanas de uso.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-sm opacity-90">Redução no tempo de tela</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">92%</div>
                <div className="text-sm opacity-90">Melhora na concentração</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Maior conexão familiar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            O que as Mães Estão Dizendo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-3xl inline-block">
              <h3 className="text-3xl font-bold mb-2">+20.000 Famílias Satisfeitas</h3>
              <p className="text-xl opacity-90">Se juntaram à nossa comunidade e transformaram a rotina familiar!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Duas opções incríveis para transformar o desenvolvimento do seu filho
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico - R$ 10,00 */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano Básico</h3>
                <div className="mb-4">
                  <span className="text-lg text-gray-500 line-through">De R$ 47,00</span>
                  <span className="text-5xl font-bold text-gray-800 ml-2">R$ 10,00</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">30 Atividades Essenciais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">PDF Imprimível</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Acesso Imediato</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Garantia de 7 Dias</span>
                </div>
              </div>

              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                COMEÇAR AGORA
              </button>
            </div>

            {/* Plano Completo - R$ 17,00 */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 text-center relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </span>
              </div>
              
              <div className="mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">Plano Completo</h3>
                <div className="mb-4">
                  <span className="text-lg opacity-70 line-through">De R$ 67,00</span>
                  <span className="text-5xl font-bold ml-2">R$ 17,00</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>30 Atividades Poderosas e Educativas</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>70 Perguntas Poderosas para Conectar com seu Filho e Gerar uma relação de confiança</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Guia Rápido "Como Estimular o Cérebro Brincando"</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Calendário de Brincadeiras Semanais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Checklist de Desenvolvimento Infantil</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Plano personalizado para a criança</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mb-4">
                <Download className="w-5 h-5 mr-2" />
                QUERO O COMPLETO
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <p className="text-sm opacity-90">⚡ Melhor custo-benefício</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-green-500 text-white p-6 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold mb-2">🛡️ Garantia Incondicional de 7 Dias</h3>
              <p className="text-lg">Se você não ficar 100% satisfeita, devolvemos todo o seu dinheiro. Sem perguntas, sem complicações!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Dúvidas Frequentes
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{item.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Não Deixe Seu Filho Perder Essa Oportunidade de Desenvolvimento
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cada dia que passa é uma oportunidade perdida de estimular o cérebro do seu filho. 
            Comece agora mesmo e veja a transformação acontecer!
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-6 rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto mb-6">
            <Download className="w-8 h-8 mr-3" />
            SIM, QUERO TRANSFORMAR MEU FILHO!
            <ArrowRight className="w-8 h-8 ml-3" />
          </button>

          <p className="text-sm opacity-80">
            ✨ Mais de 20.000 famílias já transformaram a rotina dos seus filhos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Kit Desenvolvimento Infantil. Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <span>Política de Privacidade</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Suporte</span>
          </div>
        </div>
      </footer>

      {/* Fixed Timer Footer */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-1 md:py-2 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Timer className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-sm md:text-base">OFERTA LIMITADA</span>
            <div className="flex items-center gap-1 md:gap-2 bg-black/20 px-2 md:px-4 py-1 rounded-full">
              <span className="font-bold text-sm md:text-base tracking-wide">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
