# help for ionic cordova

## important

For the commands to run correctly, make sure that you are in the root folder of the project.  
(Folder in which there is, for example, the package.json file)

## Commandes

build application for deployment  
The generated file is located in the folder ./platforms/android/build/outputs/apk/ with name android-debug.apk

    npm run build-prod
    
Begin to edit files.  
Set up a server to preview the changes in a browser. Opens a page in the browser.

    npm run working-server

Same as the previous command,  
with an ionic page in the browser to view in one or more device simulator at the same time; In the browser.

    npm run working-server-devices
    
# adb | android

list connected devices

    adb devices
    
install apk android-debug.apk generate with "npm run build-prod", located in ./platforms/android/build/outputs/apk/  
FIRST TIME

    adb install ./platforms/android/build/outputs/apk/android-debug.apk
    
SECONDE AND NEXT TIME (The "-r" option replaces the application already installed the first time)

    adb install -r ./platforms/android/build/outputs/apk/android-debug.apk