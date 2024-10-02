import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  GButton,
  GInput,
  GContentSectionCard,
  GTitleTextBig,
} from "../../components/GlobalStyledComponents/GlobalStyledComponents";
import {
  useGetUserQuery,
  useUpdatePasswordMutation,
  useUpdateUserMutation,
} from "../../service/userApi";
import { useLogoutMutation } from "../../service/authApi";

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useGetUserQuery(username || "");
  const [updateUser] = useUpdateUserMutation();
  const [updatePassword] = useUpdatePasswordMutation();
  const [logout] = useLogoutMutation();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email,
        username: user.username,
        firstName: user.name?.firstname || "",
        lastName: user.name?.lastname || "",
        phone: user.phone || "",
        address: {
          city: user.address?.city || "",
          street: user.address?.street || "",
          number: user.address?.number?.toString() || "",
          zipcode: user.address?.zipcode || "",
        },
      });
    }
    console.log(user);
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser({
        username: username || "",
        updates: {
          ...formData,
          name: { firstname: formData.firstName, lastname: formData.lastName },
        },
      }).unwrap();
      alert("Profile updated successfully");
    } catch (err) {
      alert("Failed to update profile");
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }
    try {
      await updatePassword({
        username: username || "",
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      }).unwrap();
      alert("Password updated successfully");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (err) {
      alert("Failed to update password");
    }
  };

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    } catch (err) {
      alert("Failed to logout");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;
  console.log(error);

  return (
    <div className="container mx-auto p-4">
      <GTitleTextBig>Profile</GTitleTextBig>
      <GContentSectionCard>
        <form onSubmit={handleSubmit}>
          <GInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <GInput
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <GInput
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <GInput
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <GInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <GInput
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleInputChange}
            placeholder="City"
          />
          <GInput
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleInputChange}
            placeholder="Street"
          />
          <GInput
            type="text"
            name="address.number"
            value={formData.address.number}
            onChange={handleInputChange}
            placeholder="Street Number"
          />
          <GInput
            type="text"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleInputChange}
            placeholder="Zipcode"
          />
          <GButton type="submit">Update Profile</GButton>
        </form>
      </GContentSectionCard>

      <GContentSectionCard>
        <form onSubmit={handlePasswordUpdate}>
          <GInput
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            required
          />
          <GInput
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            placeholder="New Password"
            required
          />
          <GInput
            type="password"
            name="confirmNewPassword"
            value={passwordData.confirmNewPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm New Password"
            required
          />
          <GButton type="submit">Update Password</GButton>
        </form>
      </GContentSectionCard>

      <GButton onClick={handleLogout}>Logout</GButton>
    </div>
  );
};

export default Profile;
