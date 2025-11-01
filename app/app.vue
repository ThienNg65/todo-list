<template>
  <div class="card bg-white min-w-96 text-center p-8 rounded-xl">
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">To-Do List</h1>

    <!-- Input -->
    <div class="flex mb-6 shadow-sm">
      <input v-model="newTask" @keydown.enter.prevent="addTask" type="text" placeholder="Add a new task..."
        class="flex-1 rounded-l-xl px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-cyan-500" />
      <button @click="addTask" class="bg-cyan-500 text-white px-5 rounded-r-xl hover:bg-cyan-600 active:scale-95">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>

    <!-- Task List -->
    <ul class="mb-6 space-y-3 text-left">
      <li v-for="task in tasks" :key="task.id"
        class="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <label class="flex items-center space-x-3 cursor-pointer select-none">
          <input id="checkbox" type="checkbox" v-model="task.completed" @click="toggleTask(task.id)"
            class="w-4 h-4 accent-cyan-500 cursor-pointer rounded-lg" />
          <span :class="[
            'text-sm',
            task.completed ? 'line-through text-gray-400' : 'text-gray-700'
          ]">
            {{ task.title }}
          </span>
        </label>
        <button @click="deleteTask(task.id)" class="text-gray-400 hover:text-red-500 transition">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
    </ul>

    <!-- Actions -->
    <div class="flex justify-between gap-3 mb-3">
      <button @click="clearCompleted" class="bg-cyan-500 text-white px-3 py-2 rounded-xl hover:bg-cyan-600 flex-1">
        Clear Completed
      </button>
      <button @click="clearAll" class="bg-gray-200 text-gray-700 px-3 py-2 rounded-xl hover:bg-gray-300 flex-1">
        Clear All
      </button>
    </div>

    <p class="text-gray-500 text-sm tracking-wide">
      Pending Tasks: <span class="font-medium">{{ pendingTasks }}</span>
    </p>
  </div>
</template>


<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { ref, computed } from 'vue'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  ],
  bodyAttrs: {
    class: 'font-inter bg-cyan-500 min-h-screen w-full flex items-center justify-center'
  }
})

interface Task {
  id: number
  title: string
  completed: boolean
}

const newTask = ref('')
const tasks = ref<Task[]>([
  { id: 1, title: 'Play Valorant', completed: true },
  { id: 2, title: 'Watch netflix', completed: true },
  { id: 3, title: 'Go shopping', completed: false },
  { id: 4, title: 'Reading book', completed: false },
  { id: 5, title: 'Eat sashimi', completed: false },
])

const pendingTasks = computed(() => tasks.value.filter(t => !t.completed).length)

function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTask.value.trim(),
    completed: false,
  })
  newTask.value = ''
}

function toggleTask(id: number) {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    console.log(task.completed)
    task.completed = !task.completed
    console.log(task.completed)
  }
}

function deleteTask(id: number) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

function clearCompleted() {
  tasks.value = tasks.value.filter(t => !t.completed)
}

function clearAll() {
  tasks.value = []
}
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>