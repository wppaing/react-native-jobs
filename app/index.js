import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import { COLORS, SIZES } from '../constants/theme';

import Welcome from '../components/home/welcome/Welcome';
import PopularJobs from '../components/home/popular/Popularjobs';
import NearbyJobs from '../components/home/nearby/Nearbyjobs';
import { icons, images } from '../constants';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
