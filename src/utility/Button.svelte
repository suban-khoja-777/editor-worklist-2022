<script>

    export let label;
    export let onClick;
    export let type;
    export let variant;

</script>


<button class="pointer text-bold border-box" data-type={type} data-variant={variant} on:click={onClick}>{label}</button>

<style>
    button{
        border: none;
        outline: none;
        padding: .8rem 2rem;
        border-radius: 4px;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        font-size: 1rem;
    }

    button[data-type="primary"][data-variant="brand"]{
        background-color: var(--primary-color);
        border : 1px solid var(--primary-color);
        color: white;
    }

    button[data-type="primary"][data-variant="outline"]{
        background-color: white;
        border : 1px solid var(--primary-color);
        color: var(--primary-color);
    }

    button[data-type="secondary"][data-variant="brand"]{
        background-color: var(--secondary-color);
        border : 1px solid var(--secondary-color);
        color: white;
    }

    button[data-type="secondary"][data-variant="outline"]{
        background-color: white;
        border : 1px solid var(--secondary-color);
        color: var(--primary-color);
    }
    
</style>