# React Native Shelter App

This is a React Native mobile application that provides information about shelters in Toronto, Canada. The app allows users to view details of various shelters and their available capacity. Users can filter the shelters based on different criteria and get real-time data about shelter occupancy.

## Features

- View a list of shelters with their program areas, organization names, shelter groups, and program models.
- Filter shelters based on availability (available beds or rooms) and shelter types (Mixed Adult, Families, Youth, Women, Men).
- View detailed information about a specific shelter, including location, available beds/rooms, and other relevant details.
- Users can sign in or create an account to access personalized features.
- Sign out functionality to securely log out from the app.

## Prerequisites

To run this app locally, you need to have the following installed:

- Node.js
- npm or yarn
- React Native CLI

## Installation

1. Clone this repository to your local machine.

2. Install the required dependencies using npm or yarn.

   ```bash
   npm install
   # or
   yarn install
   ```

3. Connect your Android or iOS device to your computer, or set up an emulator/simulator.

4. Run the application on your device/emulator.

   ```bash
   # For Android
   npx react-native run-android

   # For iOS
   npx react-native run-ios
   ```

## Configuration

The app requires an internet connection to fetch real-time shelter data. Make sure your device/emulator has access to the internet.

## Screenshots

![Screenshot 1](/screenshots/screenshot1.png)
![Screenshot 2](/screenshots/screenshot2.png)
![Screenshot 3](/screenshots/screenshot3.png)

## Dependencies

- react
- react-native
- @react-navigation/native
- @react-navigation/material-bottom-tabs
- @react-navigation/native-stack
- expo-status-bar
- react-native-vector-icons
- firebase
- prop-types

## Contributors

- Hassaan bin Khalil 
- Anthony Carlascio
- Rhina Dominguez

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgments

Special thanks to the Toronto Open Data team for providing the real-time shelter occupancy data. The app's design and layout were inspired by various open-source projects on GitHub.
