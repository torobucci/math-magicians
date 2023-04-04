import style from '../components/styles/Home.module.css';

function Home() {
  return (
    <div className={style.container}>
      <h2 className={style.header}>Welcome to Math Magicians</h2>
      <p>Math Magicians is a react single web page application that displays: </p>
      <ul>
        <li>Calculator that can be used by users to perform simple calculations</li>
        <li>Quotes about life</li>
      </ul>
    </div>
  );
}
export default Home;
