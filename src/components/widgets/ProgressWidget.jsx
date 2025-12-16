import Card from '../common/Card';

const ProgressWidget = () => {
  // Mock data - will be replaced with Firestore data
  const stats = [
    { label: 'Skills Completed', value: 12, icon: '✅' },
    { label: 'Active Roadmaps', value: 3, icon: '🗺️' },
    { label: 'Mentorship Hours', value: 8, icon: '⏱️' },
    { label: 'Projects Completed', value: 5, icon: '🎯' },
  ];

  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Your Progress</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-gradient-to-br from-[#f3f2f1] to-white rounded-lg">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[#0078d4]">{stat.value}</div>
            <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProgressWidget;
