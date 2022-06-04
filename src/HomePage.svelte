<script>
    import { SUPPORTED_LANGUAGES } from "./constants";
    import Button from "./utility/Button.svelte";
</script>

<main class="page flex flex-row justify-space-evenly align-center">
    <div class="sec">
        <h1 class="text-x-large text-primary"> Realtime Code Editor for Developers. </h1>
        <ul class="flex justify-center align-center">
            <li class="badge badge-primary"> No Payment </li> &nbsp; &nbsp;
            <li class="badge badge-primary"> No Signup </li> &nbsp; &nbsp;
            <li class="badge badge-primary"> No Installation </li> &nbsp;
        </ul>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="flex justify-center align-center">
            <Button type="secondary" variant="brand" label="New Document" /> 
        </div>
        
    </div>
    <div class="sec">
        <!-- <h2 class="text-large text-tertiary"> Supported Languages </h2> -->
        <ul class="highlight bg-tertiary flex flex-column justify-center align-center">
            {#each SUPPORTED_LANGUAGES as language}
                <li class="badge badge-secondary"> {language} </li> &nbsp; &nbsp;
            {/each}
        </ul>
    </div>

    
</main>

<style>

    .page{
        width: 100vw;
        height: 100vh;
    }

    .text-x-large{
        font-size: 4rem;
    }

    .text-large{
        font-size: 2.5rem;
    }

    ul{
        list-style: none;
    }

    ul.highlight{
        padding: 3rem 2rem 2rem;
        border-radius: 7px;
        position: relative;
    }

    ul.highlight::before{
        content: "Languages";
        position: absolute;
        top: .5rem;
        /* left: .5rem; */
        color: white;
        font-size: 1.25rem;
        font-weight: 600;
        margin: auto;
    }

    h1,h2{
        margin: 0;
    }
   

</style>