import { useState } from "react";

export default function TwitterFollowCard({
  children,
  userName,
  initialIsFollowing,
  formatUserName,
 
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "jl-followCard-button is-following"
    : "jl-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const imageSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="jl-followCard">
      <header className="jl-followCard-header">
        <img className="jl-followCard-avatar" alt="avatar" src={imageSrc} />
        <div className="jl-followCard-info">
          <strong> {children}</strong>
          <span className="jl-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
        <span className="jl-followCard-text">{text}</span>
          <span className="jl-followCard-stopFollow">Dejar de Seguir </span>
        </button>
      </aside>
    </article>
  );
}
