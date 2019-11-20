export const state = () => ({
  // JSON Object
  tasks: [
    {
      'id': 0,
      'name': 'create repo',
      'description': 'Make sure to install Vuex & Vuetify',
      'checked': false
    },
    {
      'id': 1,
      'name': 'Create Task list component',
      'description': 'Allow user to check and un-check',
      'checked': false
    }
  ]

  // getters: {
  //   Tasks: (state) => {
  //     return state.tasks
  //   }
  // }

  // changing state should be done by commiting a mutation
  // mutation: {
  // }
})
