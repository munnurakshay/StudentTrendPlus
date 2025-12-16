import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const MentorsPage = () => {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: 'Machine Learning & AI',
      experience: '10 years',
      company: 'Google',
      rating: 4.9,
      sessions: 150,
      available: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      expertise: 'Full Stack Development',
      experience: '8 years',
      company: 'Microsoft',
      rating: 4.8,
      sessions: 120,
      available: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      expertise: 'Cloud Architecture',
      experience: '12 years',
      company: 'Amazon AWS',
      rating: 4.9,
      sessions: 200,
      available: false
    },
    {
      id: 4,
      name: 'David Park',
      expertise: 'Mobile Development',
      experience: '6 years',
      company: 'Apple',
      rating: 4.7,
      sessions: 85,
      available: true
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">👥 Connect with Mentors</h1>
        <p className="text-gray-600">
          Get personalized guidance from experienced professionals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} hover>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0078d4] to-[#8000ff] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {mentor.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  </div>
                  {mentor.available && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Available
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <p className="font-medium">{mentor.experience}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Company:</span>
                    <p className="font-medium">{mentor.company}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Rating:</span>
                    <p className="font-medium">⭐ {mentor.rating}/5</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Sessions:</span>
                    <p className="font-medium">{mentor.sessions}+</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="primary" fullWidth disabled={!mentor.available}>
                    {mentor.available ? 'Book Session' : 'Not Available'}
                  </Button>
                  <Button variant="secondary">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MentorsPage;
