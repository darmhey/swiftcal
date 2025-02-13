import { FiMail, FiInfo, FiTrash } from "react-icons/fi";

export default function Page() {
  return (
    <div className="p-6 ">
      {/* Password Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">Password</h2>
        <p className="text-gray-600">Update your password.</p>
        <button className="mt-2 flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
          <FiMail /> Email me a reset link
        </button>
      </div>

      {/* Custom Domains Section */}
      <div className="mb-6 border-t pt-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          Custom Domains <FiInfo className="text-gray-400" />
        </h2>
        <p className="text-gray-600">
          Configure custom domains to use for your scheduling links.
        </p>
        <div className="mt-2 p-4 bg-gray-100 rounded-md text-gray-600">
          Upgrade to the Premium plan to enjoy this feature.{" "}
          <a href="#" className="text-blue-600">
            Go to billing →
          </a>
        </div>
      </div>

      {/* Sender Profiles Section */}
      <div className="mb-6 border-t pt-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          Sender Profiles <FiInfo className="text-gray-400" />
        </h2>
        <p className="text-gray-600">
          Configure custom addresses to send emails from in your account.
        </p>
        <div className="mt-2 p-4 bg-gray-100 rounded-md text-gray-600">
          Upgrade to the Premium plan to enjoy this feature.{" "}
          <a href="#" className="text-blue-600">
            Go to billing →
          </a>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-bold text-red-600">Danger Zone</h2>
        <p className="text-gray-600">
          Permanently delete your SavvyCal account.
        </p>
        <button className="mt-2 flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          <FiTrash /> Delete my account...
        </button>
      </div>
    </div>
  );
}
