import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MovieItem from '../Movies/components/MovieItem';

const Favorites = () => {
  const {favorites} = useSelector(state => state.moviesReducer);

  const renderFavoriteItem = ({item}) => {
    return <MovieItem item={item} fromFavorites={true} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites</Text>
      <View style={styles.listContainer}>
        {favorites.length === 0 ? (
          <Text style={[styles.text, {fontSize: 18}]}>
            Add a movie to the list.
          </Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={renderFavoriteItem}
          />
        )}
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 44, paddingHorizontal: 20},
  text: {color: '#010101', fontSize: 22},
  listContainer: {flex: 1, marginTop: 8},
});
