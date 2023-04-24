<style>
  button {
    border: 0;
    border-radius: 10px;
    padding: 5px;
    background-color: var(--saffron);
    color: var(--yinminBlue);

    font-size: 16px;
  }
</style>

<script lang="ts">
  export let text: string;
</script>

<button on:click>{text}</button>
