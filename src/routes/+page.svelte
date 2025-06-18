<script lang="ts">
    import { Chat } from '@ai-sdk/svelte';
    let gpt = "[Draft] Workshop Finder";
    const chat = new Chat();
</script>

<h1>🚧 Alaska SBDC → {gpt}</h1>

<main>
  <ul>
    {#each chat.messages as message, messageIndex (messageIndex)}
      <li>
        <div>{message.role}</div>
        <div>
          {#each message.parts as part, partIndex (partIndex)}
            {#if part.type === 'text'}
              <div>{part.text}</div>
            {/if}
          {/each}
        </div>
      </li>
    {/each}
  </ul>
  <form onsubmit={chat.handleSubmit}>
    <input bind:value={chat.input} />
    <button type="submit">Send</button>
  </form>
</main>

<h6>🤖 <a href="https://github.com/aksbdc/self-service-landing-page">Source Code</a></h6>
