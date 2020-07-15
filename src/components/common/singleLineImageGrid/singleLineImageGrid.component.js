import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default function SingleLineImageGrid(props) {
 const classes = useStyles();

 return (
  <div data-testid="single-line-image-grid" className={classes.root}>
   <GridList className={classes.gridList} cols={3.5}>
    {tileData.map((tile) => (
     <GridListTile className={classes.tile} key={tile.img}>
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
       title={tile.title}
       classes={{
        root: classes.titleBar,
        title: classes.title,
       }}
      />
     </GridListTile>
    ))}
   </GridList>
  </div>
 );
}

const useStyles = makeStyles((theme) => ({
 tile: {
  height: "200px",
 },
 root: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
 },
 gridList: {
  flexWrap: "nowrap",
  // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  transform: "translateZ(0)",
 },
 title: {
  color: theme.palette.primary.light,
 },
 titleBar: {
  background:
   "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
 },
}));

const tileData = [
 {
  img:
   "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/73108061_457812908266773_2015363250357741902_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ITdA1GHsnNsAX8QeiTz&oh=bb2c85911e9adb8e6d9ca5ec25957c0f&oe=5F35F791",
  title: "Breakfast",
  author: "jill111",
  cols: 2,
  featured: true,
 },
 {
  img:
   "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/75362592_445466406344401_5843825975982181800_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BauGkrek8E4AX8TQC95&oh=489376057ec986ad5343428ef96ad73c&oe=5F331E75",
  title: "Tasty burger",
  author: "director90",
 },
 {
  img:
   "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/59914744_293079241575790_3754566618098631869_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2agzyMYv0UsAX82Jb2v&oh=faadc9bd4c625d63d7fe155708023925&oe=5F35E320",
  title: "Camera",
  author: "Danson67",
 },
 {
  img:
   "https://instagram.fcmb2-1.fna.fbcdn.net/v/t51.2885-15/e35/36148982_399692350519771_5182777498970095616_n.jpg?_nc_ht=instagram.fcmb2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8km2I9SBbrIAX-v-6lW&oh=266b38443e9c0288d993619d86a9734a&oe=5F3489E8",
  title: "Morning",
  author: "fancycrave1",
  featured: true,
 },
];
