'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FileText, Calendar, MessageSquare, TrendingUp, Download, ChevronRight, User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading client portal...</p>
        </div>
      </div>
    );
  }

  // Mock data for demonstration
  const projects = [
    {
      id: 1,
      name: "AI Strategy Development",
      status: "In Progress",
      progress: 65,
      nextMilestone: "Technology Stack Recommendation",
      dueDate: "2024-02-15"
    },
    {
      id: 2,
      name: "Customer Service AI Implementation",
      status: "Planning",
      progress: 25,
      nextMilestone: "Requirements Gathering",
      dueDate: "2024-03-01"
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: "Weekly Progress Review",
      date: "2024-01-25",
      time: "2:00 PM PST",
      attendees: ["Sarah Chen", "Your Team"]
    },
    {
      id: 2,
      title: "Technical Deep Dive",
      date: "2024-01-30",
      time: "10:00 AM PST",
      attendees: ["David Kim", "Engineering Team"]
    }
  ];

  const resources = [
    {
      id: 1,
      title: "AI Implementation Roadmap",
      type: "PDF",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "ROI Analysis Report",
      type: "Excel",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Training Materials - Phase 1",
      type: "ZIP",
      date: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen sticky top-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Client Portal</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'overview' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'projects' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-5 h-5" />
                Projects
              </button>
              <button
                onClick={() => setActiveTab('meetings')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'meetings' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Calendar className="w-5 h-5" />
                Meetings
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'resources' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download className="w-5 h-5" />
                Resources
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'messages' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                Messages
              </button>
            </nav>
            
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'profile' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User className="w-5 h-5" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'settings' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <Link
                href="/logout"
                className="w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 text-gray-700 hover:bg-gray-50"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {session.user?.email?.split('@')[0]}!
              </h1>
              <p className="text-gray-600 mt-2">Here's an overview of your AI transformation journey</p>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">2</div>
                    <p className="text-gray-600 mt-1">Active Projects</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <p className="text-gray-600 mt-1">Overall Progress</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">3.2x</div>
                    <p className="text-gray-600 mt-1">Projected ROI</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <p className="text-gray-600 mt-1">Team Members Trained</p>
                  </div>
                </div>

                {/* Active Projects */}
                <div className="bg-white rounded-xl shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    {projects.map(project => (
                      <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{project.name}</h3>
                            <p className="text-sm text-gray-600">Next: {project.nextMilestone}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'In Progress' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-500">Due: {project.dueDate}</p>
                          <button className="text-purple-600 text-sm font-medium hover:text-purple-700 flex items-center gap-1">
                            View Details
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Meetings */}
                <div className="bg-white rounded-xl shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Upcoming Meetings</h2>
                  </div>
                  <div className="p-6">
                    {upcomingMeetings.map(meeting => (
                      <div key={meeting.id} className="flex items-center justify-between py-3 border-b last:border-0">
                        <div>
                          <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                          <p className="text-sm text-gray-600">
                            {meeting.date} at {meeting.time} • With {meeting.attendees.join(', ')}
                          </p>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                          Join
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">All Projects</h2>
                <div className="space-y-4">
                  {projects.map(project => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                          <p className="text-gray-600 mt-1">Current milestone: {project.nextMilestone}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'In Progress' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Overall Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Expected completion: {project.dueDate}</p>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                          View Project Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Resources & Documents</h2>
                <div className="space-y-3">
                  {resources.map(resource => (
                    <div key={resource.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{resource.title}</h3>
                          <p className="text-sm text-gray-600">{resource.type} • Uploaded {resource.date}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add other tab contents as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}