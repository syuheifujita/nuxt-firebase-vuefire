import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
import _ from 'lodash';

// firestoreのDBを定義
const db = firebase.firestore()
const todosRef = db.collection('todos') //collectionのtodosを使います

export const state = () => ({
    todos: []
})

export const actions = {
    // 初期設定
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('todos', todosRef) //リモートのcollectionとローカルの配列のtodosをbiondする処理
    }),
    // 追加機能
    add: firestoreAction((context, name) => {
        if (name.trim()) { //未入力でなければaddする処理
            todosRef.add({
                name: name,
                done: false,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }),
    // 削除機能
    remove: firestoreAction((context, id) => { //removeにはidを引数に渡す
        todosRef.doc(id).delete()
    }),
    // チェックボックスのstate管理機能
    toggle: firestoreAction((context, todo) => {
        todosRef.doc(todo.id).update({
            done: !todo.done
        })
    }),
}

export const getters = {
    orderedTodos: state => {
        return _.sortBy(state.todos, 'created')
    }
}