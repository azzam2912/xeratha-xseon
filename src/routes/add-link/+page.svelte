<script>
	import LinksInput from "../../lib/components/form/LinksInput.svelte";
import Input from "../../lib/components/form/Input.svelte";
import FormIsland from "../../lib/components/islands/FormIsland.svelte";
import Island from "../../lib/components/islands/Island.svelte";
import H1 from "../../lib/components/typography/H1.svelte";
import Line from "../../lib/components/typography/Line.svelte";
import ButtonSubmit from "../../lib/components/button/ButtonSubmit.svelte";

let addTypeOpton = '';
function handleChange(e) {
    addTypeOpton = e.target.value;
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
}   

</script>

<Island>
    <H1>Add Link(s)</H1>
    <FormIsland onSubmit={null}>
        <Input title="Math Olympiad" type="radio" name="subject" id="matholympiad"/>
        <Input title="Tweets" type="radio" name="subject" id="tweets"/>
        <Line />
        <Input title="Bunch" type="radio" name="addtype" value="bunch" id="bunch" onChange={handleChange}/>
        <Input title="Solo" type="radio" name="addtype" value="solo" id="solo" onChange={handleChange}/>

        {#if addTypeOpton === 'bunch'}
            <Input title="Input JSON" type="textarea" name="input" />
        {:else if addTypeOpton === 'solo'}
            <LinksInput />
        {/if}
        <ButtonSubmit text="Submit" />
    </FormIsland>
</Island>