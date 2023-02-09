### BasicVuex
* Sample Vue app to demonstrate Vuex state store
* We will use Vue 3 for this exercise
* Vuex "store" is basically a container that holds your application state. 
  * Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.
  * You cannot directly mutate the store's state. The only way to change a store's state is by explicitly committing mutations. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.
* All components of the app and can retrieve data from the store
* State: 
* Mutations: are methods that changes state data. we can't trigger asynchronous calls from here. Inside mutations, you can't make API calls. Mutations are committed.
* Actions: can access data from state, but cannot change data. APi calls are made in actions and then you commit a mutation if you want to change state variable. Actions are dispatched.
* Getters: Allow us to get data from state. You can change or filter the data using getters.
* Modules: Break a store into multiple modules. Each module can have a separate store. 
### Vue CLI instalation
* Reference: https://cli.vuejs.org/guide/installation.html


```
$ vue create sample-vuex
$ npm run serve

```
* Visit Local:   http://localhost:8081/  to view the app locally
* 