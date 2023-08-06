import { View, Image, StyleSheet } from "react-native";

// Mapping object that contains URLs for various images
const mapping = {
  costiimmigrantservices:
    "https://www.internationalstudentconnect.org/sites/default/files/COSTI_logo_RGB_large.png",
  christieossingtonneighbourhoodcentre:
    "https://www.thesedge.org/wp-content/uploads/2013/10/Christie-TS.jpg",
  christierefugeewelcomecentreinc:
    "https://media.licdn.com/dms/image/C560BAQG28Z0Wm7eoww/company-logo_200_200/0/1674157808863?e=2147483647&v=beta&t=CMgXWdudUNSU6OGtFjbherEeVgT0JOG9vbbRqKMqmoc",
  cityoftoronto:
    "https://pbs.twimg.com/profile_images/461168191113150465/ni5g6KgV.jpeg",
  cornerstoneplace:
    "https://thecornerstone.ca/wp-content/uploads/2012/09/cropped-2020_Logo_fullsize_black.png",
  covenanthousetoronto:
    "https://covenanthousetoronto.ca/wp-content/themes/covenant-house/dist/img/covenant_house_toronto.png",
  dixonhall:
    "https://www.friendsofruby.ca/wp-content/uploads/2020/11/DixonHall_logo_no_tag_CMYK-768x291.jpg",
  evasinitiatives:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2q79iu7y748jz.cloudfront.net%2Fs%2F_squarelogo%2Ff87aff8d51d1cdc44ba893c46197193e&f=1&nofb=1&ipt=7fa72500b30f40fbb3d72265e216924a527ef148718647184b86a3fc6e09c4f1&ipo=images",
  fifehousefoundation:
    "https://www.fifehouse.org/wp-content/uploads/FifeHouseHHH-WEBLogo.jpg",
  fredvictorcentre:
    "https://media.glassdoor.com/sqll/479661/fred-victor-centre-squarelogo-1471358742550.png",
  friendsofruby:
    "https://www.scotiabank.com/content/dam/scotiabank/canada/common/imagery/friends-of-ruby-pride-logo.png",
  goodshepherdministries:
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphotos.newswire.ca%2Fimages%2Fdownload%2F20141204_C6542_PHOTO_EN_9020.jpg&f=1&nofb=1&ipt=5cc9c98085082d94a3583b2f23baf432f9ea77f2cd042ad798df936c67e2615b&ipo=images",
  homesfirstsociety:
    "https://s3-ap-southeast-2.amazonaws.com/cdn.scouttalenthq.com/clients/homesfirst.on.ca/skin/img/logo-homesfirst.jpeg",
  horizonforyouth:
    "https://investforkidschicago.org/wp-content/uploads/2015/07/Horizons-for-Youth1.jpg",
  kennedyhouseyouthservices:
    "https://kennedyhouse.org/wp-content/uploads/2021/11/KH-Logo_50th-Anniversary-e1641955546651.png",
  margaretshousingandcommunitysupportservices:
    "https://margarets.ca/wp-content/uploads/2019/08/emblem_avatar.jpg",
  nameresnativemensresidence:
    "https://i.pinimg.com/originals/22/b0/6c/22b06caf658d33b7da38f7ac5ffc40fe.jpg",
  nativechildfamilyservicestoronto:
    "https://www.traumaconsortium.com/media/uploads/organization/logo/bnative_child.jpg.1230x0_q85_crop-center_upscale.jpg",
  sisteringawomensplace:
    "https://overdrivedesign.com/wp-content/uploads/2017/07/sistering-logo-grided.jpg",
  societyofstvincentdepaul:
    "https://cdn1.famvin.org/en/files/2015/10/ssvp-big.png",
  stfelixsocialministriesoutreach:
    "https://causes.benevity.org/causes_data/causes.benevity.org/files/styles/standard_image/public/clogos/124-863777165RR0001.png?itok=ziJKGSxX",
  stsimonsshelterinc:
    "https://streetvoices.ca/public/uploads/60e6e0a9dfbef.png",
  streethavenatthecrossroads:
    "https://ethp.ca/ethp/wp-content/uploads/2021/11/Street-Haven-at-the-Crossroads-2-1184x947.jpg",
  themucsheltercorporation:
    "https://www.sojournhouse.org/wp-content/uploads/2016/03/logo.png",
  thesalvationarmyofcanada:
    "https://salvationarmy.ca/wp-content/uploads/2017/10/cropped-site-icon-512.png",
  thescottmissioninc:
    "https://entro.com/media/CACHE/images/projects/entries/Scott_Mission_1/0377c74c32add1a32db8a21b704a80ef.jpg",
  torontocommunityhostel:
    "https://scontent.fykz1-2.fna.fbcdn.net/v/t39.30808-6/326733012_588460152612873_6994524447445374333_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IJntcp7ZIqwAX8rqXHz&_nc_ht=scontent.fykz1-2.fna&oh=00_AfBAF6UYIDU-jfP3doQQGHarVRfQTL3tC97lXLtUz7CmnA&oe=64D4199B",
  turningpointyouthservices:
    "https://media.licdn.com/dms/image/C560BAQH1ykqkxlo3pA/company-logo_200_200/0/1553619803129?e=2147483647&v=beta&t=xOs_Ye7kxCI1qISlaXlow6-YqTd9LKpfNpCuv1Xwpqw",
  wardenwoodscommunitycentre:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC560BAQGl__lG3qo0mg%2Fcompany-logo_200_200%2F0%2F1649448461955%3Fe%3D2147483647%26v%3Dbeta%26t%3D59yy8f6dy3OJS6fcWPA9W2i0ioDZVybpkzdnKtn3Xv4&f=1&nofb=1&ipt=5b211781d70e82229d1914d6be0173af70748f91b596f569e4d4b04a713aa4f0&ipo=images",
  womenshostelsinc:
    "https://scontent.fykz1-2.fna.fbcdn.net/v/t39.30808-6/348242502_1006703453650405_902967647422234731_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VDoEy1alZhEAX8TgrZM&_nc_ht=scontent.fykz1-2.fna&oh=00_AfDMnQ1w-Qow55ibcgF58Byq1ulEKfY3NJMShy-Jh9CAnA&oe=64D487F9",
  woodgreenreddoorfamilyshelter:
    "https://www.reddoorshelter.ca/sites/all/themes/bootstrap_reddoor/images/reddoor-logo@x2.png",
  ymcaofgreatertoronto:
    "https://mma.prnewswire.com/media/1164765/YMCA_of_Greater_Toronto_YMCA_of_Greater_Toronto_Launches_Online.jpg?p=facebook",
  ywcatoronto:
    "https://www.advantagecsp.com/Assets/AdvantageCMS/Images/Stories/YWCA/SL-YWCA.png",
  youthwithoutshelter:
    "https://yws.on.ca/wp-content/uploads/YWS_Primary_Logo_BLK.png",
  youthlink: "https://youthlink.ca/wp-content/uploads/2021/12/logo-revised.png",
};

// ImageMapping component displays an image based on the provided 'img' prop
const ImageMapping = (img) => {
  // Retrieve the image URL from the mapping based on the 'img' prop
  const imageSource = encodeURIComponent(mapping[img["img"]]);
  return (
    <View style={styles.container}>
      <Image source={{ uri: mapping[img["img"]] }} style={styles.image} />
    </View>
  );
};

// Styles for the ImageMapping component
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
