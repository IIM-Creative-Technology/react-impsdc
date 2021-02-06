import "../scss/components/weather-component.scss"
import "../../node_modules/weather-underground-icons/dist/wu-icons-style.min.css"

function Weather({city}){
    appId = "af7c7272c5f0d3258228ce914b1873a5"
    // Stocke les utilisateurs dans une variable d'état.
    // Nous transmettons un tableau vide comme valeur par défaut.

    const [weather, setWeather] = useState([]);

    // Le hook useEffect () se déclenche à chaque fois que le composant est rendu.  
    // Un tableau vide est passé comme deuxième argument afin que l'effet ne se déclenche qu'une seule fois.
    
    useEffect(() => {
    axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`)
        .then(response => setWeather(response.data));
    }, []);
      
    return (
        <div>
            <i class="wu wu-black wu-unknown wu-128"></i>
            {console.log(weather)}
        </div>
    )
}

export default Weather;