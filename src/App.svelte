<script>
	import LoadSpinner from "./utility/LoadSpinner.svelte";
	import ProcessSpinner from "./utility/ProcessSpinner.svelte";
    import {registerListener , unregisterListener, fireEvent, EVENTS} from './EventManager';
	import { onDestroy, onMount } from "svelte";
	import HomePage from "./HomePage.svelte";
	import Container from "./Container.svelte";
	import Header from "./Header.svelte";
	
	let isProcessing = false;
	let showInitLoad = true;
	

	const showSpinner = () =>  {
    	isProcessing = true;
		isProcessing = isProcessing;
	}

	const hideSpinner = () =>  {
    	isProcessing = false;
		isProcessing = isProcessing;
	}

	onMount(() => {
		registerListener(EVENTS.SHOW_SPINNER,showSpinner);
		registerListener(EVENTS.HIDE_SPINNER,hideSpinner);
	});

	onDestroy ( () => {
		unregisterListener(EVENTS.SHOW_SPINNER,showSpinner);
		unregisterListener(EVENTS.HIDE_SPINNER,hideSpinner);
	})

</script>

<main>
	<ProcessSpinner show={isProcessing}/>
	<!-- <LoadSpinner show={showInitLoad}/> -->
	<Header />
	<HomePage /> 
	<!-- <Container /> -->
</main>
