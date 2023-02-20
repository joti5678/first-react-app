const todotitle = "Javascrip element";
const title1 = "This is Joti";
const date = new Date();
const currentdate = date.getDay();
const currentmonth = date.getMonth();
const currentyear = date.getFullYear();

function Card(props){
  const {title1, todotitle} =props
    return <div className="cardclass">
      <h1 className="headingstyle">{title1}</h1>
      <h2>{todotitle}</h2>
      <p>{currentdate + "/" +currentmonth + "/" + currentyear}</p>
  </div>;
  }

  export default Card;