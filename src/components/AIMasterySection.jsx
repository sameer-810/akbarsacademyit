import React from 'react';
import { Zap, Code, Palette, Video, Brain, Wand2 } from 'lucide-react';
import { aiMasteryCourse } from '../coursesData';

const iconMap = {
  Brain: Brain,
  Palette: Palette,
  Video: Video,
  Zap: Zap,
  Code: Code
};

export const AIMasterySection = ({ onEnrollClick }) => {
  return (
    <section id="ai-mastery" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full mb-4 font-bold text-sm">
            🚀 {aiMasteryCourse.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {aiMasteryCourse.title}
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {aiMasteryCourse.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {aiMasteryCourse.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Left Column - AI Intelligence */}
          <div className="space-y-6">
            {aiMasteryCourse.categories.slice(0, 2).map((category, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition transform hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(iconMap[category.icon], { size: 28 })}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition">
                      <span className="text-2xl">{tool.logo}</span>
                      <span className="font-semibold text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Main AI Mastery Badge */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>

              {/* Main card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl text-center">
                <div className="text-6xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    AI
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">MASTERY</h3>
                <p className="text-gray-600 font-semibold mb-6">Master the Tools.<br/>Build the Future.</p>

                {/* Key features */}
                <div className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                  {aiMasteryCourse.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Wand2 size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Course details */}
                <div className="border-t pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-900">{aiMasteryCourse.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-amber-600">{aiMasteryCourse.price}</span>
                  </div>
                </div>

                <button
                  onClick={onEnrollClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
                >
                  Enroll in AI Mastery
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Creative & Other categories */}
          <div className="space-y-6">
            {aiMasteryCourse.categories.slice(2).map((category, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition transform hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(iconMap[category.icon], { size: 28 })}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white bg-opacity-20 rounded-lg p-3 hover:bg-opacity-30 transition">
                      <span className="text-2xl">{tool.logo}</span>
                      <span className="font-semibold text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Ready to master AI and build the future?</p>
          <button
            onClick={onEnrollClick}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Start Your AI Mastery Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};
