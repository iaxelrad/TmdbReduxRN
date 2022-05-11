import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../../../redux/actions';

const MovieItem = ({item, exists, fromFavorites = false}) => {
  const dispatch = useDispatch();
  const addToFavorites = movie => dispatch(addFavorite(movie));
  const handleAddFavorite = movie => addToFavorites(movie);
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));
  const handleRemoveFavorite = movie => removeFromFavorites(movie);

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w185' + item.poster_path;

  const onPress = () => {
    if (fromFavorites) {
      handleRemoveFavorite(item);
    } else {
      exists(item) ? handleRemoveFavorite(item) : handleAddFavorite(item);
    }
  };

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemContent}>
        <Image
          source={{uri: IMAGE_URL}}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.itemContentRight}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.dataRow}>
            <MaterialIcons color="green" name="thumb-up" size={32} />
            <Text style={styles.vote}>{item.vote_count}</Text>
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.7}
              style={styles.favoriteButton}>
              <MaterialIcons
                color="orange"
                size={32}
                name={
                  fromFavorites
                    ? 'favorite'
                    : exists(item)
                    ? 'favorite'
                    : 'favorite-border'
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  itemWrapper: {marginVertical: 12},
  itemContent: {flexDirection: 'row', flex: 1},
  image: {width: 100, height: 150, borderRadius: 10},
  itemContentRight: {flex: 1, marginLeft: 12},
  title: {fontSize: 22, paddingRight: 16},
  dataRow: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  vote: {fontSize: 18, paddingLeft: 10, color: '#64676D'},
  favoriteButton: {
    marginLeft: 14,
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});
