<template>
    <div class="">
        <div class="form">
            <!-- submitでmethodsのadd()を呼び出す処理 -->
            <!-- .preventでsubmitした際にページがリロードされないようにする -->
            <form v-on:submit.prevent="add">
                <input v-model="name">
                <button class="bg-gray-500 rounded-md p-2 text-white">add</button>
            </form>
        </div>
        <!-- {{ todos }} -->
        <ul>
            <li v-for="todo in todos" :key="todo.id" class="text-xs">
                <input type="checkbox" v-bind:checked="todo.done" @change="toggle(todo)">
                <!-- todoのdoneがtrueの時、doneクラスを実行 -->
                <span v-if="todo.created" v-bind:class="{ done: todo.done }">
                    {{ todo.name }}
                    {{ todo.done }}
                    {{ todo.created.toDate() | dateFilter }}
                </span>
                <button @click="remove(todo.id)" class="bg-gray-500 rounded-md p-2 text-white">×</button>
            </li>
        </ul>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    // ローカルで一時的に保存するdata()
    data() {
        return {
            name: '',
            done: '',
        }
    },
    created: function() {
        this.$store.dispatch('todos/init')
    },
    // ローカルで一時的に保存したdata()を、dispatch()を呼び出してfirestoreのcollectionに格納する
    methods: {
        add() {
            this.$store.dispatch('todos/add', this.name)    //第一引数の書き方が不明
            this.name = ''
        },
        remove(id) {
            this.$store.dispatch('todos/remove', id)
        },
        toggle(todo) {
            this.$store.dispatch('todos/toggle', todo)
        }
    },
    computed: {
        todos() {
            // return this.$store.state.todos.todos
            return this.$store.getters['todos/orderedTodos']
        }
    },
    filters: {
        dateFilter: function(date) {    //timestampの取得にラグがあるので、dateがnullになってしまう
            return moment(date).format('YYYY/MM/DD HH:mm:ss')
        }
    },
}
</script>

<style>
li > span.done {
    text-decoration: line-through;
}
</style>
