import React from "react";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Card } from "@mui/material";
import "./component.css";
import Typography from "@mui/material/Typography";

const CardComponent = ({ data }) => {
  // Check if data is undefined or an empty array
  if (!data || data.length === 0) {
    return (
      <div className="container">
        {/* Handle the case where data is undefined or empty */}
        <p>No data available</p>
      </div>
    );
  }

  return (
    <>
    <div className="container">
    {data.map((item) => (
        <Typography variant="h3" gutterBottom>
       {item.location.name}, { item.location.region},  {item.location.country}
      </Typography>
    ))}
    </div>
    
    <div className="container">
      {data.map((item) => (
        <> 
        <Card sx={{ Width: "500px" }} key={item.last_updated_epoch}>
          <CardActionArea>
            <CardContent>
              <div className="arrangement">
                <Typography variant="subtitle2" gutterBottom>
                  Temperature
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {item.current.temp_c}°c
                </Typography>
              </div>
              <div className="arrangement">
                <Typography variant="subtitle2" gutterBottom>
                  Condition
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {item.current.condition.text}°c
                </Typography>
              </div>
              <div className="arrangement">
                <Typography variant="subtitle2" gutterBottom>
                  Wind Speed
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {item.current.wind_mph}
                </Typography>
              </div>
              <div className="arrangement">
                <Typography variant="subtitle2" gutterBottom>
                  Humidity.
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {item.current.humidity}°c
                </Typography>
              </div>
              <div className="arrangement">
                <Typography variant="subtitle2" gutterBottom>
                  Cloud  coverage
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {item.current.cloud}
                </Typography>
              </div>
              <div className="arrangement">
                <Typography variant="subtitle2" gutterBottom>
                  Last Update
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {item.current.last_updated}
                </Typography>
              </div>
             

            </CardContent>
          </CardActionArea>
        </Card>
        </>
      ))}
    </div>
    </>
  );
};

export default CardComponent;
