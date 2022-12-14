import { Grid } from "@mui/material";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { DataContext } from "../../context/provider";
import CardPhoto from "../utils/Card";

const FavoritesPhotos = () => {
  const { photos } = useContext(DataContext);
  console.log("photos2: ", photos);

  const allFavoritesPhotos = photos.photos.filter((photo) => photo.liked);

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allFavoritesPhotos.map((photo, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardPhoto value={photo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesPhotos;
