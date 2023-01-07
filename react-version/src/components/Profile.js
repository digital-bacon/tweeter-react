import profileImage from './profile-hex.png';

function Profile() {
  return (
    <aside>
      <div class="profile">
        <img class="profile__image" src={ profileImage } />
      </div>
      <br />
      <div class="profile__name">
        <h2><span class="profile--bold">Amy</span> Mansell</h2>
      </div>
    </aside>
  );
}

export default Profile;