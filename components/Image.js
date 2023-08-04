import { View, Image, StyleSheet } from "react-native";

const mapping = {
  costiimmigrantservices: require("../assets/Organizations/costiimmigrantservices.png"),
  christieossingtonneighbourhoodcentre: require("../assets/Organizations/christieossingtonneighbourhoodcentre.png"),
  christierefugeewelcomecentreinc: require("../assets/Organizations/christierefugeewelcomecentreinc.png"),
  cityoftoronto: require("../assets/Organizations/cityoftoronto.png"),
  cornerstoneplace: require("../assets/Organizations/cornerstoneplace.png"),
  covenanthousetoronto: require("../assets/Organizations/covenanthousetoronto.png"),
  dixonhall: require("../assets/Organizations/dixonhall.png"),
  evasinitiatives: require("../assets/Organizations/evasinitiatives.png"),
  fifehousefoundation: require("../assets/Organizations/fifehousefoundation.png"),
  fredvictorcentre: require("../assets/Organizations/fredvictorcentre.png"),
  friendsofruby: require("../assets/Organizations/friendsofruby.png"),
  goodshepherdministries: require("../assets/Organizations/goodshepherdministries.png"),
  homesfirstsociety: require("../assets/Organizations/homesfirstsociety.png"),
  horizonforyouth: require("../assets/Organizations/horizonforyouth.png"),
  kennedyhouseyouthservices: require("../assets/Organizations/kennedyhouseyouthservices.png"),
  margaretshousingandcommunitysupportservices: require("../assets/Organizations/margaretshousingandcommunitysupportservices.png"),
  nameresnativemensresidence: require("../assets/Organizations/nameresnativemensresidence.png"),
  nativechildfamilyservicestoronto: require("../assets/Organizations/nativechildfamilyservicestoronto.png"),
  sisteringawomensplace: require("../assets/Organizations/sisteringawomensplace.png"),
  societyofstvincentdepaul: require("../assets/Organizations/societyofstvincentdepaul.png"),
  stfelixsocialministriesoutreach: require("../assets/Organizations/stfelixsocialministriesoutreach.png"),
  stsimonsshelterinc: require("../assets/Organizations/stsimonsshelterinc.png"),
  streethavenatthecrossroads: require("../assets/Organizations/streethavenatthecrossroads.png"),
  themucsheltercorporation: require("../assets/Organizations/themucsheltercorporation.png"),
  thesalvationarmyofcanada: require("../assets/Organizations/thesalvationarmyofcanada.png"),
  thescottmissioninc: require("../assets/Organizations/thescottmissioninc.png"),
  torontocommunityhostel: require("../assets/Organizations/torontocommunityhostel.png"),
  turningpointyouthservices: require("../assets/Organizations/turningpointyouthservices.png"),
  wardenwoodscommunitycentre: require("../assets/Organizations/wardenwoodscommunitycentre.png"),
  womenshostelsinc: require("../assets/Organizations/womenshostelsinc.png"),
  woodgreenreddoorfamilyshelter: require("../assets/Organizations/woodgreenreddoorfamilyshelter.png"),
  ymcaofgreatertoronto: require("../assets/Organizations/ymcaofgreatertoronto.png"),
  ywcatoronto: require("../assets/Organizations/ywcatoronto.png"),
  youthwithoutshelter: require("../assets/Organizations/youthwithoutshelter.png"),
  youthlink: require("../assets/Organizations/youthlink.png"),
};

const ImageMapping = (img) => {
  const imageSource = mapping[img["img"]];
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ImageMapping;
