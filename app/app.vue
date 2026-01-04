<template>
  <div class="card bg-white w-[600px] text-center p-8 rounded-xl shadow-lg">
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">To-Do List</h1>

    <!-- Input -->
    <div class="flex gap-3 mb-6">
      <input v-model="newTask" @keydown.enter.prevent="addTask" type="text" placeholder="Add a new task..."
        class="flex-1 rounded-xl px-4 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-cyan-500" />

      <select v-model="newPriority"
        class="rounded-xl px-3 py-2 bg-gray-50 border border-gray-200 focus:outline-none focus:border-cyan-500">
        <option disabled value="">Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button @click="addTask" class="bg-cyan-500 text-white px-5 rounded-xl hover:bg-cyan-600 active:scale-95">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>

    <!-- FILTER -->
    <div class="flex justify-between items-center mb-4">
      <p class="text-gray-600 text-sm">Filter by:</p>

      <select v-model="activeFilter" class="rounded-lg px-3 py-1 bg-gray-100 border border-gray-200 text-sm">
        <option value="all">All</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
    </div>

    <ul class="mb-6 space-y-3 text-left">
      <li v-for="task in filteredTasks" :key="task.id" class="flex items-center justify-between bg-gray-50 px-5 py-4 rounded-xl
           hover:bg-gray-100 transition border border-gray-200">
        <div class="flex items-center gap-4 flex-1">

          <!-- Checkbox -->
          <input type="checkbox" v-model="task.completed" @click="toggleTask(task.id)"
            class="w-4 h-4 accent-cyan-500 cursor-pointer" />

          <!-- VIEW MODE -->
          <template v-if="editingTaskId !== task.id">
            <div class="flex items-center gap-3">
              <span :class="[
                'text-[13px]',
                task.completed ? 'line-through text-gray-400' : 'text-gray-700'
              ]">
                {{ task.title }}
              </span>

              <!-- Priority Badge -->
              <span class="text-[11px] px-2 py-1 rounded-md font-medium capitalize" :class="{
                'bg-red-100 text-red-600': task.priority === 'high',
                'bg-yellow-100 text-yellow-600': task.priority === 'medium',
                'bg-green-100 text-green-600': task.priority === 'low'
              }">
                {{ task.priority }}
              </span>
            </div>
          </template>

          <!-- EDIT MODE -->
          <template v-else>
            <div class="flex items-center gap-3 flex-1">

              <!-- Text input -->
              <input v-model="editText" type="text" class="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg
                   shadow-sm focus:ring-1 focus:ring-cyan-400 focus:outline-none" />

              <!-- Priority dropdown -->
              <select v-model="editPriority" class="px-3 py-2 text-sm border border-gray-300 rounded-lg
                   shadow-sm focus:ring-1 focus:ring-cyan-400 focus:outline-none">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <button @click="saveEdit(task)" class="text-green-500 hover:text-green-600 text-lg">
                <i class="fa-solid fa-check"></i>
              </button>

            </div>
          </template>

        </div>

        <div class="flex items-center gap-3 pl-4">

          <!-- Edit button -->
          <button v-if="editingTaskId !== task.id" @click="startEdit(task)" class="text-gray-400 hover:text-blue-500">
            <i class="fa-solid fa-pen"></i>
          </button>

          <!-- Delete button -->
          <button @click="deleteTask(task.id)" class="text-gray-400 hover:text-red-500">
            <i class="fa-solid fa-trash"></i>
          </button>

        </div>
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
      Pending Tasks:
      <span class="font-medium">{{ pendingTasks }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
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
  priority: 'high' | 'medium' | 'low'
}

const newTask = ref('')
const newPriority = ref('')
const activeFilter = ref('all')
const editingTaskId = ref<number | null>(null)
const editText = ref('')
const editPriority = ref<'high' | 'medium' | 'low'>('medium')

const tasks = ref<Task[]>([
  { id: 1, title: 'Watch Netflix', completed: true, priority: 'medium' },
  { id: 2, title: 'Go shopping', completed: false, priority: 'high' },
  { id: 3, title: 'Reading book', completed: false, priority: 'low' },
  { id: 4, title: 'Eat sashimi', completed: false, priority: 'medium' },
])

const pendingTasks = computed(() => tasks.value.filter(t => !t.completed).length)

function addTask() {
  if (!newTask.value.trim() || !newPriority.value) return

  tasks.value.push({
    id: Date.now(),
    title: newTask.value.trim(),
    completed: false,
    priority: newPriority.value as any
  })

  newTask.value = ''
  newPriority.value = ''
}

function toggleTask(id: number) {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.completed = !task.completed
}

function deleteTask(id: number) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

function clearCompleted() {
  tasks.value = []
}

function clearAll() {
  tasks.value = []
}

function startEdit(task: Task) {
  editingTaskId.value = task.id
  editText.value = task.title
  editPriority.value = task.priority
}

function saveEdit(task: Task) {
  if (editText.value.trim()) task.title = editText.value.trim()
  task.priority = editPriority.value
  editingTaskId.value = null
}

const filteredTasks = computed(() => {
  if (activeFilter.value === 'all') return tasks.value
  return tasks.value.filter(t => t.priority === activeFilter.value)
})
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
