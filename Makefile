run-android:
	ionic capacitor run android --livereload --external
build:
	ionic capacitor build android --prod --release && cd android && ./gradlew assembleRelease && cd ..
build-android:
	ionic capacitor build android --prod --release