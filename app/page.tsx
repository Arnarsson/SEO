'use client';

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Brain, Target, TrendingUp, Users, Zap, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI roadmap tailored to your business goals and industry challenges."
    },
    {
      icon: Zap,
      title: "AI Implementation",
      description: "End-to-end deployment of AI solutions with seamless integration into your existing systems."
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Upskill your workforce with hands-on AI training programs and workshops."
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Track and optimize AI-driven KPIs to maximize ROI and business impact."
    }
  ];

  const stats = [
    { value: "250+", label: "AI Projects Delivered" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "3.2x", label: "Average ROI" },
    { value: "50M+", label: "Data Points Analyzed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-16 pb-24">
        <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by Fortune 500 Companies
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
              <span className="block text-gray-900">Transform Your Business</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                with AI-Powered Growth
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              Expert AI consulting to help enterprises leverage artificial intelligence for competitive advantage and exponential growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 h-12 px-8 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 h-12 px-8"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up" 
                style={{animationDelay: `${800 + index * 100}ms`}}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI consulting services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center text-purple-600 font-medium mt-4 group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI transformation that delivers measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Analyze your business needs and identify AI opportunities" },
              { step: "02", title: "Strategy", desc: "Develop a custom AI roadmap aligned with your goals" },
              { step: "03", title: "Implementation", desc: "Deploy and integrate AI solutions with expert guidance" },
              { step: "04", title: "Optimization", desc: "Continuously improve and scale your AI capabilities" }
            ].map((item, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
            <div className="mb-8">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6">
                "AI Growth Advisors transformed our operations. Their strategic approach to AI implementation increased our efficiency by 40% and reduced costs by $2M annually."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">CTO, TechCorp Global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading companies transforming their business with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 h-12 px-8 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 h-12 px-8"
            >
              Download AI Readiness Guide
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our AI consulting services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What industries do you specialize in?",
                a: "We work across various industries including finance, healthcare, retail, manufacturing, and technology. Our AI solutions are customized to address industry-specific challenges and regulatory requirements."
              },
              {
                q: "How long does a typical AI implementation take?",
                a: "Implementation timelines vary based on project scope. A pilot project typically takes 8-12 weeks, while enterprise-wide deployments can range from 6-18 months. We provide detailed timelines during our initial assessment."
              },
              {
                q: "What's included in your AI strategy consulting?",
                a: "Our strategy consulting includes business analysis, AI opportunity assessment, technology stack recommendations, implementation roadmap, ROI projections, and change management planning."
              },
              {
                q: "Do you provide ongoing support after implementation?",
                a: "Yes, we offer comprehensive support packages including system monitoring, performance optimization, team training, and regular strategy reviews to ensure long-term success."
              },
              {
                q: "How do you ensure data security and compliance?",
                a: "We follow industry best practices for data security, including encryption, access controls, and compliance with regulations like GDPR, HIPAA, and SOC 2. All solutions are designed with privacy and security as top priorities."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.q}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your AI Transformation Today
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get a free consultation and custom AI roadmap for your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 h-12 px-8 shadow-lg hover:shadow-xl"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}