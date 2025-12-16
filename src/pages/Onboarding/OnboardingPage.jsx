import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const interests = [
    '💻 Web Development',
    '📱 Mobile Development',
    '🤖 Machine Learning',
    '☁️ Cloud Computing',
    '🔐 Cybersecurity',
    '📊 Data Science',
    '🎨 UI/UX Design',
    '🎮 Game Development',
    '🔗 Blockchain',
    '🤖 AI & Robotics',
    '📈 Business Analytics',
    '🌐 DevOps'
  ];

  const skills = [
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'Java',
    'C++',
    'SQL',
    'Git',
    'Docker',
    'AWS',
    'TypeScript',
    'MongoDB'
  ];

  const toggleInterest = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const toggleSkill = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleComplete = async () => {
    try {
      // Update user document in Firestore
      await updateDoc(doc(db, 'users', user.uid), {
        interests: selectedInterests,
        skills: selectedSkills,
        onboardingCompleted: true,
        updatedAt: new Date().toISOString()
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error completing onboarding:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f3f2f1] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {step} of 2</span>
            <span className="text-sm font-medium text-gray-700">{step === 1 ? '50%' : '100%'}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#0078d4] to-[#8000ff] h-2 rounded-full transition-all duration-300"
              style={{ width: step === 1 ? '50%' : '100%' }}
            ></div>
          </div>
        </div>

        {/* Step 1: Select Interests */}
        {step === 1 && (
          <Card padding="lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                What are you interested in? 🎯
              </h1>
              <p className="text-gray-600">
                Select topics you'd like to explore (choose at least 3)
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedInterests.includes(interest)
                      ? 'border-[#0078d4] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium">{interest}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setStep(2)}
                disabled={selectedInterests.length < 3}
              >
                Next: Select Skills
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Select Skills */}
        {step === 2 && (
          <Card padding="lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                What skills do you have? 💪
              </h1>
              <p className="text-gray-600">
                Select your current technical skills (choose at least 2)
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                    selectedSkills.includes(skill)
                      ? 'border-[#8000ff] bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium">{skill}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={handleComplete}
                disabled={selectedSkills.length < 2}
              >
                Complete Setup
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage;
