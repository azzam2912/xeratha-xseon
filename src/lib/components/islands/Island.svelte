<script>
    export let kind = "";
    let bgColor;
    let borderColor;
    if (kind == "danger") {
        bgColor = "bg-[#d86969]";
        borderColor = "border-[#810404]";
    } else if(kind == "success") {
        bgColor = "bg-[#6fcf97]";
        borderColor = "border-[#00b386]";   
    } else if(kind == "warning") {
        bgColor = "bg-[#f5a623]";
        borderColor = "border-[#b57c00]";
    } else if(kind == "info") {
        bgColor = "bg-[#3b49df]";
        borderColor = "border-[#0012b3]";
    } else if(kind == "primary") {
        bgColor = "bg-[#f3f9ff]";
        borderColor = "border-[#bdcade]";
    }
</script>

<div class="flex items-center justify-center">
    <div class="flex-auto flex flex-col justify-center items-center h-1/2 my-2 mx-8 p-4 rounded-md {bgColor} border-2 {borderColor}">
        <slot />
    </div>
</div>