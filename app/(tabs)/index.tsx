import { Image, StyleSheet, Platform, SafeAreaView, View, Text, Dimensions, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const { height, width } = Dimensions.get('window');

const DATA = [
  {
    name: 'Misi 1',
    location: 'JAKARTA',
    poin: 150,
  },
  {
    name: 'Misi 2',
    location: 'SURABAYA Broo',
    poin: 500,
  },
  {
    name: 'Misi 3',
    location: 'JAKARTA',
    poin: 250,
  },
  {
    name: 'Misi 4',
    location: 'SURABAYA',
    poin: 450,
  },
  {
    name: 'Misi 5',
    location: 'JAKARTA',
    poin: 350,
  },
];

const Separator = () => <View style={styles.separator} />;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '90%',
          borderRadius: 20,
          gap: 25,
          padding: 12,
        }}>
        <View>
          <Text
            style={{
              fontSize: 45,
              color: '#fffffe',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Hasbabul-X
          </Text>
          <Text style={{ fontSize: 20, color: '#a7a9be', textAlign: 'center' }}>
            Sunday, 25 Apr 2024
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ff8906',
            height: 200,
            borderRadius: 20,
            padding: 20,
            justifyContent: 'space-between',
            borderWidth: 2,
          }}>
          <Text style={{ fontSize: 35 }}>Hello bahlul</Text>
          <Text style={{ fontSize: 24 }}>Lv.99</Text>
        </View>
        <View>
          <Text style={{ fontSize: 35, marginBottom: 8, color: '#fffffe' }}>
            Daily mission :
          </Text>
          <View
            style={{
              height: 200,
              width: width - 40,
              borderRadius: 20,
              padding: 5,
              borderWidth: 2,
              backgroundColor: '#ff8906',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Image
              source={{
                uri: 'https://akcdn.detik.net.id/visual/2020/10/31/ebel_169.jpeg?w=900&q=90',
              }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 15,
                position: 'absolute',
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                right: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#f25f4c',
                  padding: 8,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                }}>
                <Text style={{ fontSize: 15, color: '#fff', zIndex: 1 }}>
                  {DATA[0].location}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 35,
                  color: '#fffffe',
                  zIndex: 1,
                  fontWeight: 'bold',
                }}>
                {'Hunter cobra'}
              </Text>
              <View
                style={{
                  backgroundColor: '#f25f4c',
                  padding: 8,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                }}>
                <Text style={{ fontSize: 15, color: '#fff', zIndex: 1 }}>
                  +{DATA[0].poin}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                paddingTop: 32,
                color: '#fffffe',
                zIndex: 1,
                fontWeight: 'bold',
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 35, marginBottom: 8, color: '#fffffe' }}>
            Sosial mision for you :
          </Text>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={({ item }) => (
              <View
                style={{
                  height: 200,
                  width: width - 40,
                  borderRadius: 20,
                  padding: 5,
                  borderWidth: 2,
                  backgroundColor: '#ff8906',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/564x/b2/ce/77/b2ce77463fa02f88282b5b59d34db30f.jpg',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 15,
                    position: 'absolute',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    right: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#f25f4c',
                      padding: 8,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 100,
                    }}>
                    <Text style={{ fontSize: 15, color: '#fff', zIndex: 1 }}>
                      {item.location}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 35,
                      color: '#fffffe',
                      zIndex: 1,
                      fontWeight: 'bold',
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#f25f4c',
                      padding: 8,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 100,
                    }}>
                    <Text style={{ fontSize: 15, color: '#fff', zIndex: 1 }}>
                      +{item.poin}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    textAlign: 'center',
                    paddingTop: 32,
                    color: '#fffffe',
                    zIndex: 1,
                    fontWeight: 'bold',
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Text>
              </View>
            )}
            ItemSeparatorComponent={Separator}
            snapToInterval={width - 30}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#16161a', //004643 //0f0e17
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    width: 10,
  },
});