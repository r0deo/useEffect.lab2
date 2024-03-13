export default function UserCard({dataRecived}) {
  return (
    <div>
      <img src={dataRecived.avatar_url} alt={`${dataRecived.login}'s avatar`} />
      <h2>{dataRecived.name}</h2>
      <p>{dataRecived.bio}</p>
      <p>Followers: {dataRecived.followers}</p>
      <p>Following: {dataRecived.following}</p>
      <p>Public Repos: {dataRecived.public_repos}</p>
    </div>
  );

}
