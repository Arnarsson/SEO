'use client';

import Link from "next/link";
import { ArrowRight, Brain, Zap, Users, TrendingUp, Code, Shield, LineChart, Cpu } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "strategy",
      icon: Brain,
      title: "AI Strategy Consulting",
      brief: "Develop a comprehensive AI roadmap aligned with your business objectives",
      description: "Our AI strategy consulting service helps you identify opportunities, assess readiness, and create a roadmap for successful AI adoption. We analyze your current capabilities, industry landscape, and competitive position to develop a tailored AI strategy.",
      features: [
        "AI readiness assessment",
        "Opportunity identification and prioritization",
        "Technology stack recommendations",
        "ROI projections and business case development",
        "Risk assessment and mitigation strategies",
        "Change management planning"
      ],
      outcomes: [
        "Clear AI implementation roadmap",
        "Prioritized use cases with ROI estimates",
        "Technology and vendor recommendations",
        "Budget and timeline projections"
      ]
    },
    {
      id: "implementation",
      icon: Zap,
      title: "AI Implementation Services",
      brief: "End-to-end deployment of AI solutions with seamless integration",
      description: "From proof of concept to production deployment, we handle the complete implementation of AI solutions. Our team ensures smooth integration with your existing systems while maintaining security and compliance standards.",
      features: [
        "Solution architecture and design",
        "Model development and training",
        "System integration and API development",
        "Data pipeline construction",
        "Testing and quality assurance",
        "Production deployment and monitoring"
      ],
      outcomes: [
        "Fully deployed AI solutions",
        "Integrated systems and workflows",
        "Automated processes and pipelines",
        "Performance dashboards and monitoring"
      ]
    },
    {
      id: "training",
      icon: Users,
      title: "AI Training & Workshops",
      brief: "Empower your team with AI skills and knowledge",
      description: "Build internal AI capabilities through our comprehensive training programs. We offer customized workshops, hands-on labs, and certification programs to upskill your workforce for the AI-driven future.",
      features: [
        "Executive AI literacy programs",
        "Technical team training",
        "Hands-on workshops and labs",
        "Custom curriculum development",
        "Online learning platforms",
        "Certification programs"
      ],
      outcomes: [
        "AI-literate workforce",
        "Reduced dependency on external consultants",
        "Improved innovation capacity",
        "Certified AI practitioners"
      ]
    },
    {
      id: "analytics",
      icon: LineChart,
      title: "AI Analytics & Optimization",
      brief: "Maximize ROI with continuous improvement and optimization",
      description: "Our analytics service helps you measure, monitor, and optimize your AI investments. We provide ongoing support to ensure your AI solutions deliver maximum value and adapt to changing business needs.",
      features: [
        "Performance monitoring and reporting",
        "Model optimization and retraining",
        "A/B testing and experimentation",
        "Cost optimization strategies",
        "Scaling recommendations",
        "Continuous improvement programs"
      ],
      outcomes: [
        "Improved model performance",
        "Reduced operational costs",
        "Data-driven optimization insights",
        "Scalable AI operations"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Bespoke AI solutions tailored to unique business challenges"
    },
    {
      icon: Shield,
      title: "AI Governance & Ethics",
      description: "Ensure responsible AI deployment with proper governance frameworks"
    },
    {
      icon: Cpu,
      title: "MLOps & Infrastructure",
      description: "Build robust infrastructure for scalable AI operations"
    },
    {
      icon: TrendingUp,
      title: "AI-Driven Growth",
      description: "Leverage AI for customer acquisition and revenue growth"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting services designed to transform your business and drive sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-purple-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-medium transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Expected Outcomes</h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for specific AI needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium transition-all"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium transition-all"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}