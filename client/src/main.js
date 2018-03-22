import Vue from 'vue';

import App from './App.vue';
import BlogContent from './blog/blog.component';
import BlogPost from './blog/post/post.component';

new Vue({
  el: '#app',
  render: (h) => h(App)
});
