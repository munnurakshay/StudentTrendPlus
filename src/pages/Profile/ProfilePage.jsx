import { useAuth } from '../../context/AuthContext';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">👤 Your Profile</h1>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-[#0078d4] to-[#8000ff] rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user?.userData?.name?.split(' ').map(n => n[0]).join('') || 'U'}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">{user?.userData?.name || 'User'}</h2>
              <p className="text-gray-600">{user?.email}</p>
              <Button variant="secondary" size="sm" className="mt-2">
                Change Photo
              </Button>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              value={user?.userData?.name || ''}
              placeholder="Your full name"
            />
            <Input
              label="Email"
              type="email"
              value={user?.email || ''}
              disabled
            />
            <Input
              label="University"
              type="text"
              placeholder="Your university name"
            />
            <Input
              label="Major"
              type="text"
              placeholder="Your major/field of study"
            />
            <Button variant="primary">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Interests & Skills */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Interests & Skills</h3>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Your Interests</h4>
            <div className="flex flex-wrap gap-2">
              {user?.userData?.interests?.map((interest, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-[#0078d4] rounded-full text-sm">
                  {interest}
                </span>
              )) || <p className="text-gray-500 text-sm">No interests selected</p>}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Your Skills</h4>
            <div className="flex flex-wrap gap-2">
              {user?.userData?.skills?.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-[#8000ff] rounded-full text-sm">
                  {skill}
                </span>
              )) || <p className="text-gray-500 text-sm">No skills selected</p>}
            </div>
          </div>
          <Button variant="secondary" className="mt-4">
            Update Interests & Skills
          </Button>
        </Card>

        {/* Account Settings */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
          <div className="space-y-3">
            <Button variant="secondary" fullWidth>
              Change Password
            </Button>
            <Button variant="ghost" fullWidth className="text-red-600 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
