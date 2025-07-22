'use client';

import Link from "next/link";
import { Download, FileText, Video, BookOpen, ArrowRight, Lock } from "lucide-react";
import { useState } from "react";

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = async (e: React.FormEvent, resourceId: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In real implementation, this would trigger a download
    alert(`Download link for ${resourceId} sent to ${email}`);
    setIsSubmitting(false);
    setEmail("");
  };

  const guides = [
    {
      id: "ai-readiness",
      title: "AI Readiness Assessment Guide",
      description: "Evaluate your organization's preparedness for AI adoption with our comprehensive assessment framework.",
      type: "PDF Guide",
      pages: 45,
      featured: true
    },
    {
      id: "roi-calculator",
      title: "AI ROI Calculator & Methodology",
      description: "Calculate potential returns and build a business case for AI investment in your organization.",
      type: "Excel Template",
      pages: null,
      featured: true
    },
    {
      id: "implementation-playbook",
      title: "AI Implementation Playbook",
      description: "Step-by-step guide to successfully implement AI solutions in your enterprise.",
      type: "PDF Guide",
      pages: 68,
      featured: false
    },
    {
      id: "ethics-framework",
      title: "Responsible AI Framework",
      description: "Best practices for ethical AI deployment and governance in your organization.",
      type: "PDF Guide",
      pages: 32,
      featured: false
    }
  ];

  const webinars = [
    {
      title: "AI Strategy for Business Leaders",
      date: "On-Demand",
      duration: "45 min",
      speakers: "Dr. Sarah Chen, CEO"
    },
    {
      title: "Building AI-Ready Teams",
      date: "On-Demand",
      duration: "60 min",
      speakers: "Emily Watson, Head of Strategy"
    },
    {
      title: "MLOps Best Practices",
      date: "On-Demand",
      duration: "90 min",
      speakers: "David Kim, Head of Engineering"
    }
  ];

  const articles = [
    {
      title: "The State of Enterprise AI in 2024",
      category: "Industry Report",
      readTime: "15 min"
    },
    {
      title: "5 Common AI Implementation Mistakes",
      category: "Best Practices",
      readTime: "8 min"
    },
    {
      title: "Measuring AI Success: KPIs That Matter",
      category: "Strategy",
      readTime: "10 min"
    },
    {
      title: "AI vs ML vs Deep Learning: A Business Guide",
      category: "Fundamentals",
      readTime: "12 min"
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
              AI Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free guides, templates, and tools to accelerate your AI journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Essential tools and guides for AI transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {guides.filter(g => g.featured).map((guide) => (
              <div key={guide.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <FileText className="w-7 h-7 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-purple-600">{guide.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                
                <form onSubmit={(e) => handleDownload(e, guide.id)} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email to download"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Download Now"}
                    <Download className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Downloads */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guides.filter(g => !g.featured).map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                    <button className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm hover:gap-2 transition-all">
                      <Lock className="w-4 h-4" />
                      Download
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Webinars & Training
            </h2>
            <p className="text-xl text-gray-600">
              Learn from our AI experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Video className="w-12 h-12 text-purple-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{webinar.speakers}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{webinar.date}</span>
                    <span>•</span>
                    <span>{webinar.duration}</span>
                  </div>
                  <button className="mt-4 text-purple-600 font-medium hover:text-purple-700">
                    Watch Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with AI trends and best practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-purple-600">{article.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.readTime} read</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="text-purple-600 font-medium hover:text-purple-700">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Ahead of the AI Curve
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get weekly insights and resources delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg"
              required
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-medium transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}