import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
import "./index.css";

const formatUserName = (userName) => `@${userName}`;

const users = [
  { userName: "Midudev", name: "Miguel Angel Durán", isFollowing: true },
  { userName: "PacoDuran", name: "Paco Durán", isFollowing: false },
  { userName: "Alex1leal", name: "Jesús Alexander Leal", isFollowing: false },
  
];

export default function App() {
  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          formatUserName={formatUserName}
          isFollowing={user.isFollowing}
          
        >
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

