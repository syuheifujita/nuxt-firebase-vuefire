import firebase from 'firebase'

// IDやAPIKEYなど、必要なパラメーターをここで取得
const cofig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
}

// 取得した必要なパラメーターを使用し、firebaseを初期化
if (!firebase.apps.length) { //二重の初期化を防ぐ
    firebase.initializeApp(cofig)
}

// exportしてcomponentで使えるようにする
export default firebase