import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const OpportunitiesPage = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      type: 'Hackathon',
      date: 'Jan 15-17, 2024',
      location: 'Virtual',
      prize: '$10,000',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'AI/ML Workshop Series',
      type: 'Workshop',
      date: 'Jan 20, 2024',
      location: 'Campus Hall A',
      prize: 'Free',
      icon: '🎓'
    },
    {
      id: 3,
      title: 'Startup Career Fair',
      type: 'Career Fair',
      date: 'Feb 5, 2024',
      location: 'Main Auditorium',
      prize: 'Free',
      icon: '💼'
    },
    {
      id: 4,
      title: 'Coding Competition',
      type: 'Competition',
      date: 'Feb 12, 2024',
      location: 'Virtual',
      prize: '$5,000',
      icon: '💻'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🎯 College Opportunities</h1>
        <p className="text-gray-600">
          Discover hackathons, workshops, and events to boost your career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.id} hover>
            <div className="flex items-start space-x-4">
              <span className="text-5xl">{opportunity.icon}</span>
              
              <div className="flex-1">
                <div className="mb-4">
                  <span className="px-2 py-1 bg-[#0078d4] text-white text-xs rounded-full">
                    {opportunity.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">{opportunity.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📅</span>
                    <span>{opportunity.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">💰</span>
                    <span>{opportunity.prize}</span>
                  </div>
                </div>
                
                <Button variant="primary" fullWidth>
                  Register Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
