import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infoBox.css";

export default function InfoBox({info}){
    let image="https://plus.unsplash.com/premium_photo-1673081112888-f877c594ad18?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9nZ3klMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    let Hot="https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let Cold="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyfGVufDB8fDB8fHww";
    let rainy="https://images.unsplash.com/photo-1558409057-bbe679023136?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D";
   
    return(
        <div className='infoBox'>
            <h2>Weather Information- {info.weather}</h2>
            <div className='Container'>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={info.humidity>70 ? rainy : info.tem>15? Hot: Cold}
                    alt="green iguana"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary'} }>
                    <p>Temprature= {info.temp}&deg;C</p>
                    <p>Humidity= {info.humidity}</p>
                    <p>Min Temp= {info.tempMin}&deg;C</p>
                    <p>Max Temp= {info.tempMax}&deg;C</p>
                    <p>The weather can describe as <i>{info.weather}</i> and feels like<b>{info.feelsLike}&deg;C</b></p>
                    
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </div>
    )
}