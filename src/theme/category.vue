<template>
  <div class="columns">
    <div class="column is-one-third"
    v-for="(post, title) in posts"
    v-bind:key="post.id">
      <app-post :link="post.link">
          <h3 slot="title">{{ post.title }}</h3>
          <span slot="content">{{ post.content }}</span>
          </app-post>
    </div>
  </div>
</template>

<script>
import post from './post.vue';
export default {
  components: {
    'app-post': post,
  },

  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'PWA Stats',
          content:
            'A community-driven list of',
          link: 'https://www.pwastats.com/',
        },
        {
          id: 2,
          title: 'A Comprehensive Guide To HTTP/2 Server Push',
          content:
            'No longer is HTTP/2',
          link:
            'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/',
        },
        {
          id: 3,
          title: 'So what’s this GraphQL thing I keep hearing about?',
          content:
            'Why now is the',
          link:
            'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf',
        },
        {
          id: 4,
          title: 'State of The Mobile Gap Between Native and Web',
          content:
            'Clearly PhoneGap, and Cordova',
          link: 'https://remysharp.com/2016/05/28/state-of-the-gap',
        },
        {
          id: 5,
          title: 'Learning JavaScript Design Patterns',
          content:
            'Design patterns',
          link:
            'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
        },
        {
          id: 6,
          title: 'The Power of Custom Directives in Vue',
          content:
            'The beautiful thing',
          link: 'https://css-tricks.com/power-custom-directives-vue/',
        },
      ],
    };
  },
};
</script>

