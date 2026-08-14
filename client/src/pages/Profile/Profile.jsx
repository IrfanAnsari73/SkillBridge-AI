import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        branch: "",
        passingYear: "",
        location: "",
        bio: "",
        github: "",
        linkedin: "",
        portfolio: "",
        profileImage: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // =========================
    // FETCH PROFILE
    // =========================
    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login first.");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to load profile.");
                return;
            }

            setProfile({
                name: data.user.name || "",
                email: data.user.email || "",
                phone: data.user.phone || "",
                college: data.user.college || "",
                branch: data.user.branch || "",
                passingYear: data.user.passingYear || "",
                location: data.user.location || "",
                bio: data.user.bio || "",
                github: data.user.github || "",
                linkedin: data.user.linkedin || "",
                portfolio: data.user.portfolio || "",
                profileImage: data.user.profileImage || "",
            });
        } catch (error) {
            console.error("Fetch Profile Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    // =========================
    // HANDLE INPUT
    // =========================
    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // UPDATE PROFILE
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        setSaving(true);
        setMessage("");
        setError("");

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/profile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        name: profile.name,
                        phone: profile.phone,
                        college: profile.college,
                        branch: profile.branch,
                        passingYear: profile.passingYear
                            ? Number(profile.passingYear)
                            : null,
                        location: profile.location,
                        bio: profile.bio,
                        github: profile.github,
                        linkedin: profile.linkedin,
                        portfolio: profile.portfolio,
                        profileImage: profile.profileImage,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to update profile.");
                return;
            }

            setProfile({
                name: data.user.name || "",
                email: data.user.email || "",
                phone: data.user.phone || "",
                college: data.user.college || "",
                branch: data.user.branch || "",
                passingYear: data.user.passingYear || "",
                location: data.user.location || "",
                bio: data.user.bio || "",
                github: data.user.github || "",
                linkedin: data.user.linkedin || "",
                portfolio: data.user.portfolio || "",
                profileImage: data.user.profileImage || "",
            });

            setMessage("Profile updated successfully! 🎉");
        } catch (error) {
            console.error("Update Profile Error:", error);
            setError("Unable to connect to server.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <p className="text-gray-600">
                    Loading profile...
                </p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <h1 className="text-4xl font-bold text-green-600">
                My Profile 👤
            </h1>

            <p className="text-gray-600 mt-2">
                Manage your personal information.
            </p>

            {/* Success Message */}
            {message && (
                <div className="mt-6 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    {message}
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mt-6 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 mt-8"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Full Name */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Email
                        </label>

                        <input
                            type="email"
                            value={profile.email}
                            readOnly
                            className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* College */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            College
                        </label>

                        <input
                            type="text"
                            name="college"
                            value={profile.college}
                            onChange={handleChange}
                            placeholder="Enter college name"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Branch */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Branch
                        </label>

                        <input
                            type="text"
                            name="branch"
                            value={profile.branch}
                            onChange={handleChange}
                            placeholder="e.g. CSE"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Passing Year */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Passing Year
                        </label>

                        <input
                            type="number"
                            name="passingYear"
                            value={profile.passingYear}
                            onChange={handleChange}
                            placeholder="e.g. 2027"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={profile.location}
                            onChange={handleChange}
                            placeholder="Enter your location"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* GitHub */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            GitHub
                        </label>

                        <input
                            type="url"
                            name="github"
                            value={profile.github}
                            onChange={handleChange}
                            placeholder="https://github.com/username"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* LinkedIn */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            LinkedIn
                        </label>

                        <input
                            type="url"
                            name="linkedin"
                            value={profile.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Portfolio */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Portfolio
                        </label>

                        <input
                            type="url"
                            name="portfolio"
                            value={profile.portfolio}
                            onChange={handleChange}
                            placeholder="https://yourportfolio.com"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Profile Image */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Profile Image URL
                        </label>

                        <input
                            type="url"
                            name="profileImage"
                            value={profile.profileImage}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 font-semibold">
                            Bio
                        </label>

                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            placeholder="Tell us about yourself..."
                            rows="4"
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                    </div>

                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    disabled={saving}
                    className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
                >
                    {saving ? "Saving..." : "Save Profile"}
                </button>

            </form>

        </DashboardLayout>
    );
};

export default Profile;