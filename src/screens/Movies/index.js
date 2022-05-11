import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../redux/actions';
import MovieItem from './components/MovieItem';

const Movies = () => {
  const {movies, favorites} = useSelector(state => state.moviesReducer);

  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exists = movie => {
    if (favorites.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };

  const renderMovieItem = ({item}) => {
    return <MovieItem item={item} exists={exists} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular Movies</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={movies.results}
          keyExtractor={item => item.id.toString()}
          renderItem={renderMovieItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 44, paddingHorizontal: 20},
  text: {fontSize: 22},
  listContainer: {flex: 1, marginTop: 12},
});
export default Movies;
