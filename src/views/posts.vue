<template>
  <div class="users">
    <div>
      <h2>
        The name of this user is: {{ $route.params.id }}, Go back to:
        <router-link :to="{ name: 'Home1' }">Home</router-link>
      </h2>

      <router-link :to="{}">
        <div class="post-link" v-for="post in allPosts" :key="post.id">
          <h3>Post Title: {{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users1",
  data() {
    return {
      allPosts: [
        {
          id: 1,
          title: "Snakes on a Plane",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 2,
          title: "Three Days of the Condor",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 3,
          title: "The Place Beyond the Pines",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 4,
          title: "Bang the Drum Slowly",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 5,
          title: "Good Will Hunting",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 6,
          title: "Last Tango in Paris",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 7,
          title: "Eternal Sunshine of the Spotless Mind",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 8,
          title: "Rebel Without a Cause",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 9,
          title: "Cool Hand Luke",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
        {
          id: 10,
          title: "No Country for Old Men",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nisi venenatis, vehicula neque vitae, rutrum nisi. Mauris ante purus, porttitor nec magna eget, tempus sollicitudin lacus. Sed facilisis, sapien in finibus fermentum, ante felis ultrices ipsum, vitae porta nunc erat dapibus lectus. Suspendisse eget ante ante. Phasellus eu lectus sit amet tortor convallis aliquet. Nullam elementum urna auctor arcu posuere, ac interdum lorem lacinia. Nam non sollicitudin enim, eget dapibus velit. Proin quis risus euismod, tempor lacus vitae, condimentum tellus. Nulla in quam mauris. Sed sollicitudin lacus pulvinar pulvinar ullamcorper. Pellentesque vel urna vitae metus posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ligula eget tellus pharetra pulvinar vel in augue. Nunc vel lorem sagittis, porttitor purus vitae, interdum elit.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.users {
  padding: 50px;
}
a {
  color: chocolate;
  text-decoration: none;
}
.users {
  font-size: 18px;
  color: brown;
}
.post-link {
  background: oldlace;
  border: 2px solid brown;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}
</style>