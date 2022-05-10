import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../redux/actions';
import MovieItem from './components/MovieItem';

const Movies = () => {
  const {movies} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovieItem = ({item}) => {
    return <MovieItem item={item} />;
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
