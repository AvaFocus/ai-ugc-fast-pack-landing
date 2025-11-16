import React from 'react';
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}
export function FeatureCard({
  icon,
  title,
  description
}: FeatureCardProps) {
  return <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>;
}