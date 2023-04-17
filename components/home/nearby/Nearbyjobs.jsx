import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import styles from './nearbyjobs.style';
import { SIZES } from '../../../constants';
import useFetch from '../../../hooks/useFetch';

const NearbyJobs = () => {
  const { isLoading, data, error, refetch } = useFetch('search', {
    query: 'react developer',
    page: '1',
    num_pages: '1',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          data?.map((job) => <NearbyJobCard item={job} key={job.job_id} />)
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
