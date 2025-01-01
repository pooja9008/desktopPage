import React from 'react';

export function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto mt-16 p-6 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Stats for Olivia Rhye</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg">Messages</button>
        </div>
      </div>
      <div className="aspect-video bg-gray-50 rounded-lg mb-6">
        {/* Placeholder for chart */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Analytics Chart Visualization
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-4">Biggest fans</h3>
          <div className="space-y-4">
            {['Francis Baker', 'Lars Turner'].map((name) => (
              <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span>{name}</span>
                </div>
                <span className="text-sm text-gray-500">23.8k</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-4">Favorite designers</h3>
          <div className="space-y-4">
            {['Adil Lee', 'Kate Morton'].map((name) => (
              <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span>{name}</span>
                </div>
                <span className="text-sm text-gray-500">45.4k</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}