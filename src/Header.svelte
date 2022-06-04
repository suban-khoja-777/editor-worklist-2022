<script>
    import Button from "./utility/Button.svelte";
</script>


<main>
    <header class="flex justify-space-between align-center fixed text-primary border-box">
        <h1 class="flex justify-center align-center"> worklist&nbsp; <span class=" flex justify-center align-center badge badge-primary">editor</span></h1>
        <ul class="nav-bar flex align-center justify-space-between">
            <li class="nav-item"> 
                <Button type="primary" variant="brand" label="New Document" /> 
            </li>
            &nbsp;
            &nbsp;
            <li class="nav-item"> 
                <Button type="primary" variant="outline" label="Contribute" />     
            </li>
        </ul>
    </header>
</main>

<style>

    header{
        padding: .75rem 1rem;
        width: 100vw;
        z-index: 9;
    }

    h1 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 600;
    }

    .nav-bar{
        list-style: none;
        margin: 0;
    }

</style>