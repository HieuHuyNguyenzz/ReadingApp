let profile = null;

const getProfile = () => {
  return profile;
};

const setProfile = newProfile => {
  profile = newProfile;
};

const profileStore = {
  getProfile,
  setProfile,
};

export default profileStore;
