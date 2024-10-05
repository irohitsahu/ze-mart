import {
  GButton,
  GDarkBgCard,
  GForm,
  GInput,
  GTitleTextBig,
} from "../../components/GlobalStyledComponents/GlobalStyledComponents";
import { useLogoutMutation } from "../../service/authApi";
import { clearUserAuth } from "../../store/slice/authSlice";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRefreshTokenCookie,
  getUsernameCookie,
  setUsernameCookie,
} from "../../util/cookies";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useUpdateUserMutation } from "../../service/userApi";
import React from "react";
import { setUserState } from "../../store/slice/userSLice";

const Profile = () => {
  const username = getUsernameCookie();

  const [logout] = useLogoutMutation();
  const accessToken = useSelector(
    (state: RootState) => state.userAuth.accessToken
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    error,
  } = useGetUserQuery(username || "", { skip: !username });

  const [updateUser] = useUpdateUserMutation();
  // const [updateUser] = useUpdateUserMutation();
  // const [updatePassword] = useUpdatePasswordMutation();

  const [formData, setFormData] = React.useState({
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

  // const [passwordData, setPasswordData] = useState({
  //   currentPassword: "",
  //   newPassword: "",
  //   confirmNewPassword: "",
  // });

  React.useEffect(() => {
    if (user) {
      dispatch(setUserState(user));
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
  }, [user, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setPasswordData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      await updateUser({ username: username, updates: formData }).unwrap();
      setUsernameCookie(formData.username);
      alert("Profile updated successfully");
    } catch (err) {
      alert("Failed to update profile");
    }
  };

  // const handlePasswordUpdate = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (passwordData.newPassword !== passwordData.confirmNewPassword) {
  //     alert("New passwords do not match");
  //     return;
  //   }
  //   try {
  //     await updatePassword({
  //       username: username || "",
  //       currentPassword: passwordData.currentPassword,
  //       newPassword: passwordData.newPassword,
  //     }).unwrap();
  //     alert("Password updated successfully");
  //     setPasswordData({
  //       currentPassword: "",
  //       newPassword: "",
  //       confirmNewPassword: "",
  //     });
  //   } catch (err) {
  //     alert("Failed to update password");
  //   }
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading profile</div>;

  const handleLogout = () => {
    logout(accessToken);
    deleteRefreshTokenCookie();
    dispatch(clearUserAuth());
    navigate("/login");
  };
  return (
    <GDarkBgCard>
      <GTitleTextBig>Profile</GTitleTextBig>
      <GForm onSubmit={handleSubmit}>
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
        <GButton type="submit">Update Profile</GButton>
      </GForm>

      {/* <GContentSectionCard>
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
      </GContentSectionCard> */}

      <GButton onClick={handleLogout}>Logout</GButton>
    </GDarkBgCard>
  );
};

export default Profile;
