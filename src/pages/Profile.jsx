import Abishek from "../assets/Abishek.jpg";
import Rohan from "../assets/Rohan.jpg";

function Profile() {

  return (

    <div>

      <h1>
        Team Profiles
      </h1>

      <div className="profile-container">

        {/* ABISHEK */}

        <div className="profile-card">

          <img
            src={Abishek}
            alt="Abishek"
          />

          <h2>
            Abikeshar Ghimire
          </h2>

          <p>
            <strong>
              Student ID:
            </strong>
            {" "}
            2530004
          </p>

          <p>
            <strong>
              Course:
            </strong>
            {" "}
            IT
          </p>

          <p>
            <strong>
              College:
            </strong>
            {" "}
            Ulsan College
          </p>

        </div>

        {/* ROHAN */}

        <div className="profile-card">

          <img
            src={Rohan}
            alt="Rohan"
          />

          <h2>
            Rohan Bhattarai
          </h2>

          <p>
            <strong>
              Student ID:
            </strong>
            {" "}
            2530019
          </p>

          <p>
            <strong>
              Course:
            </strong>
            {" "}
            IT
          </p>

          <p>
            <strong>
              College:
            </strong>
            {" "}
            Ulsan College
          </p>

        </div>

      </div>

    </div>

  );
}

export default Profile;