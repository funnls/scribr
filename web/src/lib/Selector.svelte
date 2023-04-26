<style>
  .wrapper {
    display: flex;
    justify-content: space-around;

    max-width: 30%;
    margin: auto;
  }
</style>

<script lang="ts">
  import Button from './Button.svelte';

  let fileinput: HTMLInputElement;
  let fileName = 'Your file here';

  const onFileSelected = (e: Event) => {
    if (!e?.target) {
      return;
    }

    const target = e.target as HTMLInputElement;

    if (!target?.files) {
      return;
    }
    console.log({ something: target.files[0].name });
    let reader = new FileReader();

    reader.onload = () => {
      console.log('ok, this is done');
      if (target?.files) fileName = target.files[0].name;
    };
    reader.onprogress = () => console.log('progressing');
    reader.readAsDataURL(target.files[0]);
  };
</script>

<div class="wrapper">
  <Button
    on:click="{() => {
      fileinput.click();
    }}"
    text="Open Audio File"
  />
  <div>{fileName}</div>
  <input
    style="display:none"
    type="file"
    accept=".wav, .mp3, .ogg"
    on:change="{e => onFileSelected(e)}"
    bind:this="{fileinput}"
  />
</div>
