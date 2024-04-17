# expo-sample-app
expo 연구용 프로젝트 입니다.

<br />

# 본 프로젝트 구동 방법
1. [expo](https://expo.dev/)에 접속하여 프로젝트를 생성합니다.
2. 생성한 프로젝트 상세페이지로 이동 후 project id 를 복사해둡니다.
3. 프로젝트 상세페이지에서 "Project settings" -> "Secrets" 으로 이동합니다.
4. "+ Add secret" 버튼을 클릭한 후 표시되는 모달창에서 Secret name 은 "EXPO_PROJECT_ID" 으로 입력하고, Secret value 는 아까 복사한 project id 를 입력한 뒤 "Create Secret" 버튼을 클릭합니다.
5. 본 레포지토리를 clone 받습니다.
```
git clone https://github.com/wisdomstar94/expo-sample-app.git
```
6. 해당 레포지토리로 이동합니다.
```
cd expo-sample-app
```
7. npm install 을 진행합니다.
```
npm install
```
8. .env.sample 파일을 .env 파일로 이름 수정 후 내용을 적절히 수정합니다.
9. eas cli 를 전역으로 설치합니다.
```
npm install --global eas-cli
```
10. [안드로이드 시뮬레이터 설정](https://docs.expo.dev/workflow/android-studio-emulator/), [ios 시뮬레이터 설정](https://docs.expo.dev/workflow/ios-simulator/)을 진행합니다.
11. 이제 `npm run android` 또는 `npm run ios` 명령어를 입력하여 에뮬레이터로 앱을 구동할 수 있습니다.
