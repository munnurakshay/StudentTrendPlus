import { useAuth } from '../../context/AuthContext';
import TrendingSkillsWidget from '../../components/widgets/TrendingSkillsWidget';
import RoadmapsWidget from '../../components/widgets/RoadmapsWidget';
import MentorsWidget from '../../components/widgets/MentorsWidget';
import ProgressWidget from '../../components/widgets/ProgressWidget';
import Card from '../../components/common/Card';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.userData?.name || 'Student'}! 👋
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your learning journey today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card hover>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-[#0078d4]">12</div>
            <div className="text-sm text-gray-600">Active Goals</div>
          </div>
        </Card>
        <Card hover>
          <div className="text-center">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-[#0078d4]">7</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </Card>
        <Card hover>
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-[#0078d4]">85%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
        </Card>
        <Card hover>
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-[#0078d4]">24</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left Column - 2 spans */}
        <div className="lg:col-span-2 space-y-6">
          <TrendingSkillsWidget />
          <RoadmapsWidget />
        </div>

        {/* Right Column - 1 span */}
        <div className="space-y-6">
          <ProgressWidget />
          <MentorsWidget />
        </div>
      </div>

      {/* Recent Activities */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📌 Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-xl">✅</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Completed "React Hooks" lesson
              </p>
              <p className="text-xs text-gray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-xl">💬</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Received feedback from mentor Sarah Johnson
              </p>
              <p className="text-xs text-gray-600">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-xl">🎯</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Started new roadmap: Frontend Development
              </p>
              <p className="text-xs text-gray-600">Yesterday</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
