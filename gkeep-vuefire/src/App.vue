<template>
  <div>
    <ul>
      <li v-for="note in notes">
        {{ note.text }}
        <button @click="removeNote(note['.key'])">X</button>
      </li>
    </ul>
    <form @submit.prevent="addNote">
      <input v-model="newNote" />
      <button>Add #{{ notes.length }}</button>
    </form>
  </div>
 
</template>

<script>
import {db} from './firebase';

var notesRef = db.ref('notes');
export default {
  data () {
    return {
      newNote: '',
      notes: {}
    }
  },
  firebase : {
    notes: notesRef.limitToLast(25)
  },
  methods: {
    removeNote: function (key) {
      notesRef.child(key).remove();
    },
    addNote: function () {
      if (this.newNote.trim()) {
        // update the Firebase reference!
        notesRef.push({
          text: this.newNote
        });
        // reset input box
        this.newNote= "";
      }
    }
  }
}
</script>

<style lang="scss">

</style>
