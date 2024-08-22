import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <Text style={styles.optionsButtonText}>...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContent}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png' }} style={styles.profileImage} />
        <Text style={styles.name}>Ryan Scheinder</Text>
        <Text style={styles.title}>Photographer</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2k</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>26</Text>
            <Text style={styles.statLabel}>Compens</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>48</Text>
            <Text style={styles.statLabel}>Bookmarks</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
            <Text style={styles.followButtonText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968958.png' }} style={styles.socialIcon} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3955/3955024.png' }} style={styles.socialIcon} />
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.aboutTitle}>About me</Text>
        <Text style={styles.aboutText}>
          An artist of considerable range, Ryan - the name taken by Melbourne raised Brooklyn based Nick Murphy - writes, performs and records all of his own music.
        </Text>
        <Text style={styles.albumTitle}>Album</Text>
        <View style={styles.albumContainer}>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={{ uri: 'https://avatars.mds.yandex.net/i?id=ae972c825241c5714eeb4d24b94ee8e89453f3ea-6428875-images-thumbs&n=13' }} style={styles.albumImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={{ uri: 'https://avatars.mds.yandex.net/i?id=3189b35c834e964dd072c7902ba12e2710887d8b20e7ae9f-11462839-images-thumbs&n=13' }} style={styles.albumImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumItem}>
            <Image source={{ uri: 'https://avatars.mds.yandex.net/i?id=7ef3ad40a6942fff14c707baf7444428bc477509-8357950-images-thumbs&n=13' }} style={styles.albumImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsButton: {
    padding: 8,
  },
  optionsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileContent: {
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  followButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 24,
    marginRight: 16,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButton: {
    padding: 12,
    borderRadius: 24,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 14,
    marginBottom: 16,
  },
  albumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  albumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  albumItem: {
    width: 100,
    height: 100,
  },
  albumImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  viewAllButton: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 24,
    alignSelf: 'center',
  },
  viewAllButtonText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Profile