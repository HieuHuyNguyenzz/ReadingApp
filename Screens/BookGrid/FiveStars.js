import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  FlatList,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {images, colors, icons, fontSize} from '../../constants';
function FiveStars(props) {
  const {numberOfStars, styleItem} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      {[0, 1, 2, 3, 4].map(item =>
        item <= numberOfStars - 1 ? (
          <Image
            source={icons.vote}
            style={{marginEnd: 2, height: 8, width: 8, ...styleItem}}
          />
        ) : (
          <Image
            source={icons.rate}
            style={{marginEnd: 2, height: 8, width: 8, ...styleItem}}
          />
        ),
      )}
    </View>
  );
}
export default FiveStars;
// class FiveStars extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       starCount: 3.5,
//     };
//   }

//   onStarRatingPress(rating) {
//     this.setState({
//       starCount: rating,
//     });
//   }

//   render() {
//     return (
//       <StarRating
//         disabled={false}
//         maxStars={5}
//         rating={this.state.starCount}
//         selectedStar={rating => this.onStarRatingPress(rating)}
//       />
//     );
//   }
// }

// export default FiveStars;
