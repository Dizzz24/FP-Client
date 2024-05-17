import React from 'react';
import { StyleSheet, Image, View, Text, SafeAreaView, Pressable, Dimensions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('window')

export default function TabTwoScreen() {
  const emojisWithIcons = [
    { title: 'Adventure', icon: 'space-shuttle' },
    { title: 'Social', icon: 'users' },
    { title: 'Individu', icon: 'user' },
  ]

  //

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "blue" }}>
      <View style={styles.headerImageContainer}>
        <Image
          source={{ uri: 'https://akcdn.detik.net.id/visual/2020/10/31/ebel_169.jpeg?w=900&q=90' }}
          style={styles.headerImage}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "blue", position: "relative" }}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
        </View>
        <View style={{ position: "absolute", top: 15, right: 15 }}>
          <Pressable style={{ backgroundColor: "black", borderRadius: 50, height: 35, width: 85, borderWidth: 2, borderColor: "white", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "white" }}>Edit Profile</Text>
          </Pressable>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>EBEL SANG KOBRA</Text>
          <Text style={styles.profileUsername}>@EbelSnake23</Text>
          <Text style={styles.profileBio}>
            Bio singkat pengguna. Ini adalah tempat di mana pengguna bisa menulis sesuatu tentang diri mereka.
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
                justifyContent: 'center',
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 35,
                  color: '#fffffe',
                  zIndex: 1,
                  fontWeight: 'bold',
                }}>
                {"Progress bar"}
              </Text>
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
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <View style={{ height: "auto", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 35, fontWeight: "bold" }}>History</Text>
              <SelectDropdown
                data={emojisWithIcons}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                renderButton={(selectedItem, isOpened) => {
                  return (
                    <View style={styles.dropdownButtonStyle}>
                      {selectedItem && (
                        <Icon name={selectedItem.icon} />
                      )}
                      <Text style={styles.dropdownButtonTxtStyle}>
                        {(selectedItem && selectedItem.title) || 'Select category'}
                      </Text>
                      <Icon name={isOpened ? 'sort-up' : 'sort-down'} style={styles.dropdownButtonArrowStyle} />
                    </View>
                  );
                }}
                renderItem={(item, index, isSelected) => {
                  return (
                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                      <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
                      <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    width: width,
    height: 225,
    backgroundColor: '#d3d3d3',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 15,
    marginTop: -66,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
    paddingHorizontal: 20
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileUsername: {
    color: 'gray',
    fontSize: 20
  },
  profileBio: {
    marginVertical: 10,
    color: 'gray',
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    marginLeft: "auto",
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
