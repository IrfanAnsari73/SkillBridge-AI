const User = require("../models/User");

// =========================
// GET PROFILE
// =========================
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            user,
        });
    } catch (error) {
        console.error("Get Profile Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


// =========================
// UPDATE PROFILE
// =========================
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const {
            name,
            phone,
            college,
            branch,
            passingYear,
            location,
            bio,
            github,
            linkedin,
            portfolio,
            profileImage,
        } = req.body;

        user.name = name ?? user.name;
        user.phone = phone ?? user.phone;
        user.college = college ?? user.college;
        user.branch = branch ?? user.branch;
        user.passingYear = passingYear ?? user.passingYear;
        user.location = location ?? user.location;
        user.bio = bio ?? user.bio;
        user.github = github ?? user.github;
        user.linkedin = linkedin ?? user.linkedin;
        user.portfolio = portfolio ?? user.portfolio;
        user.profileImage = profileImage ?? user.profileImage;

        const updatedUser = await user.save();

        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                phone: updatedUser.phone,
                college: updatedUser.college,
                branch: updatedUser.branch,
                passingYear: updatedUser.passingYear,
                location: updatedUser.location,
                bio: updatedUser.bio,
                github: updatedUser.github,
                linkedin: updatedUser.linkedin,
                portfolio: updatedUser.portfolio,
                profileImage: updatedUser.profileImage,
            },
        });
    } catch (error) {
        console.error("Update Profile Error:", error);

        res.status(500).json({
            message: "Server error",
        });
    }
};


module.exports = {
    getProfile,
    updateProfile,
};