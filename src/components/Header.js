import UserLogo from "../assets/userLogo.png";
import DownArrow from "../assets/downArrow.png";
export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li className="selected">
            <a className="menu" href="#">
              SO FUNKTIONIERT'S
            </a>
          </li>
          <li className="selected">
            <a className="menu" href="#">
              SONDERANGERBOTE
            </a>
          </li>
          <li className="drop selected">
            <a className="menu" href="#">
              <img src={UserLogo} alt="userLogo" />
              <span>MEIN BEREICH</span>
              <img src={DownArrow} alt="downArrow" />
            </a>
            <div className="dropdownContain">
              <div className="dropOut">
                <div className="triangle"></div>
                <ul>
                  <li>My published jokes</li>
                  <li>My saved jokes</li>
                  <li>Account Information</li>
                  <li>Publish new joke</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
