import { TaskBuilder } from 'src/common/builders/task.builder'
import { TaskClient } from 'src/api/TaskClient'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const count = ref(0)
  const taskClient = new TaskClient()

  async function get(id) {
    try {
        const response = await taskClient.get(id)
        messauftrag.value = MessauftragBuilder.create(response)

        let res:
            | BlobMessauftrag
            | {
                  error: string
              } = { error: 'Could not get Blob' }
        try {
            res = await blobClient.getJSON<BlobMessauftrag>(blobKey.value)
        } catch (e) {
            console.log('blob e', e)
        }
        if (!res || (res.error && res.error == 'NOT_FOUND_ERROR')) {
            blobExistsOnServer.value = false
            currentBlob.value = BlobBuilder.createMessauftragBlob()
            return messauftrag.value
        }

        blobExistsOnServer.value = true
        currentBlob.value = BlobBuilder.createMessauftragBlob(res)
        messauftrag.value = MessauftragBuilder.fromBlob(
            currentBlob.value.messauftrag,
            messauftrag.value,
            currentBlob.value.updateDateTime,
        )

        return task.value
    } catch (e) {
        return null
    }
  }

  return { count, doubleCount, increment }
})