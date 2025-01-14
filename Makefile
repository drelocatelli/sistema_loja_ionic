run-android:
	ionic capacitor run android --livereload --external
build:
	cd android && ./gradlew build && cd ..