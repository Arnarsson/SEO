'use client';

import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Building2 } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "retail-transformation",
      company: "Global Retail Chain",
      industry: "Retail",
      title: "AI-Powered Inventory Optimization Drives 35% Cost Reduction",
      challenge: "Managing inventory across 500+ stores with seasonal demand fluctuations",
      solution: "Implemented predictive analytics and automated replenishment system",
      results: [
        "35% reduction in inventory costs",
        "60% decrease in stockouts",
        "25% improvement in customer satisfaction",
        "$12M annual savings"
      ],
      metrics: {
        roi: "320%",
        timeline: "6 months",
        stores: "500+"
      }
    },
    {
      id: "healthcare-diagnostics",
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      title: "AI Diagnostics Platform Improves Patient Outcomes by 40%",
      challenge: "Long wait times for diagnostic results and high error rates",
      solution: "Deployed AI-powered diagnostic assistance and workflow automation",
      results: [
        "40% improvement in diagnostic accuracy",
        "75% reduction in diagnosis time",
        "50% increase in patient throughput",
        "92% physician satisfaction rate"
      ],
      metrics: {
        roi: "280%",
        timeline: "9 months",
        patients: "100K+"
      }
    },
    {
      id: "financial-fraud",
      company: "International Bank",
      industry: "Finance",
      title: "Real-time Fraud Detection Saves $50M Annually",
      challenge: "Rising fraud losses and false positive rates affecting customer experience",
      solution: "Built ML-based fraud detection system with real-time processing",
      results: [
        "85% reduction in fraud losses",
        "60% fewer false positives",
        "Real-time detection capability",
        "$50M annual savings"
      ],
      metrics: {
        roi: "450%",
        timeline: "4 months",
        transactions: "1B+"
      }
    },
    {
      id: "manufacturing-quality",
      company: "Automotive Manufacturer",
      industry: "Manufacturing",
      title: "Predictive Maintenance Reduces Downtime by 70%",
      challenge: "Unexpected equipment failures causing production delays",
      solution: "IoT sensors with AI predictive maintenance system",
      results: [
        "70% reduction in unplanned downtime",
        "45% decrease in maintenance costs",
        "30% increase in equipment lifespan",
        "$8M annual savings"
      ],
      metrics: {
        roi: "380%",
        timeline: "8 months",
        facilities: "12"
      }
    }
  ];

  const industries = [
    { name: "Retail", count: 45 },
    { name: "Healthcare", count: 38 },
    { name: "Finance", count: 52 },
    { name: "Manufacturing", count: 41 },
    { name: "Technology", count: 36 },
    { name: "Energy", count: 28 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how AI is transforming businesses across industries
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                250+
              </div>
              <p className="text-gray-600 mt-2">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                3.2x
              </div>
              <p className="text-gray-600 mt-2">Average ROI</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                $500M+
              </div>
              <p className="text-gray-600 mt-2">Value Created</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                95%
              </div>
              <p className="text-gray-600 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>{study.industry}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Solution:</span> {study.solution}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
                    <div>
                      <div className="flex items-center gap-1 text-green-600 font-bold">
                        <TrendingUp className="w-4 h-4" />
                        {study.metrics.roi}
                      </div>
                      <p className="text-xs text-gray-600">ROI</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-blue-600 font-bold">
                        <Clock className="w-4 h-4" />
                        {study.metrics.timeline}
                      </div>
                      <p className="text-xs text-gray-600">Timeline</p>
                    </div>
                    <div>
                      <div className="text-purple-600 font-bold">
                        {study.metrics.stores || study.metrics.patients || study.metrics.transactions || study.metrics.facilities}
                      </div>
                      <p className="text-xs text-gray-600">Scale</p>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Proven AI solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-2xl font-bold text-purple-600">{industry.count}</p>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how AI can transform your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-medium transition-all"
          >
            Start Your AI Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}